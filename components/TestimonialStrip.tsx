import Link from "next/link";
import { TESTIMONIALS } from "../lib/testimonials";

export default function TestimonialStrip() {
  const picks = [TESTIMONIALS[1], TESTIMONIALS[2], TESTIMONIALS[5]];
  return (
    <section id="reviews" className="alt">
      <div className="wrap">
        <h2>Built by a team clients trust.</h2>
        <p className="lead" style={{ marginTop: 18 }}>Verified reviews from clients of Code Nova HQ, the team that builds every Booked Town site.</p>
        <div className="grid g3">
          {picks.map((t) => (
            <figure className="card quote" key={t.name}>
              <blockquote>&ldquo;{t.quote}&rdquo;</blockquote>
              <figcaption><b>{t.name}</b><span>{t.context} &middot; {t.source} review</span></figcaption>
            </figure>
          ))}
        </div>
        <div className="center"><Link className="btn ghost" href="/testimonials">Read more reviews &rarr;</Link></div>
      </div>
    </section>
  );
}
