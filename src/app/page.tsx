import Image from "next/image";
import Link from "next/link";
import PebblEditor, { type EditorLine } from "@/components/PebblEditor";
import IOSDevice from "@/components/IOSDevice";

const ACCENT = "#c9a84c";
const APP_STORE_URL =
  "https://apps.apple.com/us/app/pebbl-notepad-calculator/id6762314944";

const SCRIPTS: Record<string, EditorLine[]> = {
  budget: [
    { input: "# budget", result: "" },
    { input: "rent = 1,850", result: "1,850" },
    { input: "groceries = 420", result: "420" },
    { input: "utilities = 135", result: "135" },
    { input: "subscriptions = 58", result: "58" },
    { input: "sum", result: "2,463" },
    { input: "", result: "" },
    { input: "salary = 5,200", result: "5,200" },
    { input: "salary - 2,463", result: "2,737" },
  ],
  cooking: [
    { input: "# sourdough", result: "" },
    { input: "flour = 500 g", result: "500 g" },
    { input: "hydration = 75%", result: "75%" },
    { input: "water = flour * hydration", result: "375 g" },
    { input: "salt = 2% of flour", result: "10 g" },
    { input: "starter = 20% of flour", result: "100 g" },
    { input: "", result: "" },
    { input: "475 °F to °C", result: "246 °C" },
  ],
  travel: [
    { input: "# tokyo", result: "" },
    { input: "flights = 1,240 USD", result: "1,240 USD" },
    { input: "hotel = 38,500 JPY", result: "38,500 JPY" },
    { input: "nights = 6", result: "6" },
    { input: "hotel * nights in USD", result: "$1,488" },
    { input: "", result: "" },
    { input: "10 km to miles", result: "6.21 mi" },
    { input: "30 °C to °F", result: "86 °F" },
  ],
  renovation: [
    { input: "# kitchen", result: "" },
    { input: "floor = 4.2 m * 3.6 m", result: "15.12 m²" },
    { input: "floor in sqft", result: "162.75 sqft" },
    { input: "tile = 60 cm * 60 cm", result: "0.36 m²" },
    { input: "tiles = floor / tile", result: "42" },
    { input: "tiles + 10%", result: "46.2" },
    { input: "", result: "" },
    { input: "paint = 32 USD", result: "32 USD" },
    { input: "paint * 3", result: "96 USD" },
  ],
};

