import Link from "next/link";
import BookButton from "./BookButton";

const POINTS = [
  "Requests and estimates, turned into jobs in one click",
  "Smart scheduling that accounts for staff, service areas and drive time",
  "Route optimization that shows the drive time saved first",
  "Invoices and online payments straight from the job",
  "Updates to customers by email, SMS and WhatsApp",
  "A mobile app so your crew runs visits from the field",
];

export default function FieldServicesBanner() {
  return (
    <section id="field-services" className="fs">
      <div className="wrap fs-grid">
        <div>
          <span className="fs-badge">New &middot; Private beta</span>
          <h2>Run the work, <span className="hl">not just the leads.</span></h2>
          <p className="lead">
            Booked Town gets you the calls. Field Services helps you run what comes next: requests, estimates, jobs, scheduling, dispatch and invoicing, in the same system as your leads. It comes along with your plan as it opens on your account.
          </p>
          <ul className="checks fs-points">
            {POINTS.map((p) => <li key={p}>{p}</li>)}
          </ul>
          <div className="cta-row" style={{ marginTop: 28 }}>
            <Link className="btn" href="/services/field-services">See Field Services &rarr;</Link>
            <BookButton className="btn ghost">Ask about early access</BookButton>
          </div>
          <p className="note">Built for HVAC, plumbing, electrical, cleaning, landscaping and other trades that work at the customer&rsquo;s location. Currently in private beta at HighLevel, so access is rolling out.</p>
        </div>

        <div className="fs-mock" aria-hidden="true">
          <div className="fsm-head"><b>Today&rsquo;s visits</b><span className="m-tag">Demo data</span></div>
          <div className="fsm-row"><span className="fsm-time">8:00</span><div><b>AC repair</b><small>Morgan H. &middot; 2 techs</small></div><span className="fsm-chip done">Completed</span></div>
          <div className="fsm-row"><span className="fsm-time">10:30</span><div><b>Furnace tune-up</b><small>James R.</small></div><span className="fsm-chip way">On my way</span></div>
          <div className="fsm-row"><span className="fsm-time">1:00</span><div><b>Water heater estimate</b><small>Alana P.</small></div><span className="fsm-chip sched">Scheduled</span></div>
          <div className="fsm-route"><span>Route optimization</span><b>Drive time saved before you apply</b></div>
          <div className="fsm-bill">
            <div><small>Invoiced</small><b>$1,240</b></div>
            <div><small>Paid</small><b>$860</b></div>
            <div><small>Outstanding</small><b>$380</b></div>
          </div>
          <small className="note">Illustration with demo data. Real figures come from your own jobs.</small>
        </div>
      </div>
    </section>
  );
}
