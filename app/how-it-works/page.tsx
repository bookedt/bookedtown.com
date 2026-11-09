import { PageHero, CtaBand, Faq } from "../../components/Bits";

export const metadata = {
  title: "How it works",
  description: "From sign-up to a live website, a built-out Google profile and automatic follow-up in about a week. Here is exactly what happens and what we need from you.",
  alternates: { canonical: "/how-it-works" },
};

const STEPS = [
  { t: "Day 0: You sign up", d: "You pay and fill in a short form about your business, services and towns. We create your account, your site and your workspace." },
  { t: "Day 1: Kickoff", d: "A short call to confirm everything. We also start your business text-message registration with the carriers, which takes a few days." },
  { t: "Day 2-3: Reviews and profile", d: "Review requests go to your past customers, and your Google Business Profile is built out in full." },
  { t: "Day 7: You’re live", d: "Your site is live, the app is on your phone, and your first Google post is published." },
  { t: "Every month after", d: "Four Google posts, two articles, one new town or service page, every review answered, and a one-page report." },
];

export default function HowItWorks() {
  return (
    <>
      <PageHero
        crumbs={[{ href: "/how-it-works", label: "How it works" }]}
        title={<>From sign-up to live in <span className="hl">about a week.</span></>}
        lead="No software to learn and no content calendar to fill. Here is exactly what happens, and the few things we need from you."
      />
      <section style={{ paddingTop: 24 }}>
        <div className="wrap split">
          <div className="steps">
            {STEPS.map((s) => (
              <div key={s.t}>
                <span><b>{s.t}</b><p>{s.d}</p></span>
              </div>
            ))}
          </div>
          <div className="card">
            <h3>What we need from you</h3>
            <ul className="checks">
              <li>Your logo and a few job photos</li>
              <li>A list of the towns you serve</li>
              <li>Your past customer list, by day 7</li>
              <li>A login to the app on your phone, by day 14</li>
              <li>Job photos sent to the group chat as you finish work</li>
            </ul>
            <p className="note">That is the whole list. We do the rest.</p>
          </div>
        </div>
      </section>
      <section className="alt">
        <div className="wrap">
          <h2>After launch: how we keep it working</h2>
          <div className="grid g3">
            <div className="card"><h3>One group chat</h3><p>Every client gets a WhatsApp or Messenger group with the team. Send photos, ask questions, request changes.</p></div>
            <div className="card"><h3>One-page monthly report</h3><p>What we published, what Google recorded, and what we do next, in plain English.</p></div>
            <div className="card"><h3>Early warnings</h3><p>If something slips, like no customer list by day 7 or a failed payment, we tell you before it becomes a problem.</p></div>
          </div>
        </div>
      </section>
      <section>
        <div className="wrap split">
          <div>
            <h2>Our promise</h2>
            <p className="lead" style={{ marginTop: 20 }}>Your site live in 7 business days, and the five setup items done by day 30, or your first month is refunded. We do not promise a number of leads, because nobody honest can.</p>
          </div>
          <div className="card">
            <h3>The five setup items</h3>
            <ul className="checks">
              <li>Google Business Profile built out</li>
              <li>Review requests going out</li>
              <li>Missed-call text-back working</li>
              <li>Lead follow-up in place</li>
              <li>The mobile app on your phone</li>
            </ul>
          </div>
        </div>
      </section>
      <Faq alt items={[
        { q: "Why does text-back take longer to start?", a: "Carriers require business texting to be registered. That takes 3-7 business days and sometimes about two weeks. We start it on day 1 and handle all the paperwork." },
        { q: "What if I do not send my customer list?", a: "The system still runs, but reactivation and past-customer review requests wait for it. We will remind you, because the list is the biggest speed-up in the first month." },
        { q: "Can I cancel?", a: "Yes. The plan is month to month. See our cancellation policy for the details." },
      ]} />
      <CtaBand />
    </>
  );
}
