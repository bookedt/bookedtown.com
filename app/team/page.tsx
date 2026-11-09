import { PageHero, CtaBand } from "../../components/Bits";

export const metadata = {
  title: "Team",
  description: "The Booked Town team: website builders, Google profile and SEO specialists, and client success.",
  alternates: { canonical: "/team" },
};

const TEAMS = [
  { t: "Website team", d: "Designers and developers who build your 15-20 page site and keep it fast, secure and up to date." },
  { t: "Google profile and SEO team", d: "Specialists who set up and manage your Google Business Profile and write the monthly articles and town pages." },
  { t: "Automation team", d: "The people who set up missed-call text-back, review requests and follow-up, and register your business for texting." },
  { t: "Client success", d: "Your point of contact. They run your group chat, send the monthly report and warn you early if anything slips." },
];

export default function Team() {
  return (
    <>
      <PageHero
        crumbs={[{ href: "/team", label: "Team" }]}
        title={<>The people who <span className="hl">run your marketing.</span></>}
        lead="You get a real team, in a group chat you can message any day, not a ticket system."
      />
      <section style={{ paddingTop: 24 }}>
        <div className="wrap">
          <div className="grid g2" style={{ marginTop: 0 }}>
            {TEAMS.map((x, i) => (
              <div className="card" key={x.t}>
                <span className="num">{String(i + 1).padStart(2, "0")}</span>
                <h3>{x.t}</h3>
                <p>{x.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="alt">
        <div className="wrap split">
          <div>
            <h2>How we work with you</h2>
            <p className="lead" style={{ marginTop: 20 }}>One WhatsApp or Messenger group per client. Problems come to the table the day they happen, and every expense and decision is explained plainly.</p>
          </div>
          <div className="card">
            <ul className="checks">
              <li>A direct line to your account team</li>
              <li>A one-page report every month</li>
              <li>Early warnings before problems grow</li>
              <li>Everything you own stays yours</li>
            </ul>
          </div>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
