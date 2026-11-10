import Image from "next/image";
import { LEAD, TEAM } from "../../lib/team";
import { PageHero, CtaBand } from "../../components/Bits";

export const metadata = {
  title: "Team",
  description: "Meet the 13 specialists at Code Nova HQ who design, build and run every Booked Town site.",
  alternates: { canonical: "/team" },
};

const PRINCIPLES = [
  { t: "Results over everything", d: "We measure a site by the leads it brings in, not by how pretty it looks." },
  { t: "Radical transparency", d: "Honest timelines, honest pricing and honest reporting. If something is not working, we tell you and fix it." },
  { t: "Speed without sacrifice", d: "Your site is live in 7 business days, and speed never means cutting corners." },
  { t: "Long-term partnership", d: "We want to grow with you, month after month, not hand over a site and disappear." },
];

export default function Team() {
  return (
    <>
      <PageHero
        crumbs={[{ href: "/team", label: "Team" }]}
        title={<>The 13 people behind <span className="hl">every Booked Town site.</span></>}
        lead="Every build is handled by a named specialist, not passed to whoever is free. Meet the team from Code Nova HQ that designs, builds and runs your marketing."
      />

      <section style={{ paddingTop: 24 }}>
        <div className="wrap">
          <div className="tstats">
            <div><strong>2018</strong><span>building websites and funnels for clients</span></div>
            <div><strong>13</strong><span>specialists under one roof</span></div>
            <div><strong>233</strong><span>public client reviews</span></div>
            <div><strong>6</strong><span>skills: GHL, WordPress, SEO, Shopify, funnels, ads</span></div>
          </div>
        </div>
      </section>

      <section>
        <div className="wrap">
          <div className="lead-card">
            <div className="lead-photo">
              <Image src={LEAD.photo} alt={LEAD.name} width={512} height={512} priority />
            </div>
            <div>
              <span className="trade">Leadership</span>
              <h2 style={{ fontSize: 34, margin: "8px 0 4px" }}>{LEAD.name}</h2>
              <p className="role">{LEAD.role}</p>
              <p className="lead" style={{ marginTop: 18 }}>{LEAD.bio}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="alt">
        <div className="wrap">
          <h2>The people who do the work</h2>
          <p className="lead" style={{ marginTop: 18 }}>Websites, Google profiles, SEO and automation, each handled by someone who does it every day.</p>
          <div className="tgrid">
            {TEAM.map((m) => (
              <article className="tcard" key={m.name}>
                <div className="tphoto">
                  <Image src={m.photo} alt={m.name} width={560} height={560} loading="lazy" />
                </div>
                <h3>{m.name}</h3>
                <p>{m.role}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="wrap">
          <h2>How we work</h2>
          <div className="grid g2">
            {PRINCIPLES.map((p, i) => (
              <div className="card" key={p.t}>
                <span className="num">{String(i + 1).padStart(2, "0")}</span>
                <h3>{p.t}</h3>
                <p>{p.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="alt">
        <div className="wrap split">
          <div>
            <h2>What working with us looks like</h2>
            <p className="lead" style={{ marginTop: 20 }}>One WhatsApp or Messenger group per client. Problems come to the table the day they happen, and every decision is explained plainly.</p>
          </div>
          <div className="card">
            <ul className="checks">
              <li>A direct line to your account team</li>
              <li>A one-page report every month</li>
              <li>Early warnings before problems grow</li>
              <li>Your domain, profile and reviews stay yours</li>
            </ul>
          </div>
        </div>
      </section>

      <CtaBand title="Work with the same 13" text="Book a free strategy call and we will show you what we would change on your site and Google profile." />
    </>
  );
}
