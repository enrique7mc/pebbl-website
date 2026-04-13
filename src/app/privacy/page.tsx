import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — Pebbl",
  description: "Pebbl does not collect, store, or transmit any personal data.",
};

export default function Privacy() {
  return (
    <div className="flex flex-col min-h-full">
      <main className="flex-1 px-6 py-16">
        <article className="max-w-2xl mx-auto">
          <Link
            href="/"
            className="text-sm text-zinc-500 hover:text-zinc-300 transition-colors mb-8 inline-block"
          >
            &larr; Back to Pebbl
          </Link>

          <h1 className="text-3xl font-bold text-white mb-2">
            Privacy Policy
          </h1>
          <p className="text-sm text-zinc-500 mb-10">Last updated: April 2026</p>

          <div className="space-y-8 text-zinc-400 leading-relaxed">
            <section>
              <h2 className="text-lg font-semibold text-white mb-3">
                Data Collection
              </h2>
              <p>
                Pebbl does not collect, store, or transmit any personal data.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-white mb-3">
                How Pebbl Works
              </h2>
              <ul className="list-disc list-inside space-y-2">
                <li>
                  All calculations are performed locally on your device
                </li>
                <li>
                  Currency exchange rates are fetched from a public API
                  (open.er-api.com). No user data is sent with these requests
                </li>
                <li>
                  Documents are stored locally on your device using on-device
                  storage
                </li>
                <li>
                  No data is sent to any server, analytics service, or third
                  party
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-white mb-3">
                Third-Party Services
              </h2>
              <p>
                <strong className="text-zinc-300">Exchange Rate API:</strong>{" "}
                Pebbl fetches currency exchange rates from open.er-api.com.
                This is a public API that does not require authentication. Only
                a standard HTTP request is made; no user data, device
                identifiers, or personal information is included.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-white mb-3">
                Analytics & Tracking
              </h2>
              <p>
                Pebbl does not use any analytics, tracking, advertising, or
                telemetry services.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-white mb-3">
                Data Storage
              </h2>
              <p>
                All app data (documents, cached exchange rates, preferences) is
                stored locally on your device. Uninstalling the app removes all
                data.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-white mb-3">
                Children&apos;s Privacy
              </h2>
              <p>
                Pebbl does not collect data from anyone, including children.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-white mb-3">
                Contact
              </h2>
              <p>
                For questions about this privacy policy, please contact us at{" "}
                <a
                  href="mailto:hello@xemc.dev"
                  className="text-gold hover:text-gold-light transition-colors"
                >
                  hello@xemc.dev
                </a>
                .
              </p>
            </section>
          </div>
        </article>
      </main>

      <footer className="border-t border-white/5 py-8 px-6">
        <div className="max-w-2xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-zinc-500">
          <span>&copy; {new Date().getFullYear()} Pebbl</span>
          <div className="flex gap-6">
            <Link
              href="/privacy"
              className="hover:text-zinc-300 transition-colors"
            >
              Privacy Policy
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
