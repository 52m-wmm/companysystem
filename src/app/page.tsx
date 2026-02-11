import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-dvh bg-white">
      <main className="flex flex-col items-center justify-center text-center max-w-5xl mx-auto min-h-dvh">
        <div className="flex flex-col gap-6 p-12 rounded-xl bg-black/90 w-4/5 sm:max-w-2xl mx-auto text-white shadow-lg">
          <h1 className="text-2xl font-bold">Welcome to 52m Company System</h1>

          <address className="italic">
            555 Gateway Lane<br />
            Kansas City, KS 66101<br />
          </address>

          <p>Open Daily: 9am to 5pm</p>

          <Link href="tel:13221606690" className="hover:underline">
            13221606690
          </Link>
        </div>
      </main>
    </div>
  );
}