function Nav() {
  return (
    <nav className="sticky top-0 z-50 flex items-center justify-between border-b border-[color:var(--color-border)] bg-[rgba(10,10,10,0.6)] px-6 py-5 backdrop-blur-xl sm:px-8">
      <div className="flex items-center gap-2.5">
        <Image
          src="/icon.png"
          alt=""
          width={28}
          height={28}
          className="rounded-[7px]"
          priority
        />
        <span className="text-[15px] font-semibold tracking-tight">Pebbl</span>
      </div>
      <div className="flex items-center gap-6 text-sm text-zinc-400 sm:gap-7">
        <a
          href="#examples"
          className="hidden sm:inline hover:text-white transition-colors"
        >
          Examples
        </a>
        <a
          href="#syntax"
          className="hidden sm:inline hover:text-white transition-colors"
        >
          Syntax
        </a>
        <a
          href={APP_STORE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full bg-white px-3.5 py-1.5 text-[13px] font-semibold text-black transition-opacity hover:opacity-90"
        >
          Download
        </a>
      </div>
    </nav>
  );
}

function AppleBadge() {
  return (
    <a
      href={APP_STORE_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Download on the App Store"
      className="inline-flex transition-opacity hover:opacity-85"
    >
      <Image
        src="/app-store-badge.svg"
        alt="Download on the App Store"
        width={156}
        height={52}
        unoptimized
        priority
      />
    </a>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden px-6 pt-16 pb-20 sm:px-8 sm:pt-20 sm:pb-24">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background: `radial-gradient(ellipse at 50% 0%, ${ACCENT}22 0%, transparent 55%)`,
        }}
      />

      <div className="relative mx-auto grid max-w-[1180px] items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
        <div>
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-[color:var(--color-border-strong)] px-3 py-1.5 text-xs text-zinc-400">
            <span
              className="inline-block h-1.5 w-1.5 rounded-full"
              style={{ background: ACCENT }}
            />
            <span className="font-mono tracking-wide">v1 · now on iPhone</span>
          </div>

          <h1
            className="font-serif text-white"
            style={{
              fontSize: "clamp(56px, 7.5vw, 104px)",
              lineHeight: 1.05,
              margin: 0,
              letterSpacing: "-0.025em",
            }}
          >
            Math, the way
            <br />
            <em
              className="font-serif"
              style={{ color: ACCENT, fontStyle: "italic" }}
            >
              you think.
            </em>
          </h1>

          <p
            className="mt-7 max-w-md text-zinc-400"
            style={{ fontSize: 18, lineHeight: 1.55 }}
          >
            A notepad calculator for iPhone. Type expressions in plain English
            and watch the answer appear beside every line.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-5">
            <AppleBadge />
            <span className="font-mono text-[13px] text-zinc-500">
              Free · no ads · no subscription
            </span>
          </div>
        </div>

        <div className="flex justify-center lg:justify-end">
          <div
            className="lg:-mb-40"
            style={{
              transform: "scale(0.78)",
              transformOrigin: "top center",
            }}
          >
            <IOSDevice width={402} height={820}>
              <div
                style={{
                  padding: "62px 14px 28px",
                  height: "100%",
                  boxSizing: "border-box",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <PebblEditor
                  script={SCRIPTS.budget}
                  accent={ACCENT}
                  surface="rgba(255,255,255,0.02)"
                  border="rgba(255,255,255,0.08)"
                  speed={48}
                />
              </div>
            </IOSDevice>
          </div>
        </div>
      </div>
    </section>
  );
}

type UseCaseProps = {
  eyebrow: string;
  title: React.ReactNode;
  body: string;
  scriptKey: keyof typeof SCRIPTS;
  alignRight?: boolean;
  startDelay: number;
};

function UseCase({
  eyebrow,
  title,
  body,
  scriptKey,
  alignRight,
  startDelay,
}: UseCaseProps) {
  return (
    <div className="grid items-center gap-10 border-t border-[color:var(--color-border)] py-12 md:gap-12 md:py-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
      <div className={alignRight ? "lg:order-2" : "lg:order-1"}>
        <div
          className="mb-4 font-mono text-[11px] uppercase tracking-[0.15em]"
          style={{ color: ACCENT }}
        >
          {eyebrow}
        </div>
        <h3
          className="font-serif text-white"
          style={{
            fontSize: "clamp(32px, 4.5vw, 52px)",
            lineHeight: 1.08,
            margin: 0,
            letterSpacing: "-0.02em",
          }}
        >
          {title}
        </h3>
        <p
          className="mt-5 max-w-[380px] text-zinc-400"
          style={{ fontSize: 16, lineHeight: 1.6 }}
        >
          {body}
        </p>
      </div>
      <div className={alignRight ? "lg:order-1" : "lg:order-2"}>
        <PebblEditor
          script={SCRIPTS[scriptKey]}
          accent={ACCENT}
          surface="var(--color-surface-card)"
          border="var(--color-border-strong)"
          speed={52}
          startDelay={startDelay}
        />
      </div>
    </div>
  );
}

function Examples() {
  return (
    <section
      id="examples"
      className="mx-auto max-w-[1180px] px-6 pt-24 pb-10 sm:px-8"
    >
      <div className="mb-8 max-w-[720px]">
        <div className="mb-4 font-mono text-[11px] uppercase tracking-[0.18em] text-zinc-500">
          01 — Examples
        </div>
        <h2
          className="font-serif text-white"
          style={{
            fontSize: "clamp(40px, 5.5vw, 68px)",
            lineHeight: 1.06,
            margin: 0,
            letterSpacing: "-0.02em",
          }}
        >
          Four ways people{" "}
          <em
            className="font-serif"
            style={{ color: ACCENT, fontStyle: "italic" }}
          >
            actually use it.
          </em>
        </h2>
      </div>

      <UseCase
        eyebrow="Monthly budget"
        title="Every number has a name."
        body="Assign values to variables, reuse them anywhere, and let Pebbl keep the math in your head out of your head."
        scriptKey="budget"
        startDelay={200}
      />
      <UseCase
        eyebrow="Cooking & baking"
        title={<>Bakers&rsquo; percentages, without the spreadsheet.</>}
        body="Hydration, ratios, oven temps across units. Change the flour weight and every derived quantity updates with it."
        scriptKey="cooking"
        alignRight
        startDelay={500}
      />
      <UseCase
        eyebrow="Travel"
        title="Currencies and units, in the language you think in."
        body={
          'Live exchange rates cached for offline. Type "10 km to miles" or "30 °C to °F" — no menus, no mode switches.'
        }
        scriptKey="travel"
        startDelay={800}
      />
      <UseCase
        eyebrow="Home renovation"
        title="Areas, materials, waste factor."
        body="Multiply dimensions, convert between metric and imperial, add a 10% overage. Keep the plan in one document."
        scriptKey="renovation"
        alignRight
        startDelay={1100}
      />
    </section>
  );
}

function Syntax() {
  const sections: { title: string; rows: [string, string][] }[] = [
    {
      title: "Arithmetic",
      rows: [
        ["1,200 + 450", "1,650"],
        ["150 * 1.08", "162"],
        ["2^10", "1,024"],
        ["sqrt(144)", "12"],
      ],
    },
    {
      title: "Variables",
      rows: [
        ["salary = 5,200", "5,200"],
        ["rent = 1,850", "1,850"],
        ["salary - rent", "3,350"],
        ["sum", "— all above"],
      ],
    },
    {
      title: "Percentages",
      rows: [
        ["18% of 84", "15.12"],
        ["120 + 15%", "138"],
        ["25% off 320", "240"],
        ["40 as % of 200", "20%"],
      ],
    },
    {
      title: "Units",
      rows: [
        ["5 km in miles", "3.11 mi"],
        ["180 cm to ft", "5.91 ft"],
        ["2 hours in minutes", "120 min"],
        ["500 g to oz", "17.64 oz"],
      ],
    },
    {
      title: "Currency",
      rows: [
        ["100 USD in EUR", "92.18 EUR"],
        ["2,500 JPY in USD", "$16.08"],
        ["50 GBP + 30 EUR", "91.47 USD"],
        ["500 EUR to USD", "$542.50"],
      ],
    },
    {
      title: "Scientific",
      rows: [
        ["sin(pi / 2)", "1"],
        ["log(1000)", "3"],
        ["fact(5)", "120"],
        ["0xff in binary", "1111 1111"],
      ],
    },
  ];

  return (
    <section
      id="syntax"
      className="border-y border-[color:var(--color-border)] bg-[color:var(--color-surface)] px-6 py-24 sm:px-8 sm:py-28"
    >
      <div className="mx-auto max-w-[1180px]">
        <div className="mb-12 max-w-[720px]">
          <div className="mb-4 font-mono text-[11px] uppercase tracking-[0.18em] text-zinc-500">
            02 — Cheat sheet
          </div>
          <h2
            className="font-serif text-white"
            style={{
              fontSize: "clamp(40px, 5.5vw, 68px)",
              lineHeight: 1.06,
              margin: 0,
              letterSpacing: "-0.02em",
            }}
          >
            The whole{" "}
            <em
              className="font-serif"
              style={{ color: ACCENT, fontStyle: "italic" }}
            >
              syntax,
            </em>{" "}
            in one page.
          </h2>
          <p
            className="mt-5 max-w-[520px] text-zinc-400"
            style={{ fontSize: 16, lineHeight: 1.6 }}
          >
            There are no menus, no modes. You type what you mean. If it reads
            like English, it probably works.
          </p>
        </div>

        <div
          className="grid gap-px border border-[color:var(--color-border)] bg-[color:var(--color-border)]"
          style={{
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          }}
        >
          {sections.map((s) => (
            <div key={s.title} className="bg-[color:var(--color-surface)] p-7">
              <div className="mb-4 flex items-baseline gap-2.5 border-b border-[color:var(--color-border)] pb-3.5">
                <span className="font-serif text-[22px] text-white">
                  {s.title}
                </span>
              </div>
              <div className="flex flex-col gap-0.5">
                {s.rows.map(([l, r], i) => (
                  <div
                    key={i}
                    className="flex justify-between gap-4 py-1.5 font-mono text-[13px]"
                  >
                    <span className="overflow-hidden text-ellipsis whitespace-nowrap text-zinc-300">
                      {l}
                    </span>
                    <span
                      className="whitespace-nowrap"
                      style={{ color: ACCENT }}
                    >
                      {r}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Pricing() {
  return (
    <section className="mx-auto max-w-[820px] px-6 py-24 text-center sm:px-8 sm:py-28">
      <div className="mb-6 font-mono text-[11px] uppercase tracking-[0.18em] text-zinc-500">
        03 — Pricing
      </div>

      <h2
        className="font-serif text-white"
        style={{
          fontSize: "clamp(52px, 8vw, 112px)",
          lineHeight: 1.02,
          margin: 0,
          letterSpacing: "-0.025em",
        }}
      >
        Zero dollars.{" "}
        <em
          className="font-serif"
          style={{ color: ACCENT, fontStyle: "italic" }}
        >
          Always.
        </em>
      </h2>

      <p
        className="mx-auto mt-6 max-w-[520px] text-zinc-400"
        style={{ fontSize: 18, lineHeight: 1.55 }}
      >
        No account. No analytics. No tracking. No ads. No subscription.
        Documents stay on your device.
      </p>

      <div className="mt-10 flex flex-wrap justify-center gap-5">
        <AppleBadge />
      </div>

      <div
        className="mx-auto mt-16 grid max-w-[680px] gap-px border border-[color:var(--color-border)] bg-[color:var(--color-border)]"
        style={{
          gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
        }}
      >
        {[
          ["$0", "price, forever"],
          ["0", "accounts required"],
          ["0", "trackers"],
          ["100%", "on-device"],
        ].map(([big, small]) => (
          <div key={small} className="bg-[color:var(--color-ink)] px-4 py-6">
            <div
              className="font-serif"
              style={{ fontSize: 40, color: ACCENT, lineHeight: 1 }}
            >
              {big}
            </div>
            <div className="mt-2 font-mono text-[11px] uppercase tracking-[0.1em] text-zinc-500">
              {small}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-[color:var(--color-border)] px-6 py-8 sm:px-8">
      <div className="mx-auto flex max-w-[1180px] flex-wrap items-center justify-between gap-5 text-[13px] text-zinc-500">
        <div className="flex items-center gap-2.5">
          <Image
            src="/icon.png"
            alt=""
            width={20}
            height={20}
            className="rounded-[5px]"
          />
          <span>&copy; {new Date().getFullYear()} Pebbl</span>
        </div>
        <div className="flex gap-6">
          <Link
            href="/privacy"
            className="hover:text-zinc-300 transition-colors"
          >
            Privacy
          </Link>
          <a
            href="mailto:support@xemc.dev"
            className="hover:text-zinc-300 transition-colors"
          >
            Contact
          </a>
          <a
            href={APP_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-zinc-300 transition-colors"
          >
            App Store
          </a>
        </div>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <div className="flex min-h-full flex-col">
      <Nav />
      <main className="flex-1">
        <Hero />
        <Examples />
        <Syntax />
        <Pricing />
      </main>
      <Footer />
    </div>
  );
}
