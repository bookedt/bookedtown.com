export type Member = { name: string; role: string; photo: string; skills?: string[] };

// Source: https://codenovahq.com/about (names, roles and photos). Code Nova HQ builds every Booked Town site.
export const LEAD: Member & { bio: string } = {
  name: "Umair Gujjar",
  role: "Founder & CEO, Lead Architect",
  photo: "/team/umair.webp",
  bio: "Umair started Code Nova HQ in 2018 with one laptop and a first paid contract. Today he leads the team that designs the systems behind every Booked Town site: the website, the Google profile, the follow-up and the reporting.",
};

export const TEAM: Member[] = [
  { name: "Muhammad Noman", role: "GHL, WordPress & Automation Expert", photo: "/team/noman.webp" },
  { name: "Awais Gujjar", role: "GHL & SEO Expert", photo: "/team/awais.webp" },
  { name: "Amir Ali Ghafoor", role: "Complete SEO Expert", photo: "/team/amir.webp" },
  { name: "Adnan Javed", role: "GHL, SEO & WordPress Specialist", photo: "/team/adnan.webp" },
  { name: "Abdullah Gujjar", role: "GHL, WordPress & SEO Expert", photo: "/team/abdullah.webp" },
  { name: "Murtaza Jilani", role: "GHL & WordPress Expert", photo: "/team/murtaza.webp" },
  { name: "Abdul Ahad", role: "GHL, WordPress & AI Website Developer", photo: "/team/ahad.webp" },
  { name: "Talha Abid", role: "WordPress & Shopify Expert", photo: "/team/talha.webp" },
  { name: "Huzaifa Gujjar", role: "Shopify Expert", photo: "/team/huzaifa.webp" },
  { name: "Wajid Latif", role: "GHL & ClickFunnels Expert", photo: "/team/wajid.webp" },
  { name: "Fawad Mahedi", role: "Performance Marketing Lead", photo: "/team/fawad.webp" },
  { name: "Ali Chaudhry", role: "RCM Operations Specialist", photo: "/team/ali-chaudhry.webp" },
];
