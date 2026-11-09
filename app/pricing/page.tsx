import Link from "next/link";
import BookButton from "../../components/BookButton";
export const metadata = {"title": "Pricing", "description": "One plan, $297 a month: website, Google Business Profile, monthly SEO and follow-up for US contractors.", "alternates": {"canonical": "/pricing"}};

export default function Pricing() {
  return (
    <>
<section className="phero"><div className="wrap">
  <h1>One plan. One price.<br /><span className="hl">Everything included.</span></h1>
  <p className="lead">No tiers to decode and no add-ons to find. You pay for the whole service, not just the website.</p>
</div></section>
<section style={{ paddingTop: "24px" }}><div className="wrap">
  <div className="price" style={{ marginTop: "0" }}>
    <div className="main-price">
      <div className="amt">$297<small> / month</small></div>
      <ul>
        <li>15-20 page website, live in 7 business days</li>
        <li>Google Business Profile setup and monthly management</li>
        <li>4 Google posts a month, every review answered in 2 days</li>
        <li>2 SEO articles + 1 new town or service page a month</li>
        <li>Missed-call text-back and lead follow-up</li>
        <li>Review requests after every job</li>
        <li>Customer reactivation and the mobile app</li>
        <li>Monthly report in plain English</li>
      </ul>
      <BookButton className="btn">Book a free strategy call &rarr;</BookButton>
      <p className="note">$497 build fee, waived for November starters. Month to month, cancel any time.</p>
    </div>
    <div className="card">
      <h3>Pay ahead and save</h3>
      <table style={{ marginTop: "14px" }}><thead><tr><th>Term</th><th>Total</th><th>Per month</th><th>You save</th></tr></thead><tbody>
        <tr><td>Month to month</td><td>$297</td><td>$297</td><td>&nbsp;</td></tr>
        <tr><td>3 months</td><td>$757</td><td>$252</td><td>15%</td></tr>
        <tr><td>6 months</td><td>$1,426</td><td>$238</td><td>20%</td></tr>
        <tr><td>12 months</td><td>$2,317</td><td>$193</td><td>35%</td></tr></tbody></table>
      <p className="note">Own the site outright: buy it for $1,500, or it&rsquo;s yours free after 24 paid months. Your domain, Google profile and reviews are always yours.</p>
    </div>
  </div>
</div></section>
<section className="alt"><div className="wrap">
  <h2>What our promise covers</h2>
  <div className="grid g3">
    <div className="card"><h3>Live in 7 business days</h3><p>If your site is not live in 7 business days, month one is refunded.</p></div>
    <div className="card"><h3>Five setup items by day 30</h3><p>Google profile, review requests, text-back, follow-up and the app, all working, or month one is refunded.</p></div>
    <div className="card"><h3>No lead-count promises</h3><p>Nobody honest can promise a number of leads. We promise the work is done, on time, and reported every month.</p></div>
  </div>
</div></section>
<section id="faq"><div className="wrap faq-wrap">
  <h2 style={{ marginBottom: "34px" }}>Pricing questions</h2>
  <details><summary>Is there a contract?</summary><p>No. The plan is month to month. Pay 3, 6 or 12 months up front if you&rsquo;d like to save.</p></details>
  <details><summary>Do I own my website and domain?</summary><p>Your domain always sits in your own account, and your Google profile, reviews and contacts are yours. The site stays on our hosting while you&rsquo;re a client. Buy it for $1,500, or it&rsquo;s yours free after 24 paid months.</p></details>
  <details><summary>What about paid ads?</summary><p>Ad management is an optional add-on: a management fee plus your own ad spend. It isn&rsquo;t part of the $297 plan.</p></details>
  <details><summary>What is the build fee?</summary><p>A one-time $497 to build your site and set everything up. It&rsquo;s waived for November starters.</p></details>
  <details><summary>How do reviews work?</summary><p>After each job your customer is asked for feedback first, and the Google link is offered to everyone. We never filter by star rating, because that breaks Google&rsquo;s rules and the penalty lands on you.</p></details>
</div></section>
    </>
  );
}
