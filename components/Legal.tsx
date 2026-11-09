import { PageHero } from "./Bits";

export type LegalSection = { h: string; p: string[]; ul?: string[] };

export default function Legal({ title, updated, intro, sections, path }: { title: string; updated: string; intro: string; sections: LegalSection[]; path: string }) {
  return (
    <>
      <PageHero crumbs={[{ href: path, label: title }]} title={title} lead={intro} />
      <article className="prose-wrap">
        <p className="meta-line">Last updated {updated}</p>
        {sections.map((s) => (
          <section key={s.h} className="prose">
            <h2>{s.h}</h2>
            {s.p.map((p) => <p key={p}>{p}</p>)}
            {s.ul && <ul>{s.ul.map((i) => <li key={i}>{i}</li>)}</ul>}
          </section>
        ))}
      </article>
    </>
  );
}
