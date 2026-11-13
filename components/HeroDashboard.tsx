import { Phone, MessageSquare, CheckCircle2, CalendarCheck, Star } from "lucide-react";

const STEPS = [
  { Icon: Phone, t: "New lead", d: "Roof repair request", s: "Google Business Profile · 8:42 PM" },
  { Icon: MessageSquare, t: "Responded", d: "Text sent in seconds", s: "Missed-call text-back" },
  { Icon: CheckCircle2, t: "Qualified", d: "Job details captured", s: "Roof leak · 2-story home" },
  { Icon: CalendarCheck, t: "Booked", d: "Estimate · Tomorrow 10 AM", s: "Calendar confirmed" },
];

const FEED = [
  { t: "Missed call recovered", w: "Morgan H.", m: "seconds" },
  { t: "Estimate booked", w: "James R.", m: "2 min" },
  { t: "Review request sent", w: "Alana P.", m: "5 min" },
  { t: "New Google review", w: "Customer", m: "1 hr" },
];

export default function HeroDashboard() {
  return (
    <div className="dash" aria-hidden="true">
      <div className="dash-top">
        <span className="dash-pill"><i /> Product preview &middot; Demo data</span>
        <span className="dash-live"><i /> Automations active</span>
      </div>
      <h3>Every lead visible. Every next step moving.</h3>
      <div className="dash-kpis">
        <div><small>Open leads</small><b>12</b></div>
        <div><small>Avg. response</small><b>0:42</b></div>
        <div><small>Estimates</small><b>7</b></div>
        <div><small>Reviews asked</small><b>31</b></div>
      </div>
      <div className="dash-main">
        <div className="dash-journey">
          <p className="dash-label">Lead journey</p>
          {STEPS.map(({ Icon, t, d, s }, i) => (
            <div className="jstep" style={{ ["--i" as string]: i }} key={t}>
              <span className="jicon"><Icon size={16} aria-hidden="true" /></span>
              <div><b>{t}</b><span>{d}</span><small>{s}</small></div>
            </div>
          ))}
        </div>
        <div className="dash-feed">
          <p className="dash-label">Live activity</p>
          {FEED.map((f, i) => (
            <div className="frow" style={{ ["--i" as string]: i }} key={f.t}>
              <span className="fdot">{f.t.includes("review") || f.t.includes("Review") ? <Star size={13} aria-hidden="true" /> : <CheckCircle2 size={13} aria-hidden="true" />}</span>
              <div><b>{f.t}</b><small>{f.w}</small></div>
              <em>{f.m}</em>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
