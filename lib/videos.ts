export type Video = { name: string; provider: "youtube" | "vimeo"; id: string; thumb: string; note?: string };

// Source: https://codenovahq.com/testimonials. These clips were recorded while Umair Gujjar was at a previous agency,
// before Code Nova HQ. They still play from the channels that published them. They are NOT Booked Town client videos.
const yt = (name: string, id: string): Video => ({ name, provider: "youtube", id, thumb: `https://i.ytimg.com/vi/${id}/hqdefault.jpg` });

export const VIDEOS: Video[] = [
  yt("Cathy McReynolds", "QrZRu9nkTLI"),
  yt("Kevin Tacher", "iSmxBeWJMLI"),
  yt("Anna Rocha", "PP3-oFrTrZo"),
  yt("Ryan Marshall", "fIik6BzfiMM"),
  yt("Jason Klein", "dnL2z3uGhTk"),
  yt("Tyler Jeron", "hcP6XKeuO4U"),
  yt("Martin Karanja", "VwQ0GsCPzl4"),
  yt("Abhilasha Jain", "dfkK773PyAs"),
  yt("Eric Ferron", "Fr9f0iTowiY"),
  yt("Frank Choi", "u7CNj2qxLqw"),
  yt("Margo Sun", "42-U4sI7aiw"),
  { name: "Magriet Groenewald", provider: "vimeo", id: "317988513", thumb: "/videos/vimeo-317988513.jpg", note: "USAWAL" },
];
