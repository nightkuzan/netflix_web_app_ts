import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { i18nConfig } from "@/configs/i18n";
import { match } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";

// Get user preferred locale from Accept-Language header or use default
function getLocale(request: NextRequest): string {
  // Get accepted languages from the headers
  const negotiatorHeaders: Record<string, string> = {};
  request.headers.forEach((value, key) => {
    negotiatorHeaders[key] = value;
  });

  // Create negotiator instance
  const locales = i18nConfig.locales;

  // Use negotiator and intl-localematcher to get the best locale
  let languages: string[] = [];
  try {
    const negotiator = new Negotiator({ headers: negotiatorHeaders });
    languages = negotiator.languages();
  } catch (e) {
    // Fallback if negotiator throws an error
    languages = [i18nConfig.defaultLocale];
  }

  return match(languages, locales, i18nConfig.defaultLocale);
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Check if pathname is the root path
  if (pathname === "/") {
    return NextResponse.redirect(
      new URL(`/${i18nConfig.defaultLocale}/home`, request.url)
    );
  }

  // Check if the pathname has a locale prefix
  const pathnameHasLocale = i18nConfig.locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  // If there's no locale in the pathname, redirect to add one
  if (!pathnameHasLocale) {
    const locale = getLocale(request);
    const newUrl = new URL(`/${locale}${pathname}`, request.url);

    // Copy over search params
    request.nextUrl.searchParams.forEach((value, key) => {
      newUrl.searchParams.set(key, value);
    });

    return NextResponse.redirect(newUrl);
  }

  return NextResponse.next();
}

// Only run middleware on specific paths
export const config = {
  matcher: [
    // Skip all internal paths (_next, api, etc)
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
    // Run on the root path
    "/",
  ],
};
