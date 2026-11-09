import Link from "next/link";

function Stars() {
  return <span className="m-stars" aria-hidden="true">&#9733;&#9733;&#9733;&#9733;&#9733;</span>;
}

const PARTS = [
  {
    href: "/services/website",
    title: "A website turns visits into estimate requests.",
    text: "A page for every service and every town, with a quote form and click-to-call on each one.",
    mock: (
      <div className="m m-site">
        <div className="m-bar"><i /><i /><i /><em>yourcontractor.com</em></div>
        <div className="m-body">
          <b>Roof repair in your town</b>
          <span className="m-line w80" /><span className="m-line w60" />
          <span className="m-btn">Request an estimate</span>
          <div className="m-form"><span className="m-field" /><span className="m-field" /></div>
        </div>
      </div>
    ),
  },
  {
    href: "/services/google-business-profile",
    title: "Local visibility puts you in the right searches.",
    text: "A complete, active Google Business Profile that earns its place in the map pack.",
    mock: (
      <div className="m m-search">
        <div className="m-q">roofing contractor near me</div>
        <div className="m-result hot"><span className="m-rank">1</span><div><b>Your Company</b><small><Stars /> Top local result</small></div></div>
        <div className="m-result"><span className="m-rank">2</span><div><span className="m-line w60" /><span className="m-line w40" /></div></div>
        <div className="m-result"><span className="m-rank">3</span><div><span className="m-line w60" /><span className="m-line w40" /></div></div>
      </div>
    ),
  },
  {
    href: "/services/local-seo",
    title: "Monthly SEO keeps growing your footprint.",
    text: "Two articles and one new town or service page every month, written for Google and AI answers.",
    mock: (
      <div className="m m-seo">
        <div className="m-doc"><span className="m-tag">Published</span><b>Roof repair in [Town]</b><span className="m-line w80" /><span className="m-line w60" /></div>
        <div className="m-ai"><small>AI answer</small><p>Recommended roofers nearby: <b>Your Company</b></p></div>
      </div>
    ),
  },
  {
    href: "/services/missed-call-text-back",
    title: "Missed-call text-back keeps the conversation alive.",
    text: "An instant text goes to every caller you could not answer, before they dial someone else.",
    mock: (
      <div className="m m-sms">
        <div className="m-missed"><span className="m-dot" />Missed call &middot; 8:42 PM</div>
        <div className="m-bubble out">Sorry we missed you. How can we help?</div>
        <div className="m-bubble in">Roof leak, can you come out?</div>
        <small className="m-note">Text sent in seconds</small>
      </div>
    ),
  },
  {
    href: "/services/reviews",
    title: "Review requests turn finished jobs into trust.",
    text: "Every customer is asked right after the work, with feedback first and the Google link for everyone.",
    mock: (
      <div className="m m-review">
        <small>Review request sent</small>
        <Stars />
        <p>&ldquo;Fast, clear, and professional.&rdquo;</p>
        <span className="m-tag">New customer review</span>
      </div>
    ),
  },
  {
    href: "/services/customer-reactivation",
    title: "Reactivation brings past customers back.",
    text: "Seasonal reminders and referral requests, sent automatically to people who already trust you.",
    mock: (
      <div className="m m-react">
        <div className="m-count"><b>Past customers</b><span>from your list</span></div>
        <div className="m-bubble out">Hi Jamie, ready for your fall check-up?</div>
        <div className="m-bubble in">Yes, next week works.</div>
      </div>
    ),
  },
  {
    href: "/how-it-works",
    title: "One inbox makes the next step visible.",
    text: "Every call, form, text, estimate and booking in one place, with the app on your phone.",
    mock: (
      <div className="m m-pipe">
        <div className="m-col"><small>New lead</small><span className="m-chip">Roof repair</span></div>
        <div className="m-col"><small>Contacted</small><span className="m-chip">Roof repair</span></div>
        <div className="m-col"><small>Estimate</small><span className="m-chip">Roof repair</span></div>
        <div className="m-col win"><small>Booked</small><span className="m-chip">Tomorrow 10 AM</span></div>
      </div>
    ),
  },
  {
    href: "/services/google-ads",
    title: "Paid ads add demand you can measure.",
    text: "An optional add-on once the foundation is working, tracked to the same lead journey.",
    addon: true,
    mock: (
      <div className="m m-ads">
        <div className="m-adhead"><b>Campaign</b><span className="m-tag">Add-on</span></div>
        <div className="m-bars"><span style={{ height: "38%" }} /><span style={{ height: "55%" }} /><span style={{ height: "48%" }} /><span style={{ height: "72%" }} /><span style={{ height: "90%" }} /></div>
        <small className="m-note">Calls and forms tracked</small>
      </div>
    ),
  },
];

export default function ConnectedSystem() {
  return (
    <section id="system" className="alt">
      <div className="wrap">
        <h2>Eight connected parts.<br /><span className="hl">One team accountable.</span></h2>
        <p className="lead" style={{ marginTop: 20 }}>
          Point to one place when leads slow down, follow-up breaks, or the calendar has room. Hover over each part to see it at work.
        </p>
        <div className="sysgrid">
          {PARTS.map((p, i) => (
            <Link key={p.href + i} href={p.href} className="sys">
              <div className="sys-mock" aria-hidden="true">{p.mock}</div>
              <div className="sys-copy">
                <span className="num">{p.addon ? "ADD-ON" : String(i + 1).padStart(2, "0")}</span>
                <h3>{p.title}</h3>
                <p>{p.text}</p>
              </div>
            </Link>
          ))}
        </div>
        <p className="note" style={{ textAlign: "center", marginTop: 26 }}>Illustrations use demo data.</p>
        <div className="center" style={{ marginTop: 18 }}><Link className="btn ghost" href="/services">See how everything connects &rarr;</Link></div>
      </div>
    </section>
  );
}
