export type Section = { h: string; p: string[]; ul?: string[] };
export type Article = { slug: string; title: string; excerpt: string; mins: number; date: string; sections: Section[] };

const D = "2026-11-10";

export const ARTICLES: Article[] = [
  {
    slug: "how-to-rank-higher-on-google-maps",
    title: "How to rank higher on Google Maps as a contractor",
    excerpt: "Google ranks local results on relevance, distance and prominence. Here is what you can actually change.",
    mins: 4, date: D,
    sections: [
      { h: "How Google decides who shows up", p: ["Google says local results are based mainly on three things: relevance, distance and prominence. Relevance is how well your profile matches what the person searched. Distance is how far you are from them. Prominence is how well known you are, based on reviews, links and mentions across the web.", "You cannot change distance, so the work is relevance and prominence."] },
      { h: "Fix relevance first", p: ["Choose the most specific primary category, such as “Roofing contractor” rather than “Contractor”, and add every service you actually offer. Write a clear description and list the towns you serve. Make sure the name, address and phone number match your website exactly."], ul: ["Pick one accurate primary category", "List every service, with a short description", "Set your service areas honestly", "Keep your name, address and phone number identical everywhere"] },
      { h: "Build prominence", p: ["Reviews are the strongest signal you control. A steady flow of recent reviews, with replies from you, tells Google and customers that you are active. Photos of real finished jobs and regular posts add to that.", "Your website matters too. A page for each service and each town gives Google more evidence of what you do and where."] },
      { h: "Stay active", p: ["A profile you update every month beats one you set up once. Post job photos, answer questions and reply to every review. None of this is complicated, but most competitors skip it, which is why it works."] },
    ],
  },
  {
    slug: "why-contractors-need-a-website",
    title: "Why contractors still need a website",
    excerpt: "A Google profile is not enough on its own. Here is what a website does that nothing else can.",
    mins: 3, date: D,
    sections: [
      { h: "People check you out before they call", p: ["A homeowner choosing someone to work on their house wants proof you are real. Your Google profile gives them a phone number. A website gives them your services, your work and your story in one place."] },
      { h: "A website is the home for everything else", p: ["Ads, social posts and your Google profile all need somewhere to send people. A site with a quote form on every page turns that attention into estimate requests, and it works while you are on a job."] },
      { h: "It is how you get found for specific jobs", p: ["Searches like “deck repair in your town” are won by pages written for exactly that. One page per service and per town gives you many more chances to appear than a single homepage."] },
      { h: "You own it", p: ["Social accounts and listing sites can change their rules overnight. A website on your own domain is an asset that stays yours."] },
    ],
  },
  {
    slug: "how-to-get-more-google-reviews",
    title: "How to get more Google reviews without being pushy",
    excerpt: "Most happy customers never leave a review because nobody asks. A simple routine fixes that.",
    mins: 4, date: D,
    sections: [
      { h: "Ask every time", p: ["Customers who are happy with your work are usually glad to leave a review. They just forget, or they do not know how. Make the request part of finishing every job, not something you do when you remember."] },
      { h: "Ask at the right moment", p: ["The best time is right after the work is done and the customer is pleased. A text with a direct link, sent that day, converts far better than an email a week later."] },
      { h: "Make it one tap", p: ["Every extra step costs you reviews. Send a link that opens your Google review box directly. Do not ask people to search for your business."] },
      { h: "Do not filter by stars", p: ["Some tools only show the Google link to people who rate you highly. Google calls that review gating and does not allow it. Ask for feedback first and offer the Google link to everyone."] },
      { h: "Reply to every review", p: ["Thank people for good reviews and mention the job or the town. Replying shows future customers that you pay attention, and it adds relevant words to your profile."] },
    ],
  },
  {
    slug: "complete-guide-to-google-local-services-ads",
    title: "A plain guide to Google Local Services Ads",
    excerpt: "What Local Services Ads are, how they differ from regular Google Ads, and whether they suit your trade.",
    mins: 4, date: D,
    sections: [
      { h: "What they are", p: ["Local Services Ads appear at the very top of Google for certain trades, above regular ads and the map results. They show your business name, reviews and a badge, with a call or message button."] },
      { h: "How they differ from regular ads", p: ["With regular Google Ads you pay when someone clicks. With Local Services Ads you pay per lead, meaning a call or message from a customer, and you can dispute leads that are not a fit. You do not choose keywords. Google matches your business to the jobs you select."] },
      { h: "What you need to qualify", p: ["Google verifies your business before your ads run. That usually includes a licence where your state requires one, insurance and background checks on the owner or employees. The badge you earn tells customers you have been checked."], ul: ["Business and owner verification", "Valid licence and insurance where required", "A Google Business Profile in good standing", "Good reviews, which affect where you appear"] },
      { h: "Are they right for you?", p: ["They suit trades Google offers them for, in areas where you are happy to take the leads that come. They work best alongside a strong profile and fast follow-up, because the lead is only worth something if you answer it quickly."] },
    ],
  },
  {
    slug: "7-reasons-your-contractor-website-isnt-getting-leads",
    title: "7 reasons your contractor website is not getting leads",
    excerpt: "If visitors arrive and nobody calls, one of these is usually why.",
    mins: 5, date: D,
    sections: [
      { h: "1. It is slow on a phone", p: ["Most local visitors are on mobile. If the page takes several seconds to load, many leave before they see anything."] },
      { h: "2. The phone number is hard to tap", p: ["Your number should be at the top of every page and tappable. Make calling effortless."] },
      { h: "3. There is no clear next step", p: ["Every page should end with one obvious action: call, or request an estimate. A form buried on a contact page loses people."] },
      { h: "4. It looks like everyone else", p: ["Stock photos and vague promises do not build trust. Real photos of your crew and your finished work do."] },
      { h: "5. There are no service or town pages", p: ["If your site has one page for everything, it cannot rank for specific jobs in specific towns."] },
      { h: "6. There is no proof", p: ["Reviews, licences, insurance and before-and-after photos answer the question every homeowner has: can I trust you?"] },
      { h: "7. Nobody follows up", p: ["Even a good site fails if form requests sit unanswered. Reply within minutes, not days. Automatic text-back and follow-up fix this."] },
    ],
  },
  {
    slug: "how-to-handle-negative-reviews",
    title: "How to handle a negative review",
    excerpt: "A bad review is not the end of the world. How you reply is what future customers read.",
    mins: 3, date: D,
    sections: [
      { h: "Take a breath, then reply", p: ["Do not reply while angry. Wait, then write a calm answer. Future customers are reading your reply, not just the complaint."] },
      { h: "A simple structure", p: ["Thank them for the feedback, say you are sorry they were disappointed, state the facts briefly if needed, and invite them to talk offline."], ul: ["Thank them and acknowledge the issue", "Keep it short and polite", "Do not argue or share private details", "Offer a phone number or email to resolve it"] },
      { h: "Fix the problem", p: ["If the customer has a fair point, put it right. Customers often update a review after a good resolution."] },
      { h: "Report what is fake", p: ["If a review is spam, about a different business or breaks Google’s policies, you can flag it for removal. Honest reviews cannot be removed, so the best protection is a steady stream of good ones."] },
    ],
  },
  {
    slug: "facebook-ads-vs-google-ads-for-contractors",
    title: "Facebook ads vs Google ads for contractors",
    excerpt: "One catches people who are searching. The other finds people who are not. Which fits your trade?",
    mins: 4, date: D,
    sections: [
      { h: "Search intent versus interruption", p: ["Google ads show up when someone is already searching for a service, like “emergency plumber”. The person wants help now. Facebook and Instagram ads show up while people scroll. They did not ask for you, so the ad has to earn attention."] },
      { h: "When Google tends to fit better", p: ["Urgent or high-intent jobs, such as repairs, emergencies and replacements, usually suit search ads, because the customer is looking right now."] },
      { h: "When Facebook tends to fit better", p: ["Considered projects people plan for, such as remodels, decks, patios and landscaping, can work well on social, especially with strong before-and-after photos and an offer."] },
      { h: "Either way, the foundation matters", p: ["Both send people to your site and your profile. If those are slow, empty or have no reviews, you pay for clicks that do not turn into jobs. Get the foundation right first, then test one channel at a time."] },
    ],
  },
  {
    slug: "how-to-generate-referrals-on-autopilot",
    title: "How to get referrals on autopilot",
    excerpt: "Referrals are the best leads you can get. A simple system makes them happen more often.",
    mins: 3, date: D,
    sections: [
      { h: "Why referrals are the best leads", p: ["Someone who is recommended by a friend arrives already trusting you. They compare fewer quotes and close more often."] },
      { h: "Most people never think to refer you", p: ["Happy customers do not refer you because they forget, not because they do not like you. A gentle prompt at the right time is usually enough."] },
      { h: "A simple system", p: ["After a finished job, send a thank-you and a short referral request. A small perk for both people, like a discount on a future job, makes it easier."], ul: ["Thank every customer after the job", "Ask for a referral a few days later", "Offer a simple perk for both sides", "Remind past customers every season"] },
      { h: "Let software do the remembering", p: ["Automatic messages mean no customer is forgotten. The system asks for the review, then for the referral, then stays in touch each season."] },
    ],
  },
  {
    slug: "what-is-seo-for-local-contractors",
    title: "What is SEO, and what does it mean for a contractor?",
    excerpt: "SEO in plain English, and the parts that matter for a local trade business.",
    mins: 4, date: D,
    sections: [
      { h: "SEO in one sentence", p: ["SEO means making it easy for Google to understand what you do and where, so it shows you to people searching for it."] },
      { h: "Local SEO is different", p: ["For a contractor the goal is not to rank across the whole country. It is to appear in your towns, for your trade, in the map results and the normal results."] },
      { h: "The three parts", p: ["Local SEO is mostly three things working together."], ul: ["Your Google Business Profile: complete, active and reviewed", "Your website: a page per service and per town, fast on mobile", "Your reputation: reviews, and consistent business details across the web"] },
      { h: "Why it takes time", p: ["Search results do not change overnight, because Google needs time to see that your site and profile are consistent and keep growing. That is why steady monthly work beats a one-time push, and why nobody honest can promise a rank on a date."] },
    ],
  },
  {
    slug: "how-to-convert-website-visitors-into-customers",
    title: "How to turn website visitors into customers",
    excerpt: "Traffic is only useful if people take the next step. Here is how to make that easy.",
    mins: 4, date: D,
    sections: [
      { h: "Make the next step obvious", p: ["Every page needs a clear action. For most contractors that is call, or request a free estimate. Put both where people can see them without scrolling."] },
      { h: "Keep the form short", p: ["Name, phone and a line about the job is usually enough. Each extra field reduces the number of people who finish."] },
      { h: "Show proof near the button", p: ["Reviews, licences and a few finished-job photos near the call to action answer the doubt that stops people from reaching out."] },
      { h: "Answer fast", p: ["The first contractor to reply often gets the job. Missed-call text-back and instant follow-up keep a lead warm while you are busy."] },
      { h: "Measure it", p: ["Track calls and form requests, not just visits. If a page gets traffic but no requests, change that page."] },
    ],
  },
];

export const getArticle = (slug: string) => ARTICLES.find((a) => a.slug === slug);
