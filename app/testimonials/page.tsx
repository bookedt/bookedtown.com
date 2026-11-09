import { TESTIMONIALS } from "../../lib/testimonials";
import { PageHero, CtaBand } from "../../components/Bits";

export const metadata = {
  title: "Testimonials",
  description: "Verified reviews from clients of Code Nova HQ, the team that builds Booked Town sites.",
  alternates: { canonical: "/testimonials" },
};

export default function Testimonials() {
  return (
    <>
      <PageHero
        crumbs={[{ href: "/testimonials", label: "Testimonials" }]}
        title={<>What clients say about <span className="hl">the team that builds your site.</span></>}
        lead="Booked Town is new, so these are verified reviews from clients of Code Nova HQ, the team that designs and builds every Booked Town site."
      />
      <section style={{ paddingTop: 24 }}>
        <div className="wrap">
          <div className="grid g3" style={{ marginTop: 0 }}>
            {TESTIMONIALS.map((t) => (
              <figure className="card quote" key={t.name + t.context}>
                <blockquote>&ldquo;{t.quote}&rdquo;</blockquote>
                <figcaption>
                  <b>{t.name}</b>
                  <span>{t.context} &middot; {t.source} review</span>
                </figcaption>
              </figure>
            ))}
          </div>
          <p className="note" style={{ marginTop: 26, maxWidth: 720 }}>
            Each review comes from a completed contract on Fiverr or Upwork, platforms we do not control. They are quoted as written; Fiverr shows usernames and Upwork shows no names. They are reviews of our team&rsquo;s website and build work, not of Booked Town&rsquo;s monthly plan. Reviews from Booked Town clients will be added here as they come in.
          </p>
        </div>
      </section>
      <CtaBand title="Be one of our first Booked Town clients" text="Book a free strategy call and we will show you what the system would look like for your business." />
    </>
  );
}

