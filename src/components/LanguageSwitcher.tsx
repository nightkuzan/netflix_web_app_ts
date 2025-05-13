"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useParams, usePathname } from "next/navigation";
import { i18nConfig } from "@configs/i18n";

const LanguageSwitcher = () => {
  const params = useParams();
  const pathname = usePathname();
  const currentLang = params.lang;

  const [pathWithoutLang, setPathWithoutLang] = useState("");

  useEffect(() => {
    if (pathname) {
      setPathWithoutLang(pathname.replace(`/${currentLang}`, ""));
    }
  }, [pathname, currentLang]);

  return (
    <div className="flex items-center space-x-2 text-white">
      {i18nConfig.locales.map((locale) => (
        <Link
          href={`/${locale}${pathWithoutLang}`}
          key={locale}
          replace={true}
          className={`px-2 py-1 rounded text-sm ${
            locale === currentLang
              ? "bg-red-600 text-white"
              : "bg-gray-700 text-gray-300 hover:bg-gray-600"
          }`}
        >
          {locale.toUpperCase()}
        </Link>
      ))}
    </div>
  );
};

export default LanguageSwitcher;
