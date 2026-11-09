import Link from "next/link";
import { SERVICES } from "../../lib/services";
import { PageHero, CtaBand, Faq } from "../../components/Bits";

export const metadata = {
  title: "The system",
  description: "Everything a US contractor needs to get booked: website, Google Business Profile, monthly SEO, reviews, missed-call text-back and customer reactivation.",
  alternates: { canonical: "/services" },
};

export default function Services() {
  return (
    <>
      <PageHero
        crumbs={[{ href: "/services", label: "The system" }]}
        title={<>One system. <span className="hl">Seven ways to get booked.</span></>}
        lead="Six services work together in the $297 plan, with Google Ads available as an add-on. Each one does a job the others depend on."
      />
      <section style={{ paddingTop: 24 }}>
        <div className="wrap">
          <div className="grid g3" style={{ marginTop: 0 }}>
            {SERVICES.map((s, i) => (
              <Link key={s.slug} href={`/services/${s.slug}`} className="card linkcard">
                <span className="num">{s.addon ? "ADD-ON" : String(i + 1).padStart(2, "0")}</span>
                <h3>{s.name}</h3>
                <p>{s.short}</p>
                <span className="more">Learn more &rarr;</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <section className="alt">
        <div className="wrap split">
          <div>
            <h2>Why it works as one system</h2>
            <p className="lead" style={{ marginTop: 20 }}>A website without a Google profile is hard to find. A profile without reviews does not get chosen. Reviews without fast follow-up lose the lead. Each piece makes the others work harder.</p>
          </div>
          <div className="card">
            <h3>What this replaces</h3>
            <ul className="checks">
              <li>A web designer</li>
              <li>An SEO freelancer</li>
              <li>A review tool</li>
              <li>A text-back and follow-up tool</li>
              <li>Someone to manage your Google profile</li>
            </ul>
            <p className="note">One team and one monthly price instead of five.</p>
          </div>
        </div>
      </section>
      <Faq items={[
        { q: "Can I buy just one service?", a: "The plan is built as one system, because the pieces depend on each other. Ad management is the one add-on." },
        { q: "What is included in the $297 plan?", a: "The website, Google Business Profile management, monthly SEO, review requests, missed-call text-back, follow-up and customer reactivation, and the mobile app." },
      ]} />
      <CtaBand />
    </>
  );
}
