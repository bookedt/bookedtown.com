import { BOOKING_URL } from "../lib/config";

export default function ContactForm() {
  if (!BOOKING_URL) {
    return (
      <div className="card" role="status">
        <h3>Online booking is being set up.</h3>
        <p className="note">Please check back shortly to request your free strategy call.</p>
      </div>
    );
  }
  return (
    <div className="card">
      <h3>Choose a time for your free strategy call.</h3>
      <p className="note">Enter your business details and confirm your time on our booking page.</p>
      <a className="btn" href={BOOKING_URL}>Open booking calendar &rarr;</a>
    </div>
  );
}
