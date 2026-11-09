export type Testimonial = { name: string; context: string; quote: string; source: "Fiverr" | "Upwork" };

// Verified marketplace reviews from completed contracts with Code Nova HQ, the team that builds Booked Town sites.
// Source: https://codenovahq.com/testimonials (quoted as written there; Fiverr shows handles, Upwork shows no names).
// These are NOT Booked Town client reviews. Add those to a separate list, with written approval, once they exist.
export const TESTIMONIALS: Testimonial[] = [
  { name: "Jerome Washington", context: "Funnel build", source: "Fiverr", quote: "I've gotten many jobs done on Fiverr and Umair hands down blew every expectation out the water. He went over and beyond and for the first time felt he had a super clear understanding of what I was really needing." },
  { name: "Luca Shelesky", context: "Website project", source: "Fiverr", quote: "Super professional, attentive, responsive and helpful. A creative and efficient process." },
  { name: "Mark Shawzin", context: "Setup project", source: "Fiverr", quote: "Umair was very quick and professional. Great responsiveness. Very honest." },
  { name: "Tiffany Nicole", context: "Design and build", source: "Fiverr", quote: "Enjoyed the impeccable level of communication they had with me! Great team to work with for my funnel design and build." },
  { name: "petalandplant", context: "Shopify to WordPress migration", source: "Fiverr", quote: "It was a really heavy duty job with 24 products and variants and over a dozen pages. I need a pro. Umair did all the heavy lifting and is still helping me with the details even after the gig has technically completed!" },
  { name: "Helen Elena Vayner", context: "Build project", source: "Fiverr", quote: "Absolutely amazing service and support. Umair goes far and beyond the support he initially offers. He treats your business like his own and not only creates but makes sure your business is functional and makes money." },
  { name: "gabvaradi", context: "WordPress project", source: "Fiverr", quote: "Umairgujjar is very reliable and flexible person who help every little new idea, issue under the project. I can recommend him!" },
  { name: "cbs007", context: "WordPress, repeat client", source: "Fiverr", quote: "Always a pleasure to work with. Just consider him a part of the team! Great work, as usual!" },
  { name: "Upwork client", context: "Zapier and CRM integration", source: "Upwork", quote: "Umair is the man! He is very detail oriented and quick to get the job done." },
];
