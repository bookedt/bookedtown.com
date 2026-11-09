"use client";
import { useState } from "react";
import { BOOKING_URL } from "../lib/config";

const TRADES = ["Roofing", "Painting", "Concrete", "Fencing", "Tree service", "Landscaping", "HVAC", "Plumbing", "Electrical", "Decks & patios", "General contractor", "Other"];

export default function ContactForm() {
  const [done, setDone] = useState(false);
  // TODO: send the lead to GoHighLevel (form embed or webhook). Today it only shows the thank-you note.
  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (BOOKING_URL) window.open(BOOKING_URL, "_blank", "noopener");
    setDone(true);
  }
  if (done) {
    return (
      <div className="card">
        <h3>Thanks, we&rsquo;ve got it.</h3>
        <p className="note">We&rsquo;ll be in touch to set up your call.</p>
      </div>
    );
  }
  return (
    <div className="card">
      <form className="form" onSubmit={onSubmit}>
        <div className="two">
          <label>Your name<input name="name" required autoComplete="name" /></label>
          <label>Phone<input name="phone" type="tel" required autoComplete="tel" /></label>
        </div>
        <div className="two">
          <label>Email<input name="email" type="email" required autoComplete="email" /></label>
          <label>Business name<input name="business" required autoComplete="organization" /></label>
        </div>
        <div className="two">
          <label>Trade<select name="trade">{TRADES.map((t) => <option key={t}>{t}</option>)}</select></label>
          <label>City &amp; state<input name="city" required /></label>
        </div>
        <label>Website (if you have one)<input name="site" type="url" placeholder="https://" /></label>
        <label>Anything we should know?<textarea name="msg" /></label>
        <button className="btn" type="submit">Request my free call &rarr;</button>
      </form>
    </div>
  );
}
