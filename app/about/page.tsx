import Link from "next/link";
import BookButton from "../../components/BookButton";
export const metadata = {"title": "About", "description": "Booked Town builds websites, Google Business Profiles and SEO for US contractors.", "alternates": {"canonical": "/about"}};

export default function About() {
  return (
    <>
<section className="phero"><div className="wrap">
  <h1>Built for contractors,<br /><span className="hl">run by people who do this daily.</span></h1>
  <p className="lead">Booked Town exists for one reason: great contractors lose jobs to louder competitors. We fix that, so you can keep running your crews.</p>
</div></section>
<section style={{ paddingTop: "24px" }}><div className="wrap split">
  <div>
    <h2>What we believe</h2>
    <p className="lead" style={{ marginTop: "20px" }}>You should be paid for the work you do, not for how well you market it. A contractor with a complete Google profile, a real website and steady reviews wins calls over a bigger company that ignores them.</p>
    <p className="lead" style={{ marginTop: "14px" }}>So we charge for the whole service, not the website, and we don&rsquo;t promise lead counts. We promise a system that is built fast, kept active every month and reported honestly.</p>
  </div>
  <div className="card"><h3>How we work</h3>
    <ul>
      <li>One team accountable for the result</li>
      <li>A WhatsApp or Messenger group with your account team</li>
      <li>A one-page monthly report, no jargon</li>
      <li>Early warnings before problems turn into churn</li>
      <li>Your domain, Google profile and reviews stay yours</li>
    </ul></div>
</div></section>
<section className="alt"><div className="wrap">
  <h2>Who we build for</h2>
  <div className="grid g3">
    <div className="card"><h3>Home &amp; exterior trades</h3><p>Roofing, painting, concrete, fencing, tree service, landscaping.</p></div>
    <div className="card"><h3>Mechanical &amp; electrical</h3><p>HVAC, plumbing and electrical contractors.</p></div>
    <div className="card"><h3>Outdoor builders</h3><p>Decks, patios, hardscaping, pools and remodelers.</p></div>
  </div>
</div></section>
<section className="final"><div className="wrap"><h2>Let&rsquo;s get you <span className="hl">booked.</span></h2>
  <p className="lead">Book a free strategy call and we&rsquo;ll show you where your competitors are winning.</p>
  <BookButton className="btn">Book a free strategy call &rarr;</BookButton></div></section>
    </>
  );
}
