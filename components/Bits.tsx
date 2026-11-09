import Link from "next/link";
import BookButton from "./BookButton";

export function PageHero({ title, lead, crumbs }: { title: React.ReactNode; lead?: string; crumbs?: { href: string; label: string }[] }) {
  return (
    <section className="phero">
      <div className="wrap">
        {crumbs && (
          <nav className="crumbs" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            {crumbs.map((c) => (
              <span key={c.href}> / <Link href={c.href}>{c.label}</Link></span>
            ))}
          </nav>
        )}
        <h1>{title}</h1>
        {lead && <p className="lead">{lead}</p>}
      </div>
    </section>
  );
}

export function Faq({ items, title = "Frequently asked questions", alt = false }: { items: { q: string; a: string }[]; title?: string; alt?: boolean }) {
  return (
    <section className={alt ? "alt" : undefined}>
      <div className="wrap faq-wrap">
        <h2 style={{ marginBottom: "34px" }}>{title}</h2>
        {items.map((f) => (
          <details key={f.q}>
            <summary>{f.q}</summary>
            <p>{f.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}

export function CtaBand({ title = "Ready to get booked?", text = "Book a free strategy call. We’ll audit your Google profile and website and show you where your competitors are winning." }: { title?: string; text?: string }) {
  return (
    <section className="final">
      <div className="wrap">
        <h2>{title}</h2>
        <p className="lead">{text}</p>
        <BookButton className="btn">Book a free strategy call &rarr;</BookButton>
      </div>
    </section>
  );
}

export function Checks({ items }: { items: string[] }) {
  return (
    <ul className="checks">
      {items.map((i) => <li key={i}>{i}</li>)}
    </ul>
  );
}
