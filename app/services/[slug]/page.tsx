import Link from "next/link";
import { notFound } from "next/navigation";
import { SERVICES, getService } from "../../../lib/services";
import { PageHero, CtaBand, Faq, Checks } from "../../../components/Bits";

export function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const s = getService(slug);
  if (!s) return {};
  return { title: s.name, description: s.short, alternates: { canonical: `/services/${s.slug}` } };
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const s = getService(slug);
  if (!s) notFound();
  const others = SERVICES.filter((x) => x.slug !== s.slug).slice(0, 3);
  return (
    <>
      <PageHero
        crumbs={[{ href: "/services", label: "The system" }, { href: `/services/${s.slug}`, label: s.name }]}
        title={s.headline}
        lead={s.intro}
      />
      <section style={{ paddingTop: 24 }}>
        <div className="wrap split">
          <div>
            <h2>What&rsquo;s included</h2>
            <Checks items={s.includes} />
          </div>
          <div className="card">
            <h3>Your part</h3>
            <p>{s.yourPart}</p>
            {s.addon && <p className="note">Optional add-on. Not included in the $297 plan.</p>}
          </div>
        </div>
      </section>
      <section className="alt">
        <div className="wrap">
          <h2>How it works</h2>
          <div className="grid g3">
            {s.steps.map((st) => (
              <div className="card" key={st.t}>
                <span className="num">{st.t.toUpperCase()}</span>
                <p style={{ marginTop: 10 }}>{st.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section>
        <div className="wrap" style={{ maxWidth: 820 }}>
          <h2>{s.whyTitle}</h2>
          {s.why.map((p) => <p key={p} className="lead" style={{ marginTop: 18 }}>{p}</p>)}
        </div>
      </section>
      <Faq items={s.faqs} alt />
      <section>
        <div className="wrap">
          <h2>More from the system</h2>
          <div className="grid g3">
            {others.map((o) => (
              <Link key={o.slug} href={`/services/${o.slug}`} className="card linkcard">
                <h3>{o.name}</h3>
                <p>{o.short}</p>
                <span className="more">Learn more &rarr;</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
