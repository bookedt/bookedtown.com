import Link from "next/link";
import { notFound } from "next/navigation";
import { ARTICLES, getArticle } from "../../../lib/resources";
import { PageHero, CtaBand } from "../../../components/Bits";

export function generateStaticParams() {
  return ARTICLES.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const a = getArticle(slug);
  if (!a) return {};
  return { title: a.title, description: a.excerpt, alternates: { canonical: `/resources/${a.slug}` } };
}

export default async function Article({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const a = getArticle(slug);
  if (!a) notFound();
  const more = ARTICLES.filter((x) => x.slug !== a.slug).slice(0, 3);
  const ld = { "@context": "https://schema.org", "@type": "Article", headline: a.title, description: a.excerpt, datePublished: a.date, author: { "@type": "Organization", name: "Booked Town" } };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />
      <PageHero crumbs={[{ href: "/resources", label: "Resources" }]} title={a.title} lead={a.excerpt} />
      <article className="prose-wrap">
        <p className="meta-line">{a.mins} min read &middot; {new Date(a.date + "T00:00:00").toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}</p>
        {a.sections.map((s) => (
          <section key={s.h} className="prose">
            <h2>{s.h}</h2>
            {s.p.map((p) => <p key={p}>{p}</p>)}
            {s.ul && <ul>{s.ul.map((i) => <li key={i}>{i}</li>)}</ul>}
          </section>
        ))}
      </article>
      <section className="alt">
        <div className="wrap">
          <h2>Keep reading</h2>
          <div className="grid g3">
            {more.map((m) => (
              <Link key={m.slug} href={`/resources/${m.slug}`} className="card linkcard">
                <h3>{m.title}</h3>
                <p>{m.excerpt}</p>
                <span className="more">Read article &rarr;</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <CtaBand title="Want this handled for you?" text="Booked Town does all of it for $297 a month. Book a free strategy call and see how." />
    </>
  );
}
