export type Testimonial = {
  name: string;
  role: string;
  country: string;
  quote: string;
};

export type PressItem = {
  source: string;
  kind: "Press" | "Competition" | "Award";
  headline: string;
  url: string;
  year: number;
};

export const award = {
  short: "4th place + Special Award",
  long: "4th place and a Special Award at the 10th Galaksija Cup National STEM Championship",
  year: 2026,
};

export const testimonials: Testimonial[] = [
  {
    name: "Michael Johnson",
    role: "Android app client",
    country: "United States",
    quote:
      "Danilo was awesome to work with. I came in with a pretty rough idea of what I wanted, and he turned it into an Android app that actually feels polished and ready to use. Communication was quick, changes were handled without any drama, and he caught a couple things I hadn’t even thought about. Would absolutely work with him again.",
  },
  {
    name: "James Smith",
    role: "Website client",
    country: "United Kingdom",
    quote:
      "We needed a new website without turning it into a massive, drawn-out project. Danilo understood the brief quickly, asked sensible questions and just got on with it. The finished site looks great on both desktop and mobile and, importantly, is easy for us to actually use. Very pleased with the result.",
  },
  {
    name: "Anna Müller",
    role: "AI integration client",
    country: "Germany",
    quote:
      "Danilo integrated the AI functionality into our existing system and delivered exactly what we discussed. What I appreciated most was that he did not overcomplicate the solution. He explained the technical decisions clearly, tested the integration properly and was reliable throughout the project. The implementation has been stable and works well in our existing workflow.",
  },
];

export const press: PressItem[] = [
  {
    source: "Blic",
    kind: "Press",
    headline: "National coverage of the Galaksija Cup 2026 special-award recipients",
    url: "https://www.blic.rs/biznis/tech/ovo-dva-tehnoloske-resenja-su-odnela-pobedu-na-10-galaksija-kupu-2026/6vt13wc",
    year: 2026,
  },
  {
    source: "PC Press",
    kind: "Press",
    headline: "Technology coverage of the Galaksija Cup results",
    url: "https://pcpress.rs/pobednici-galaksija-kupa-2026-logopedski-uredaj-iz-novog-sada-najbolji-nagradeni-i-podvodni-dron-iz-nisa-i-pametna-invalidska-kolica-iz-cacka/",
    year: 2026,
  },
  {
    source: "Nauka Telegraf",
    kind: "Press",
    headline: "Science coverage naming Danilo and the Smart Vehicle project",
    url: "https://nauka.telegraf.rs/naucne-zanimljivosti/4300950-pobednici-galaksija-kupa-2026-logopedski-uredjaj-iz-novog-sada-najbolji",
    year: 2026,
  },
  {
    source: "Niška Priča",
    kind: "Press",
    headline: "Niš students recognised at the Galaksija Cup",
    url: "https://niskaprica.rs/drustvo/niski-tesla-sa-kolegama-medju-najboljima-u-srbiji/",
    year: 2026,
  },
  {
    source: "Metropolitan University",
    kind: "Competition",
    headline: "2nd place in the AI assistant competition at Make IT Day @ MET 2026",
    url: "https://www.metropolitan.ac.rs/novosti/mladi-it-talenti-stvarali-prve-digitalne-projekte-na-make-it-day-met-2026/",
    year: 2026,
  },
  {
    source: "Galaksija Cup",
    kind: "Award",
    headline: "Official results: special recognition for the Smart Vehicle project",
    url: "https://galaksijakup.rs/pobednici-galaksija-kupa-2026/",
    year: 2026,
  },
];
