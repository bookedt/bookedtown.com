"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

// Progressive enhancement: adds a fade-up reveal to common blocks as they scroll into view.
// Without JavaScript (or with reduced motion) everything simply stays visible.
const SELECTOR = [
  "main section h2", "main section > .wrap > .lead", ".sys", ".card", ".frame", ".item", ".stats > div", ".tstats > div",
  ".vcard", ".steps > div", "details", ".price > div", ".cards > *",
].join(",");

export default function Reveal() {
  const path = usePathname();
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const els = Array.from(document.querySelectorAll<HTMLElement>(SELECTOR)).filter((e) => !e.closest(".dash"));
    const pending = new Set<HTMLElement>();
    els.forEach((e, i) => {
      if (e.getBoundingClientRect().top < window.innerHeight * 0.92) return; // already on screen: leave it alone
      e.classList.add("rv");
      e.style.setProperty("--d", `${(i % 4) * 70}ms`);
      pending.add(e);
    });
    const reveal = (e: HTMLElement) => { e.classList.add("in"); pending.delete(e); };
    const check = () => {
      pending.forEach((e) => { if (e.getBoundingClientRect().top < window.innerHeight * 0.94) reveal(e); });
    };
    let raf = 0;
    const onScroll = () => { cancelAnimationFrame(raf); raf = requestAnimationFrame(check); };
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    const t = window.setTimeout(check, 300);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      window.clearTimeout(t);
      cancelAnimationFrame(raf);
    };
  }, [path]);
  return null;
}
