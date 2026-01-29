import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] bg-white text-gray-900">
      <main className="flex flex-col gap-8 row-start-2 items-center text-center">
        <div className="relative w-80 h-80 sm:w-96 sm:h-96 mb-4 animate-float">
          <Image
            src="/itWadura-logo-noBack.png"
            alt="itWadura Logo"
            fill
            className="object-contain"
            priority
          />
        </div>

        <div className="space-y-4">
          <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-gray-900">
            Coming Soon
          </h1>
          <p className="text-lg sm:text-l text-gray-600 max-w-md mx-auto">
            We are building something amazing. Stay tuned for updates.
          </p>
        </div>

        <div className="flex gap-4 items-center flex-col sm:flex-row mt-8">
          <div className="px-6 py-3 rounded-full bg-gray-100 border border-gray-200 text-sm text-gray-700 shadow-sm">
            🚧 Under Construction
          </div>
        </div>
      </main>

      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center text-sm text-gray-500">
        <p>&copy; {new Date().getFullYear()} itWadura. All rights reserved.</p>
      </footer>
    </div>
  );
}
