import Image from "next/image";
import Link from "next/link";

function EditorLine({ input, result }: { input: string; result: string }) {
  return (
    <div className="flex justify-between items-baseline py-1.5 border-b border-white/5">
      <span className="font-mono text-sm text-zinc-300">{input}</span>
      <span className="font-mono text-sm text-gold">{result}</span>
    </div>
  );
}

function FeatureCard({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="rounded-xl bg-surface-light p-6">
      <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>
      <p className="text-sm text-zinc-400 leading-relaxed">{description}</p>
    </div>
  );
}

export default function Home() {
  return (
    <div className="flex flex-col min-h-full">
      <main className="flex-1">
        {/* Hero */}
        <section className="flex flex-col items-center justify-center px-6 pt-24 pb-16 text-center">
          <Image
            src="/icon.png"
            alt="Pebbl app icon"
            width={96}
            height={96}
            className="rounded-2xl mb-8"
            priority
          />
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-white max-w-lg">
            Math, the way
            <br />
            <span className="text-gold">you think.</span>
          </h1>
          <p className="mt-6 text-lg text-zinc-400 max-w-md leading-relaxed">
            A notepad calculator for iPhone. Type expressions in plain
            English and see live results beside every line.
          </p>
          <p className="mt-2 text-sm text-zinc-500">
            Free. No ads. No subscription.
          </p>

          <a
            href="#"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-white text-black px-6 py-3 text-sm font-semibold transition-opacity hover:opacity-90"
          >
            <svg
              viewBox="0 0 24 24"
              className="w-5 h-5"
              fill="currentColor"
            >
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
            </svg>
            Coming Soon on the App Store
          </a>
        </section>

        {/* Editor Preview */}
        <section className="px-6 pb-20">
          <div className="max-w-md mx-auto rounded-2xl bg-surface border border-white/5 p-6">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-2 h-2 rounded-full bg-gold" />
              <span className="text-xs text-zinc-500 font-mono">
                budget.pebbl
              </span>
            </div>
            <EditorLine input="rent = 1200" result="1,200" />
            <EditorLine input="groceries = 400" result="400" />
            <EditorLine input="utilities = 150" result="150" />
            <EditorLine input="rent + groceries + utilities" result="1,750" />
            <EditorLine input="" result="" />
            <EditorLine input="salary = 5000 USD" result="5,000 USD" />
            <EditorLine input="salary in EUR" result="4,612.50 EUR" />
            <EditorLine input="32°F to °C" result="0°C" />
          </div>
        </section>

        {/* Features */}
        <section className="px-6 pb-20">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold text-white text-center mb-10">
              Simple tools, done right.
            </h2>
            <div className="grid gap-4 sm:grid-cols-2">
              <FeatureCard
                title="Live Currency"
                description="Type &quot;100 USD in EUR&quot; and see the result with real exchange rates. Works offline with cached rates."
              />
              <FeatureCard
                title="Unit Conversion"
                description="Length, weight, temperature, time, digital storage, and more. Just type naturally — &quot;5 km in miles&quot;."
              />
              <FeatureCard
                title="Variables & Sums"
                description="Assign values to names and reuse them. Use sum and average to aggregate sections."
              />
              <FeatureCard
                title="Scientific Functions"
                description="sqrt, sin, cos, log, factorial, pi, e. Hex, binary, and octal conversions built in."
              />
              <FeatureCard
                title="Multiple Documents"
                description="Organize calculations into named documents. Auto-saved locally, always there when you come back."
              />
              <FeatureCard
                title="Private by Design"
                description="No account. No analytics. No tracking. Documents stay on your device. Free forever."
              />
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/5 py-8 px-6">
        <div className="max-w-2xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-zinc-500">
          <span>&copy; {new Date().getFullYear()} Pebbl</span>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-zinc-300 transition-colors">
              Privacy Policy
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
