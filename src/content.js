// E-Mail steht nicht im Klartext im Code, damit Adress-Sammler sie nicht finden.
// Sie wird erst beim Klick zusammengesetzt.
export const mailParts = [[115,97,121,104,101,108,108,111,46,103,114,101,103,111,114],[112,109,46,109,101]];

export const links = {
  linkedin: "https://www.linkedin.com/in/gregor-s-8b36401a4/",
  github: "https://github.com/GregorSchulze",
};

export const hero = {
  title: "Content Engineer",
  text: "I make software easier to understand, with explainer videos, launch content and systems that make quality repeatable. What matters to me isn’t output but whether people can actually use a product.",
};

export const about = {
  lead: "I judge content by whether people can do something better afterwards.",
  paragraphs: [
    "Hi, I’m Gregor. I work where product, explanation and community meet. How does someone come to understand a piece of software, where do they get stuck, and what content helps at exactly that moment?",
    "At Hero Software, I’m responsible for the video content on the customer education site and produce launch videos for new features. Targeted videos in the community are meant to make the software easier to use.",
    "Before that, I spent five years as a motion designer at a PR agency. Today I turn that craft into systems. I build my own skills in Claude that keep quality and consistency in check, so my time goes into the questions that matter. What does someone need to understand, and how do I know it helped?",
    "I spend my free time in the mountains whenever I can. When I’m not tinkering with new ideas, you’ll find me on the next summit.",
  ],
  tools: [
    ["AI and content", "Claude, custom Claude Skills, educational content, vibe coding"],
    ["Web", "HTML, CSS, JavaScript, TypeScript, React, Tailwind, Git"],
    ["Motion and video", "After Effects, Premiere Pro, Figma"],
  ],
};

export const projects = {
  intro: "Projects I use to learn programming and vibe coding.",
  items: [
    {
      title: "Rentenplaner",
      href: "https://gregorschulze.github.io/rentenplaner/",
      image: "/img/rentenplaner.jpg",
      imageAlt: "Rentenplaner: input form and chart of BTC and ETF growth",
      crop: true,
      text: "A BTC and ETF savings plan calculator as an installable web app (PWA). Built through vibe coding.",
      tags: "React, TypeScript, Vite",
    },
    {
      title: "Cinetracker",
      href: "https://gregorschulze.github.io/cinetracker/",
      image: "/img/cinetracker.jpeg",
      imageAlt: "Cinetracker: grid of film posters with a search field",
      crop: false,
      text: "A film app with search, trailer view and a favorites list, built on the TMDB API.",
      tags: "React, Vite, Tailwind",
    },
  ],
};

export const cv = {
  intro: "From motion design to content engineering.",
  items: [
    {
      date: "Oct 2026 – present",
      title: "Product Marketing Manager, Hero Software",
      text: "I’m responsible for our customer learning academy and support feature launches with video.",
      bullets: [
        "Build systems and processes, including my own Claude Skills, for fast and consistent video content",
        "Support other teams with video production",
      ],
    },
    {
      date: "Sep 2021 – 2026",
      title: "Motion Designer, Weber Shandwick, Berlin",
      text: "At the PR agency Weber Shandwick, I worked mainly in healthcare, turning complex health topics into clear, accessible video formats. I contributed to projects that moved health communication forward.",
      bullets: [
        "Built AI systems for voiceover and video production (Higgsfield, Gemini Gems) to use time and resources more efficiently",
        "Advised project teams on technical consistency, version control and creative decisions for final deliverables",
        "Owned technical specs and quality control for complex digital formats, and connected concept and client teams in production",
      ],
    },
    { date: "2024", title: "Front-end development course, Treehouse" },
    {
      date: "Alongside",
      title: "Freelance video production",
      text: "Corporate films, music videos for various artists, wedding films and commercials for a range of clients.",
    },
    {
      date: "2017 – 2021",
      title: "Bachelor of Arts in Media Management, Mittweida University of Applied Sciences",
      text: "Specialization in production.",
    },
  ],
};

export const quote = {
  text: "“Thanks to his excellent quick grasp, he is always able to assess even difficult situations accurately and immediately and to find excellent solutions fast. Even under the heaviest workloads, he consistently proves exceptionally resilient.”",
  name: "Katrin Brandt",
  role: "SVP at Weber Shandwick",
};
