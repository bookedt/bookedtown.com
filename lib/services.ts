export type Service = {
  slug: string;
  name: string;
  short: string;
  headline: string;
  intro: string;
  includes: string[];
  steps: { t: string; d: string }[];
  whyTitle: string;
  why: string[];
  yourPart: string;
  faqs: { q: string; a: string }[];
  addon?: boolean;
};

export const SERVICES: Service[] = [
  {
    slug: "website",
    name: "Lead-generating website",
    short: "A fast, mobile-first site with a page for every service and every town you serve.",
    headline: "A website that turns searches into estimate requests.",
    intro:
      "Most homeowners look at your site on a phone, in a hurry, and call the first contractor who looks real. We build a 15-20 page site designed for exactly that moment, and have it live in 7 business days.",
    includes: [
      "15-20 pages: a page for every service and every town you serve",
      "Quote form and click-to-call on every page",
      "Mobile-first design that loads fast",
      "On-page SEO built in: titles, descriptions, schema and clean URLs",
      "Project gallery and about page that build trust",
      "Hosting, security and updates handled by us",
      "Your domain, registered in your own account",
    ],
    steps: [
      { t: "Day 0", d: "You sign up and fill in a short form about your business, services and towns." },
      { t: "Day 1", d: "Kickoff call. We confirm your services, service area and photos." },
      { t: "Day 2-6", d: "We write and build every page, and connect your forms and phone number." },
      { t: "Day 7", d: "Your site goes live, with Google Search Console and analytics already set up." },
    ],
    whyTitle: "Why a page per service and per town?",
    why: [
      "People search for a specific job in a specific place, like “fence repair in Knoxville”. A single generic homepage cannot answer that. A page for each service and each town can.",
      "Those pages are also what Google reads to decide where you belong on the map, which is why the website, the Google profile and the monthly SEO work as one system.",
    ],
    yourPart: "Send us your logo, a few job photos and a list of the towns you serve. We do everything else.",
    faqs: [
      { q: "Do I own my website?", a: "Your domain always sits in your own account. The site stays on our hosting while you are a client. You can buy it for $1,500, or it is yours free after 24 paid months." },
      { q: "Can I make changes?", a: "Yes. Tell us what you want changed in your client group chat and we do it. You never have to learn a page builder." },
      { q: "What if I already have a website?", a: "We build the new site alongside it and switch over when it is ready, with redirects so you keep any rankings you already have." },
    ],
  },
  {
    slug: "google-business-profile",
    name: "Google Business Profile",
    short: "Set up once, then managed every month so you keep showing up in the map pack.",
    headline: "Show up when homeowners search “near me”.",
    intro:
      "For local searches, your Google Business Profile often matters more than your website. We build it out properly once, then keep it active every month, because a profile that is updated and answered gets chosen over one that is not.",
    includes: [
      "Full setup: categories, services, service areas, hours and description",
      "Booking and website links, messaging, photos, logo and cover image",
      "4 posts a month: two job posts with photos and the town, one seasonal tip, one offer or review highlight",
      "New photos added as you send them",
      "Every review answered within 2 business days",
      "Questions on your profile answered",
    ],
    steps: [
      { t: "Day 2-3", d: "We verify your listing and build out every section of the profile." },
      { t: "Day 7", d: "Your first post goes up, with a fresh job photo and the town it was in." },
      { t: "Every month", d: "Four scheduled posts, new photos, and every review answered." },
    ],
    whyTitle: "A profile that stays active wins",
    why: [
      "Google ranks local results on relevance, distance and prominence. You cannot move closer to the customer, but you can be more relevant and more prominent: a complete profile, regular activity, and reviews that are answered.",
      "Most contractors set the profile up once and forget it. Steady monthly activity is a simple way to stand out from them.",
    ],
    yourPart: "Send job photos to your client group chat. A phone photo of the finished work is enough.",
    faqs: [
      { q: "Will you take over my existing profile?", a: "We ask for manager access to your existing profile. You stay the owner, and you can remove our access at any time." },
      { q: "Do you guarantee map-pack rankings?", a: "No. Nobody honest can. We make sure your profile is complete, active and answered, and we report on how it performs every month." },
    ],
  },
  {
    slug: "local-seo",
    name: "Monthly SEO and AI search",
    short: "Two articles and one new town or service page every month, plus a plain-English report.",
    headline: "Grow your footprint one town at a time.",
    intro:
      "Search results do not move because of a one-time setup. They move because a site keeps earning relevance. Every month we add content that targets the jobs and towns you want, written so Google and AI assistants can both understand and cite you.",
    includes: [
      "2 articles a month on the questions your customers ask",
      "1 new town or service page a month",
      "Content structured so AI assistants can understand your business",
      "Local keyword research for your trade and towns",
      "Search Console and analytics tracking from day one",
      "A one-page monthly report in plain English",
    ],
    steps: [
      { t: "Month 1", d: "Keyword research and the first articles and town page go live." },
      { t: "Every month", d: "Two new articles and one new town or service page." },
      { t: "Monthly report", d: "What was published, what Google recorded, and what we do next." },
    ],
    whyTitle: "SEO and AI search, built the same way",
    why: [
      "People increasingly ask AI assistants for a recommendation, not just Google. Both read the same things: clear services, real locations, direct answers and consistent business details. Content written that way helps in both places.",
      "SEO compounds. Each page you add keeps working, so month six is easier than month one. We never promise a rank or a lead count, but we do show you the data every month.",
    ],
    yourPart: "Nothing. If we need a fact only you know, like a price range or a service you do not offer, we ask in the group chat.",
    faqs: [
      { q: "How long does SEO take?", a: "Your site and profile are live within a week. Rankings build over months. Many local markets start to move in 60-90 days when the site, profile and reviews all work together, but it depends on your town and competition." },
      { q: "Do you write the articles?", a: "Yes. Every article is written for you, checked for accuracy, and published on your site. You do not have to approve anything unless you want to." },
    ],
  },
  {
    slug: "reviews",
    name: "Review requests",
    short: "Every finished job is followed by a request, so good work turns into reviews.",
    headline: "Turn every happy customer into a Google review.",
    intro:
      "Reviews are the biggest reason one contractor gets the call over another. Most happy customers simply never get asked. We ask every one of them, right after the job, in a way that follows Google’s rules.",
    includes: [
      "An automatic text after every completed job",
      "Feedback first, with the Google link offered to everyone",
      "Requests to your past customers in the first week",
      "Alerts when a customer reports a problem, so you can fix it quickly",
      "Every public review answered within 2 business days",
    ],
    steps: [
      { t: "Day 2-3", d: "We send review requests to your past customers." },
      { t: "After every job", d: "The customer gets a short text asking how it went." },
      { t: "Always", d: "Problems come to you privately, and every review gets a reply." },
    ],
    whyTitle: "Why feedback first, and why no star filtering",
    why: [
      "Some review tools only show the Google link to customers who give five stars. That is called review gating, and it breaks Google’s rules. The penalty lands on your business, not on the software.",
      "Our request asks for feedback first and offers the Google link to everyone. You still hear about problems early, and your profile stays safe.",
    ],
    yourPart: "Mark the job complete, or send us your customer list in the first week. That is all.",
    faqs: [
      { q: "Can you remove bad reviews?", a: "We can report reviews that break Google’s policies, such as fake reviews, but we cannot remove an honest one. The best answer to one is a calm reply and more good reviews." },
      { q: "Do you buy or write reviews?", a: "Never. Every review comes from a real customer." },
    ],
  },
  {
    slug: "missed-call-text-back",
    name: "Missed-call text-back",
    short: "Every missed call gets an instant text, so the lead does not call the next contractor.",
    headline: "Never lose a lead because you were on a roof.",
    intro:
      "You cannot answer the phone when you are up a ladder or under a sink, and the caller will not wait. Missed-call text-back sends them a text within seconds so the conversation starts before they call someone else.",
    includes: [
      "An instant text to every missed call",
      "One shared inbox for calls, texts and form requests",
      "A mobile app, so you or your office can reply from anywhere",
      "Automatic follow-up on new leads",
      "Business-texting registration handled for you",
    ],
    steps: [
      { t: "Day 1", d: "We start your business text-message registration with the carriers." },
      { t: "Day 3-14", d: "Registration is approved. This usually takes 3-7 business days and sometimes two weeks." },
      { t: "Day 7", d: "The app is on your phone, and your number is ready to go." },
    ],
    whyTitle: "Speed wins the job",
    why: [
      "A homeowner with a leaking roof calls several contractors in a row. The one who replies first usually gets the estimate. A text in seconds beats a voicemail returned hours later.",
      "Everything lands in one inbox, so a lead is never lost between a phone, a form and a text.",
    ],
    yourPart: "Log in to the app once. By day 14 we expect you to have done that, and we will remind you if not.",
    faqs: [
      { q: "Do customers need to opt in?", a: "Business texting has rules about consent. We set the system up to follow them and register your business with the carriers." },
      { q: "Does it replace my phone number?", a: "No. You keep your number. Missed calls on it trigger the text." },
    ],
  },
  {
    slug: "customer-reactivation",
    name: "Customer reactivation",
    short: "Campaigns to past customers for repeat work and referrals, sent automatically.",
    headline: "Your next job may already be in your contact list.",
    intro:
      "The people who already trust you are the cheapest customers you will ever win. We send them useful, well-timed messages so you are the first call when they need work again or know someone who does.",
    includes: [
      "Seasonal maintenance reminders for your trade",
      "Referral requests and simple referral perks",
      "Win-back offers to customers who have gone quiet",
      "Sent automatically from your own number",
      "Reply tracking in your shared inbox",
    ],
    steps: [
      { t: "By day 7", d: "You send us your past customer list, in any format." },
      { t: "Week 2", d: "We build and approve the first campaign with you." },
      { t: "Ongoing", d: "Seasonal and win-back messages go out automatically." },
    ],
    whyTitle: "Past customers are your warmest leads",
    why: [
      "A customer who has already hired you does not need convincing. They need a reminder. A short message at the right season often brings back work you would never have advertised for.",
    ],
    yourPart: "Send your customer list within the first week. It is the single biggest thing that speeds the whole system up.",
    faqs: [
      { q: "What if my list is small or messy?", a: "That is fine. We clean it up. Even a short list is worth a campaign." },
    ],
  },
  {
    slug: "google-ads",
    name: "Google Ads and ad management",
    short: "An optional add-on for contractors who want paid leads on top of the core system.",
    headline: "Paid leads, once the foundation is working.",
    intro:
      "Ads send you leads now, while SEO builds over time. They work best when the website, Google profile and follow-up are already in place, which is why ad management is an add-on to the Booked Town plan, not a replacement for it.",
    includes: [
      "Search campaigns for the services and towns you want",
      "Call tracking so you know which ads ring your phone",
      "Landing pages built on your site",
      "Monthly reporting on cost per lead and booked jobs",
    ],
    steps: [
      { t: "Step 1", d: "We confirm your target jobs, towns and monthly ad budget." },
      { t: "Step 2", d: "We build the campaigns and tracking, and launch." },
      { t: "Monthly", d: "We review the numbers and adjust where the money goes." },
    ],
    whyTitle: "Foundation first, ads second",
    why: [
      "Ad clicks that land on a slow site or a profile with no reviews waste money. With the core system working, the same ad budget turns into more booked jobs.",
    ],
    yourPart: "Your own ad spend goes straight to Google. Our management fee is separate. Ask us for a quote for your trade and market.",
    faqs: [
      { q: "Is ad management included in the $297 plan?", a: "No. It is an optional add-on, priced as a management fee plus your own ad spend." },
    ],
    addon: true,
  },
];

export const getService = (slug: string) => SERVICES.find((s) => s.slug === slug);
