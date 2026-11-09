import Link from "next/link";
import { ARTICLES } from "../../lib/resources";
import { PageHero, CtaBand } from "../../components/Bits";

export const metadata = {
  title: "Resources",
  description: "Plain-English guides for contractors on Google Maps, reviews, websites, local SEO and ads.",
  alternates: { canonical: "/resources" },
};

export default function Resources() {
  return (
    <>
      <PageHero
        crumbs={[{ href: "/resources", label: "Resources" }]}
        title={<>Guides for contractors who want <span className="hl">more booked jobs.</span></>}
        lead="Short, practical articles on getting found, getting reviews and getting the phone to ring."
      />
      <section style={{ paddingTop: 24 }}>
        <div className="wrap">
          <div className="grid g3" style={{ marginTop: 0 }}>
            {ARTICLES.map((a) => (
              <Link key={a.slug} href={`/resources/${a.slug}`} className="card linkcard">
                <span className="num">{a.mins} MIN READ</span>
                <h3>{a.title}</h3>
                <p>{a.excerpt}</p>
                <span className="more">Read article &rarr;</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
