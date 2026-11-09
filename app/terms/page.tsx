import Legal from "../../components/Legal";

export const metadata = { title: "Terms of service", description: "The terms that apply when you use Booked Town and buy our services.", alternates: { canonical: "/terms" } };

export default function Terms() {
  return (
    <Legal
      path="/terms"
      title="Terms of service"
      updated="November 10, 2026"
      intro="These terms apply to your use of our website and to the services we provide. By using them, you agree to these terms."
      sections={[
        { h: "Our services", p: ["Booked Town provides a website, Google Business Profile management, monthly SEO content, review requests, missed-call text-back, follow-up and customer reactivation for businesses, as described on our website and in your order."] },
        { h: "Plans and payment", p: ["The standard plan is billed monthly in advance. You may instead pay for 3, 6 or 12 months up front at the listed price. A one-time build fee may apply and may be waived for some clients. Prices may change for new clients, and we will tell you before any change affects your plan."] },
        { h: "What we need from you", p: ["We need accurate information and timely access, such as your logo, photos, customer list and approval to manage your Google profile. Some parts of the service, such as text-message registration, depend on third parties and can take longer than we estimate."] },
        { h: "Ownership", p: ["You own your domain, your Google Business Profile, your reviews and your customer data. The website we build stays on our hosting while you are a client. You may buy the site for $1,500, or it becomes yours at no cost after 24 paid months."] },
        { h: "No guarantee of results", p: ["Search rankings, leads and revenue depend on many things we do not control, such as competition and Google’s changes. We do not guarantee any ranking or number of leads. Our commitments are the delivery times and setup items described in our refund policy."] },
        { h: "Reviews and messaging", p: ["You agree to use review and messaging tools in line with Google’s policies and applicable messaging laws, including obtaining consent where required. We will not create fake reviews."] },
        { h: "Cancellation and refunds", p: ["Cancellation and refunds are covered by our cancellation policy and refund policy, which form part of these terms."] },
        { h: "Limits of liability", p: ["To the extent the law allows, our liability is limited to the fees you paid us in the month in which the claim arose, and we are not liable for indirect or lost-profit losses."] },
        { h: "Changes to these terms", p: ["We may update these terms. Continued use of our services after a change means you accept it."] },
      ]}
    />
  );
}
