import Link from "next/link";
import { SITES } from "../../lib/sites";
import { Frame } from "../../components/Frame";
import { PageHero, CtaBand } from "../../components/Bits";

export const metadata = {
  title: "Case studies",
  description: "How a Booked Town-style build works in practice: a Greater Boston general contractor, from site to Search Console.",
  alternates: { canonical: "/case-studies" },
};

export default function CaseStudies() {
  const s = SITES[0];
  return (
    <>
      <PageHero
        crumbs={[{ href: "/case-studies", label: "Case studies" }]}
        title={<>What a build looks like, <span className="hl">start to finish.</span></>}
        lead="We publish results only after Google has recorded them. Here is the first build, with what is live and what we are measuring."
      />
      <section style={{ paddingTop: 24 }}>
        <div className="wrap">
          <div className="feature">
            <Frame site={s} priority />
            <div className="meta">
              <span className="trade">General contractor &middot; Greater Boston, MA</span>
              <h3>A general contractor since 2003, with a site built to be found.</h3>
              <p>A family general contractor with a minimum job of about $30,000 and a service radius of around 20 miles. They needed a site that showed up for the trades they do and the towns they serve.</p>
              <a className="btn" href={`https://${s.domain}`} target="_blank" rel="noopener noreferrer">Visit live site &#8599;</a>
            </div>
          </div>
        </div>
      </section>
      <section className="alt">
        <div className="wrap">
          <h2>What we built</h2>
          <div className="grid g3">
            <div className="card"><span className="num">STRUCTURE</span><h3>Service and town pages</h3><p>A page for each trade they do, and 15 town pages for the places they serve.</p></div>
            <div className="card"><span className="num">ON-PAGE SEO</span><h3>Search-ready pages</h3><p>Titles, canonical tags, structured data and blog links were all set up and published together.</p></div>
            <div className="card"><span className="num">CONVERSION</span><h3>Estimate form and chat</h3><p>A free-estimate form on the page and a chat widget, with the phone number one tap away.</p></div>
          </div>
        </div>
      </section>
      <section>
        <div className="wrap" style={{ maxWidth: 820 }}>
          <h2>How we measure it</h2>
          <p className="lead" style={{ marginTop: 18 }}>Search Console and analytics were connected the same day the pages went live, so there is a clean baseline from day one. Every month we compare clicks, impressions and positions against that baseline, and share the real numbers with you.</p>
          <p className="lead" style={{ marginTop: 18 }}>We will add the figures to this page once Google has enough data to show a meaningful trend, instead of quoting a number we cannot back up.</p>
        </div>
      </section>
      <section className="alt">
        <div className="wrap">
          <h2>More builds</h2>
          <p className="lead" style={{ marginTop: 18 }}>The same system, for other trades and towns.</p>
          <div className="center"><Link className="btn ghost" href="/work">See all our work &rarr;</Link></div>
        </div>
      </section>
      <CtaBand title="Want your build to be next?" />
    </>
  );
}
