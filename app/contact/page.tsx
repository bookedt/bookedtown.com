import Link from "next/link";
import BookButton from "../../components/BookButton";
import ContactForm from "../../components/ContactForm";
export const metadata = {"title": "Contact", "description": "Book a free strategy call with Booked Town.", "alternates": {"canonical": "/contact"}};

export default function Contact() {
  return (
    <>
<section className="phero"><div className="wrap">
  <h1>Book a free <span className="hl">strategy call.</span></h1>
  <p className="lead">Tell us about your business. We&rsquo;ll audit your Google profile and website and show you where your competitors are beating you.</p>
</div></section>
<section style={{ paddingTop: "24px" }}><div className="wrap split">
  <ContactForm />
  <div>
    <h2>What happens next</h2>
    <div className="steps" style={{ marginTop: "28px" }}>
      <div><span><b>We review your market</b><p>Your Google profile, website and the top contractors in your town.</p></span></div>
      <div><span><b>We call you</b><p>A short call to walk through what we found.</p></span></div>
      <div><span><b>You decide</b><p>No pressure, no contract. If it fits, you can be live in 7 business days.</p></span></div>
    </div>
  </div>
</div></section>
    </>
  );
}
