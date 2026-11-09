import type { Site } from "../lib/sites";

export function Frame({ site, priority = false }: { site: Site; priority?: boolean }) {
  return (
    <a className="frame" href={`https://${site.domain}`} target="_blank" rel="noopener noreferrer" aria-label={`Visit ${site.domain}`}>
      <div className="bar"><i /><i /><i /><em>{site.domain}</em></div>
      <div className="view">
        <img
          src={`/portfolio/${site.slug}.jpg`}
          alt={`Website homepage of a ${site.trade.toLowerCase()} in ${site.location}`}
          width={1200}
          height={750}
          loading={priority ? "eager" : "lazy"}
        />
        <div className="over"><span>Visit live site &#8599;</span></div>
      </div>
    </a>
  );
}

export function WorkItem({ site }: { site: Site }) {
  return (
    <article className="item" data-t={site.trade}>
      <Frame site={site} />
      <div className="cap"><b>{site.trade}</b><span>{site.location}</span></div>
    </article>
  );
}

export function Feature({ site }: { site: Site }) {
  return (
    <div className="feature item" data-t={site.trade}>
      <Frame site={site} priority />
      <div className="meta">
        <span className="trade">{site.trade} &middot; {site.location}</span>
        <h3>A site built to turn local searches into estimate requests.</h3>
        <p>{site.note}</p>
        <ul>
          <li>15 town pages, one for each place they serve</li>
          <li>Quote form, chat widget and click-to-call</li>
          <li>Search Console and analytics set up from day one</li>
        </ul>
        <a className="btn" href={`https://${site.domain}`} target="_blank" rel="noopener noreferrer">Visit live site &#8599;</a>
      </div>
    </div>
  );
}
