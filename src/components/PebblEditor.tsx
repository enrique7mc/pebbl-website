"use client";

import { useEffect, useState, useSyncExternalStore } from "react";

function subscribeReducedMotion(onChange: () => void) {
  if (typeof window === "undefined" || !window.matchMedia) return () => {};
  const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
  mq.addEventListener("change", onChange);
  return () => mq.removeEventListener("change", onChange);
}

function getReducedMotion() {
  if (typeof window === "undefined" || !window.matchMedia) return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function getReducedMotionServer() {
  return false;
}

export type EditorLine = {
  input: string;
  result: string;
};

const KEYWORDS = new Set(["of", "in", "to", "as", "on", "off", "sum", "average", "total", "avg", "prev"]);
const UNITS = new Set([
  "g", "kg", "mg", "lb", "oz", "ml", "l", "tsp", "tbsp", "cup", "cups",
  "km", "m", "cm", "mm", "mi", "ft", "in", "yd",
  "sqft", "sqm", "m²", "cm²", "ft²", "mi²",
  "°F", "°C", "°f", "°c",
  "USD", "EUR", "GBP", "JPY", "CAD", "AUD", "CHF", "CNY", "MXN",
  "gallon", "gallons", "liter", "liters", "night", "nights",
  "hour", "hours", "min", "minutes", "sec", "seconds", "day", "days",
]);

type Token = { t: "ws" | "comment" | "op" | "num" | "unit" | "kw" | "ident" | "fn" | "other"; v: string };

function tokenize(s: string): Token[] {
  const out: Token[] = [];
  let i = 0;
  while (i < s.length) {
    const c = s[i];
    if (/\s/.test(c)) { out.push({ t: "ws", v: c }); i++; continue; }
    if (c === "#") { out.push({ t: "comment", v: s.slice(i) }); break; }
    if ("+-*/=^()".includes(c)) { out.push({ t: "op", v: c }); i++; continue; }
    if (c === "%") { out.push({ t: "op", v: c }); i++; continue; }
    if (/[0-9]/.test(c)) {
      let j = i;
      while (j < s.length && /[0-9,.−]/.test(s[j])) j++;
      out.push({ t: "num", v: s.slice(i, j) });
      i = j;
      continue;
    }
    if (c === "°") {
      let j = i + 1;
      while (j < s.length && /[A-Za-z]/.test(s[j])) j++;
      out.push({ t: "unit", v: s.slice(i, j) });
      i = j;
      continue;
    }
    if (/[A-Za-z_]/.test(c)) {
      let j = i;
      while (j < s.length && /[A-Za-z0-9_]/.test(s[j])) j++;
      const v = s.slice(i, j);
      const isFn = s[j] === "(";
      if (KEYWORDS.has(v.toLowerCase())) out.push({ t: "kw", v });
      else if (UNITS.has(v)) out.push({ t: "unit", v });
      else if (isFn) out.push({ t: "fn", v });
      else out.push({ t: "ident", v });
      i = j;
      continue;
    }
    out.push({ t: "other", v: c });
    i++;
  }
  return out;
}

function Highlight({ text, accent }: { text: string; accent: string }) {
  const tokens = tokenize(text);
  const C: Record<string, string | undefined> = {
    ident: "#e4e4e7",
    op: accent,
    num: "#e4e4e7",
    kw: "#7cb7e8",
    unit: "#8ec07c",
    fn: "#c9b88a",
    comment: "#52525b",
    other: "#e4e4e7",
    ws: undefined,
  };
  return (
    <>
      {tokens.map((tk, i) => (
        <span key={i} style={{ color: C[tk.t] }}>
          {tk.v}
        </span>
      ))}
    </>
  );
}

type PhaseState = {
  lineIdx: number;
  charIdx: number;
  phase: "waiting" | "typing" | "done";
};

type PebblEditorProps = {
  script: EditorLine[];
  accent?: string;
  surface?: string;
  border?: string;
  loop?: boolean;
  speed?: number;
  pauseAfter?: number;
  startDelay?: number;
  showChrome?: boolean;
  resultColWidth?: number;
  rowHeight?: number;
  radius?: number;
};

export default function PebblEditor({
  script,
  accent = "#c9a84c",
  surface = "rgba(255,255,255,0.02)",
  border = "rgba(255,255,255,0.08)",
  loop = true,
  speed = 52,
  pauseAfter = 2200,
  startDelay = 400,
  showChrome = true,
  resultColWidth = 112,
  rowHeight = 34,
  radius = 16,
}: PebblEditorProps) {
  const reducedMotion = useSyncExternalStore(
    subscribeReducedMotion,
    getReducedMotion,
    getReducedMotionServer,
  );
  const [state, setState] = useState<PhaseState>({
    lineIdx: 0,
    charIdx: 0,
    phase: "waiting",
  });

  useEffect(() => {
    if (reducedMotion) return;
    const t = setTimeout(() => {
      setState((s) => ({ ...s, phase: "typing" }));
    }, startDelay);
    return () => clearTimeout(t);
  }, [script, startDelay, reducedMotion]);

  useEffect(() => {
    if (reducedMotion) return;
    if (state.phase === "typing") {
      const line = script[state.lineIdx];
      if (!line) return;
      const target = line.input || "";
      if (state.charIdx < target.length) {
        const delay = speed + (Math.random() * 30 - 10);
        const t = setTimeout(() => {
          setState((s) => ({ ...s, charIdx: s.charIdx + 1 }));
        }, delay);
        return () => clearTimeout(t);
      } else {
        const t = setTimeout(() => {
          if (state.lineIdx + 1 >= script.length) {
            setState((s) => ({ ...s, phase: "done" }));
          } else {
            setState(() => ({
              lineIdx: state.lineIdx + 1,
              charIdx: 0,
              phase: "typing",
            }));
          }
        }, line.input ? 280 : 140);
        return () => clearTimeout(t);
      }
    }
    if (state.phase === "done" && loop) {
      const t = setTimeout(() => {
        setState({ lineIdx: 0, charIdx: 0, phase: "typing" });
      }, pauseAfter);
      return () => clearTimeout(t);
    }
  }, [state, script, loop, speed, pauseAfter, reducedMotion]);

  return (
    <div
      style={{
        width: "100%",
        boxSizing: "border-box",
        background: surface,
        border: `1px solid ${border}`,
        borderRadius: radius,
        overflow: "hidden",
      }}
    >
      {showChrome && (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "14px 18px",
            borderBottom: `1px solid ${border}`,
          }}
        >
          <span
            style={{
              fontFamily: "var(--font-geist-sans), system-ui",
              fontSize: 14,
              fontWeight: 600,
              color: "#fff",
              letterSpacing: "-0.01em",
            }}
          >
            Pebbl
          </span>
          <span
            aria-hidden
            style={{
              width: 26,
              height: 26,
              borderRadius: 99,
              border: "1px solid rgba(255,255,255,0.12)",
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <svg width="11" height="11" viewBox="0 0 11 11" aria-hidden>
              <path
                d="M5.5 1v9M1 5.5h9"
                stroke={accent}
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          </span>
        </div>
      )}

      <div style={{ position: "relative", padding: "14px 18px" }}>
        <div
          aria-hidden
          style={{
            position: "absolute",
            top: 8,
            bottom: 8,
            right: 18 + resultColWidth,
            width: 1,
            background: border,
          }}
        />

        <div
          style={{
            display: "grid",
            gridTemplateColumns: `1fr ${resultColWidth}px`,
            columnGap: 0,
          }}
        >
          {script.map((line, i) => {
            const isCurrent =
              !reducedMotion && i === state.lineIdx && state.phase === "typing";
            const isPast =
              reducedMotion || i < state.lineIdx || state.phase === "done";
            const shown = isPast
              ? line.input || ""
              : isCurrent
                ? (line.input || "").slice(0, state.charIdx)
                : "";
            const showResult =
              isPast || (isCurrent && state.charIdx >= (line.input || "").length);

            return (
              <div key={i} style={{ display: "contents" }}>
                <div
                  style={{
                    fontFamily:
                      "var(--font-geist-mono), ui-monospace, 'SF Mono', Menlo, monospace",
                    fontSize: 14,
                    whiteSpace: "pre",
                    letterSpacing: "-0.01em",
                    height: rowHeight,
                    display: "flex",
                    alignItems: "center",
                    paddingRight: 24,
                  }}
                >
                  <span>
                    <Highlight text={shown} accent={accent} />
                    {isCurrent && (
                      <span
                        className="pebbl-caret"
                        style={{
                          display: "inline-block",
                          width: 2,
                          height: 15,
                          background: accent,
                          marginLeft: 1,
                          transform: "translateY(3px)",
                        }}
                      />
                    )}
                  </span>
                </div>
                <div
                  style={{
                    fontFamily:
                      "var(--font-geist-mono), ui-monospace, 'SF Mono', Menlo, monospace",
                    fontSize: 14,
                    color: accent,
                    whiteSpace: "nowrap",
                    textAlign: "right",
                    paddingLeft: 16,
                    height: rowHeight,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "flex-end",
                    opacity: showResult && line.result ? 1 : 0,
                    transition: "opacity 220ms ease",
                  }}
                >
                  {line.result || " "}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
