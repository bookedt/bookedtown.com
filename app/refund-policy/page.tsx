import Legal from "../../components/Legal";

export const metadata = { title: "Refund policy", description: "Booked Town’s delivery guarantee and how refunds work.", alternates: { canonical: "/refund-policy" } };

export default function Refund() {
  return (
    <Legal
      path="/refund-policy"
      title="Refund policy"
      updated="November 10, 2026"
      intro="We stand behind getting the work done on time. Here is exactly when you get your first month back."
      sections={[
        { h: "Our delivery guarantee", p: ["If your website is not live within 7 business days of us receiving your payment and completed onboarding form, or if the five setup items are not complete within 30 days, we will refund your first month."], ul: ["Google Business Profile built out", "Review requests going out", "Missed-call text-back working", "Lead follow-up in place", "The mobile app set up"] },
        { h: "What can pause the clock", p: ["The guarantee assumes we have what we need from you. If we are waiting on your logo, photos, access or approvals, or on a third party such as the carriers’ text-message registration, the time that takes does not count against the guarantee."] },
        { h: "What we do not guarantee", p: ["We do not guarantee search rankings, a number of leads or revenue. The refund covers delivery of the work, not market results."] },
        { h: "Build fee and prepaid terms", p: ["If the delivery guarantee applies, we refund your first month’s fee. If you paid for 3, 6 or 12 months up front, the refund is the equivalent of one month at the standard monthly rate, and the build fee is not refunded unless it was charged and we failed to deliver the site."] },
        { h: "How to ask", p: ["Contact us through the contact page within 14 days of the missed deadline. We will confirm the facts and refund to your original payment method."] },
      ]}
    />
  );
}
