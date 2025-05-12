import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center">
      <Link
        href="/en/home"
        className="px-6 py-3 bg-red-600 text-white font-bold rounded hover:bg-red-700 transition-colors"
      >
        Go to Home
      </Link>
    </main>
  );
}
