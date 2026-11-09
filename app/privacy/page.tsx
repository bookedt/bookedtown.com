import Legal from "../../components/Legal";

export const metadata = { title: "Privacy policy", description: "How Booked Town collects, uses and protects your information.", alternates: { canonical: "/privacy" } };

export default function Privacy() {
  return (
    <Legal
      path="/privacy"
      title="Privacy policy"
      updated="November 10, 2026"
      intro="This policy explains what information Booked Town collects, why we collect it, and the choices you have."
      sections={[
        { h: "Information we collect", p: ["We collect information you give us, such as your name, phone number, email address, business name and location when you fill in a form, book a call or become a client."], ul: ["Contact details and business information", "Messages you send us through forms, text or chat", "Basic usage data from our website, such as pages visited and device type"] },
        { h: "How we use it", p: ["We use your information to respond to you, provide and improve our services, send service updates, and, where you have agreed, send marketing messages. We do not sell your personal information."] },
        { h: "Texting and calls", p: ["If you give us your phone number, we may call or text you about your enquiry or your account. You can reply STOP to any marketing text to opt out. Message and data rates may apply. Consent to marketing is not a condition of buying our services."] },
        { h: "Cookies and analytics", p: ["Our website uses cookies and similar tools to understand how visitors use it, for example through analytics. You can control cookies in your browser settings."] },
        { h: "Sharing", p: ["We share information only with service providers that help us run our business, such as hosting, payment, scheduling and messaging tools, and where the law requires it. These providers may only use your information to provide their service to us."] },
        { h: "Client data", p: ["For clients, we handle your customer lists and lead information only to provide the services you buy. Your customer data remains yours."] },
        { h: "Your choices", p: ["You can ask us to access, correct or delete the personal information we hold about you, or to stop contacting you, by contacting us through the contact page."] },
        { h: "Security and retention", p: ["We use reasonable measures to protect your information and keep it only as long as we need it for the purposes above or as the law requires."] },
        { h: "Changes", p: ["We may update this policy. The date at the top shows when it last changed."] },
      ]}
    />
  );
}
