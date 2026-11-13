import Link from "next/link";
import BookButton from "../components/BookButton";
import WorkPreview from "../components/WorkPreview";
import ConnectedSystem from "../components/ConnectedSystem";
import HeroDashboard from "../components/HeroDashboard";
import TestimonialStrip from "../components/TestimonialStrip";
import TradesMarquee from "../components/TradesMarquee";
import { ARTICLES } from "../lib/resources";
export const metadata = { alternates: { canonical: "/" } };

export default function Home() {
  return (
    <>
<section className="hero">
  <div className="hero-bg" aria-hidden="true"><span className="orb o1" /><span className="orb o2" /></div>
  <div className="wrap hero-grid">
    <div>
      <h1>Get found. Get chosen.<br /><span className="hl grad">Get booked.</span></h1>
      <p className="lead">Booked Town builds and runs the whole online system a contractor needs: a 15-20 page website, a Google Business Profile that earns map-pack calls, monthly SEO, and automatic follow-up that stops leads slipping away. One plan, $297 a month.</p>
      <div className="cta-row">
        <BookButton className="btn">Book a free strategy call &rarr;</BookButton>
        <a className="btn ghost" href="#system">See what's included</a>
      </div>
      <div className="trust">
        <span className="tick"><b>Site live in 7 business days</b></span>
        <span className="tick"><b>Your domain, your Google profile, your reviews</b></span>
        <span className="tick"><b>No long-term contract</b></span>
      </div>
    </div>
    <HeroDashboard />
  </div>
  <div className="wrap">
    <div className="stats">
      <div><strong>15-20</strong><span>page website, a page for every service and town</span></div>
      <div><strong>4</strong><span>Google Business Profile posts every month</span></div>
      <div><strong>2</strong><span>SEO articles written for you each month</span></div>
      <div><strong>2 days</strong><span>to answer every new Google review</span></div>
    </div>
  </div>
</section>

<TradesMarquee />

<section id="problem">
  <div className="wrap split">
    <div>
      <h2>Most contractors are invisible online, and it costs them jobs.</h2>
      <p className="lead" style={{ marginTop: "20px" }}>Of the 132,653 US general contractors with a Google profile, 48% have fewer than 10 reviews and 38% have no website at all. The few who show up in the map pack get the call. The rest never know they were an option.</p>
      <p className="lead" style={{ marginTop: "14px" }}>You do great work. You should not need to learn SEO, write posts or chase reviews to be found for it.</p>
    </div>
    <div className="card">
      <h3>The bar is lower than you think</h3>
      <p>Only 2.7% of those contractors have 100 or more reviews. A complete profile, a proper site and steady monthly activity put you ahead of most of your town.</p>
      <ul>
        <li>Complete, optimized Google profile</li>
        <li>A page for every service and town</li>
        <li>A steady stream of fresh reviews</li>
        <li>Every missed call answered in seconds</li>
      </ul>
    </div>
  </div>
</section>

<ConnectedSystem />

<section id="how">
  <div className="wrap split">
    <div>
      <h2>From sign-up to live in about a week.</h2>
      <div className="steps" style={{ marginTop: "34px" }}>
        <div><span><b>Day 0: You sign up</b><p>Payment and a short form. We create your account and your site.</p></span></div>
        <div><span><b>Day 1: Kickoff</b><p>A quick call, and we start your text-message registration for you.</p></span></div>
        <div><span><b>Day 2-3: Reviews &amp; profile</b><p>Review requests go to past customers. Your Google profile is built out.</p></span></div>
        <div><span><b>Day 7: You're live</b><p>Site live, app on your phone, first Google post published.</p></span></div>
      </div>
    </div>
    <div className="card">
      <h3>Live in 7 business days, or your first month back.</h3>
      <p style={{ marginTop: "12px" }}>If your site is not live in 7 business days, or the five setup items are not done by day 30, month one is refunded. We do not promise lead counts, because nobody honest can. We promise the work gets done, on time.</p>
      <ul><li>Your domain stays in your own account</li><li>Your Google profile and reviews are yours</li><li>One WhatsApp or Messenger group with the team</li></ul>
    </div>
  </div>
</section>

<section id="why">
  <div className="wrap">
    <h2>Why contractors choose <span className="hl">Booked Town.</span></h2>
    <div className="grid g3">
      <div className="card"><h3>Everything under one roof</h3><p>Instead of paying one company for the website, another for SEO, another for reviews and another for follow-up, you get one team accountable for the result.</p></div>
      <div className="card"><h3>Done for you, not do it yourself</h3><p>We build it, launch it and keep it active every month. There is no software to learn and no content calendar for you to fill.</p></div>
      <div className="card"><h3>Honest reporting</h3><p>A one-page report every month shows what we did and what Google recorded. No jargon, and no lead-count promises we cannot keep.</p></div>
    </div>
  </div>
</section>

<section id="fit" className="alt">
  <div className="wrap">
    <h2>Is Booked Town right for you?</h2>
    <p className="lead" style={{ marginTop: 18 }}>The contractors who get the most from us usually share these six traits.</p>
    <div className="grid g3">
      <div className="card"><span className="num">01</span><h3>They take action</h3><p>They know that a good plan started this week beats a perfect plan started next quarter.</p></div>
      <div className="card"><span className="num">02</span><h3>They answer the phone</h3><p>They reply to leads quickly, because speed is what wins the job.</p></div>
      <div className="card"><span className="num">03</span><h3>They do great work</h3><p>Their customers are happy, and they are ready to let those customers tell the world.</p></div>
      <div className="card"><span className="num">04</span><h3>They serve their community</h3><p>They want to be the first name people in their towns think of.</p></div>
      <div className="card"><span className="num">05</span><h3>They want to grow</h3><p>They are proud of what they have built and want more jobs and better ones.</p></div>
      <div className="card"><span className="num">06</span><h3>They communicate clearly</h3><p>They keep customers informed and earn trust by being straight with them.</p></div>
    </div>
  </div>
</section>

<WorkPreview />

<section id="pricing">
  <div className="wrap">
    <h2>One plan. One price. <span className="hl">Everything included.</span></h2>
    <p className="lead" style={{ marginTop: "20px" }}>Other providers sell a site and CRM for $197-297 a month. Booked Town adds the monthly SEO and the Google profile management that actually get you found.</p>
    <div className="price">
      <div className="main-price">
        <div className="amt">$297<small> / month</small></div>
        <ul>
          <li>15-20 page website, live in 7 business days</li>
          <li>Google Business Profile setup and monthly management</li>
          <li>2 SEO articles + 1 new town or service page a month</li>
          <li>Missed-call text-back and lead follow-up</li>
          <li>Review requests after every job</li>
          <li>Customer reactivation and the mobile app</li>
        <li>Field Services (requests, jobs, scheduling, dispatch) as it opens, in private beta</li>
          <li>Monthly report in plain English</li>
        </ul>
        <BookButton className="btn">Book a free strategy call &rarr;</BookButton>
        <p className="note">$497 build fee, waived for November starters. Month to month, cancel any time.</p>
      </div>
      <div className="card">
        <h3>Pay ahead and save</h3>
        <table style={{ marginTop: "14px" }}>
          <thead><tr><th>Term</th><th>Total</th><th>Per month</th><th>You save</th></tr></thead>
          <tbody>
            <tr><td>Month to month</td><td>$297</td><td>$297</td><td>&nbsp;</td></tr>
            <tr><td>3 months</td><td>$757</td><td>$252</td><td>15%</td></tr>
            <tr><td>6 months</td><td>$1,426</td><td>$238</td><td>20%</td></tr>
            <tr><td>12 months</td><td>$2,317</td><td>$193</td><td>35%</td></tr>
          </tbody>
        </table>
        <p className="note">Want to own the site outright? Buy it for $1,500, or it's yours free after 24 paid months. Paid ads are an optional add-on.</p>
      </div>
    </div>
  </div>
</section>

<TestimonialStrip />

<section id="resources">
  <div className="wrap">
    <h2>Free guides for contractors</h2>
    <p className="lead" style={{ marginTop: 18 }}>Short, practical reads on getting found and getting reviews.</p>
    <div className="grid g3">
      {ARTICLES.slice(0, 3).map((a) => (
        <Link key={a.slug} href={`/resources/${a.slug}`} className="card linkcard">
          <span className="num">{a.mins} MIN READ</span>
          <h3>{a.title}</h3>
          <p>{a.excerpt}</p>
          <span className="more">Read article &rarr;</span>
        </Link>
      ))}
    </div>
    <div className="center"><Link className="btn ghost" href="/resources">All resources &rarr;</Link></div>
  </div>
</section>

<section id="faq" className="alt">
  <div className="wrap" style={{ maxWidth: "820px" }}>
    <h2 style={{ marginBottom: "34px" }}>Questions contractors ask us.</h2>
    <details><summary>What do I actually have to do?</summary><p>Send job photos to the group chat and answer the phone. We build the site, manage your Google profile, write the content and set up the follow-up.</p></details>
    <details><summary>How long does it take to see results?</summary><p>Your site and profile are live within a week. Search rankings build over months, and most local markets move in 60-90 days when the profile, site and reviews are all working together. We report on it every month, and we never promise a lead count.</p></details>
    <details><summary>Do I own my website and domain?</summary><p>Your domain always sits in your own account, and your Google profile, reviews and contacts are yours. The site stays on our hosting while you're a client. You can buy it for $1,500, or it's yours free after 24 paid months.</p></details>
    <details><summary>Is there a long-term contract?</summary><p>No. The plan is month to month. Pay 3, 6 or 12 months up front if you'd like to save.</p></details>
    <details><summary>Who is this for?</summary><p>US contractors: roofing, painting, concrete, fencing, tree service, landscaping, HVAC, plumbing, electrical, and outdoor builders such as decks, patios, hardscaping and pools.</p></details>
    <details><summary>How do you handle reviews?</summary><p>After each job your customer is asked for feedback first, and the Google link is offered to everyone. We never filter by star rating, because that breaks Google's rules and the penalty lands on you.</p></details>
  </div>
</section>

<section id="book" className="final">
  <div className="wrap">
    <h2>Ready to get <span className="hl">booked?</span></h2>
    <p className="lead">Book a free strategy call. We'll audit your Google profile and website, show you where your competitors are winning, and map out what your town needs.</p>
    <BookButton className="btn">Book a free strategy call &rarr;</BookButton>
  </div>
</section>
    </>
  );
}
