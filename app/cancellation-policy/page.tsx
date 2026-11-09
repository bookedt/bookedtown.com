import Legal from "../../components/Legal";

export const metadata = { title: "Cancellation policy", description: "How to cancel your Booked Town plan.", alternates: { canonical: "/cancellation-policy" } };

export default function Cancellation() {
  return (
    <Legal
      path="/cancellation-policy"
      title="Cancellation policy"
      updated="November 10, 2026"
      intro="No long-term contract. You can cancel your monthly plan whenever you like."
      sections={[
        { h: "Monthly plans", p: ["Cancel any time before your next billing date and you will not be charged again. Your plan stays active until the end of the month you have already paid for."] },
        { h: "Prepaid terms", p: ["If you paid for 3, 6 or 12 months up front, your service continues to the end of the paid term. Prepaid terms are not refundable after the delivery guarantee period, except as set out in our refund policy."] },
        { h: "How to cancel", p: ["Send us a message in your client group chat or through the contact page. We will confirm in writing."] },
        { h: "What you keep", p: ["Your domain, your Google Business Profile, your reviews and your customer data are yours and stay with you. We will remove our access to your Google profile and other accounts on request."] },
        { h: "Your website", p: ["The website stays on our hosting while you are a client. When you cancel, you may buy it for $1,500, or it is yours free if you have completed 24 paid months. Otherwise we may take the site offline after cancellation."] },
      ]}
    />
  );
}
