import Link from "next/link";
import { SITES } from "../lib/sites";
import { Feature, WorkItem } from "./Frame";

export default function WorkPreview() {
  return (
    <section id="work" className="alt">
      <div className="wrap">
        <h2>Real contractor sites we&rsquo;ve built and run.</h2>
        <p className="lead" style={{ marginTop: "20px" }}>
          Live websites for working contractors across the US, built on the same system you&rsquo;d get. Click any of them to see the real thing.
        </p>
        <Feature site={SITES[0]} />
        <div className="cards">
          {SITES.slice(1, 4).map((s) => <WorkItem key={s.slug} site={s} />)}
        </div>
        <div className="center"><Link className="btn ghost" href="/work">See all {SITES.length} sites &rarr;</Link></div>
      </div>
    </section>
  );
}
