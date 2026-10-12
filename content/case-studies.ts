export type CaseStudyLink = {
  label: string;
  href: string;
};

export type CaseStudyImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

export type CaseStudy = {
  slug: string;
  // States the problem and the result.
  title: string;
  // Short, search-friendly title for the <title> tag.
  seoTitle: string;
  // Short label: whose project and what kind.
  client: string;
  // Card text and meta description.
  summary: string;
  problem: string;
  whatIDid: string;
  result: string;
  // Public evidence: live project, source code.
  links: CaseStudyLink[];
  // Screenshots taken from the project's own README, shown on its page.
  images?: CaseStudyImage[];
  // Slugs from content/services.ts.
  services: string[];
  // Drafts render but are noindexed and left out of the sitemap.
  draft: boolean;
  // Last real content change (YYYY-MM-DD); used as the sitemap lastModified.
  updatedAt: string;
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "smart-vehicle",
    title:
      "The camera was holding up the steering. I split the system, and it placed 4th nationally.",
    seoTitle: "Smart Vehicle: YOLO robot car",
    client: "Own project · Galaksija Cup 2026",
    summary:
      "A Raspberry Pi 5 vehicle with YOLO vision and an Android control app. Separating vision from control kept it drivable, and it earned 4th place and a Special Award at the 10th Galaksija Cup.",
    problem:
      "The first prototype ran vision and motor control together. When object detection got busy, the controls had to wait. A vehicle that hesitates every time the camera thinks isn't much of a vehicle.",
    whatIDid:
      "I split camera capture, YOLO inference, video streaming and motor commands into separate multithreaded pipelines and Docker services on a Raspberry Pi 5. Then I built a native Android control station that brings live video, driving and telemetry into one screen. If the Wi-Fi drops, the vehicle brings up its own fallback hotspot.",
    result:
      "A 30 FPS camera feed with on-device detection, live video and telemetry, and 4th place plus a Special Award at the 10th Galaksija Cup National STEM Championship. The code is open source under the MIT license.",
    links: [
      { label: "Project website", href: "https://smartvehicle.dev/" },
      {
        label: "Android client source",
        href: "https://github.com/smartvehiclelab/android-client",
      },
    ],
    images: [
      {
        src: "/work/smart-vehicle-yolo.avif",
        alt: "Android control screen showing the live camera feed with YOLO detection boxes around a hand and a cup, above vision and record buttons and a driving pad",
        width: 600,
        height: 1327,
      },
      {
        src: "/work/smart-vehicle-ocr.avif",
        alt: "Android control screen showing on-device text recognition reading a command from the camera feed",
        width: 600,
        height: 1327,
      },
    ],
    services: ["mobile-app-development"],
    draft: false,
    updatedAt: "2026-10-12",
  },
  {
    slug: "ai-secretary",
    title:
      "Visitors didn't know what to ask for. Now an AI guide answers from approved facts.",
    seoTitle: "AI website assistant case study",
    client: "Own project · AI integration",
    summary:
      "A website assistant that helps visitors find the right service, answers only from curated public facts, and hands them to a real person by email.",
    problem:
      "A visitor may know what they need without knowing which service or technology to ask for. They need a way in that doesn't involve reading every page, and the answers must never be made up.",
    whatIDid:
      "I built a small chat interface and a separate TypeScript Cloudflare Worker that calls the OpenAI Responses API. The Worker validates every request, checks the allowed origin and rate limit, and answers from knowledge kept separate from visitor messages. The API key never leaves the server.",
    result:
      "A working assistant with a clear boundary: it can explain which service fits, but it can't send email, book meetings or commit me to work. Scope, timing and price are still agreed directly with me.",
    links: [],
    services: ["web-app-development"],
    draft: false,
    updatedAt: "2026-10-11",
  },
  {
    slug: "class-timetable",
    title:
      "Rotating school weeks broke ordinary timetables. One app now runs on Windows, Android and the web.",
    seoTitle: "Class Timetable: Flutter app",
    client: "Own project · Cross-platform app",
    summary:
      "A timetable app for schedules that rotate over 1 to 8 weeks, with live highlighting of the current class and JSON backup. One Flutter codebase for Windows, Android and the web.",
    problem:
      "Many schools run rotating schedules: Week A and Week B, odd and even weeks. Ordinary calendar apps assume every week looks the same, so students end up re-entering the same classes or guessing which week it is.",
    whatIDid:
      "I built the app in Flutter with Material 3. You set the rotation length and a start date, and it works out which week any date falls in. It highlights the class happening now, lets each subject have its own color, room and notes, and exports or restores the whole schedule as JSON.",
    result:
      "A working app for Windows (with an installer), Android and the web, all from one codebase. The web version is live and the code is open source under the MIT license.",
    links: [
      {
        label: "Try the web app",
        href: "https://danilostoletovic.github.io/class-timetable/",
      },
      {
        label: "Source code",
        href: "https://github.com/danilostoletovic/class-timetable",
      },
    ],
    images: [
      {
        src: "/work/class-timetable-windows.png",
        alt: "Class Timetable on Windows: weekday tabs from Monday to Friday, a date picker, a week 1 of 2 indicator and an Add Entry button",
        width: 1576,
        height: 882,
      },
      {
        src: "/work/class-timetable-web.png",
        alt: "Class Timetable running in a web browser with the same weekday tabs and rotation week indicator",
        width: 1917,
        height: 962,
      },
      {
        src: "/work/class-timetable-android.jpg",
        alt: "Class Timetable on an Android phone",
        width: 445,
        height: 869,
      },
    ],
    services: ["mobile-app-development"],
    draft: false,
    updatedAt: "2026-09-07",
  },
  {
    slug: "autodark",
    title:
      "Switching Windows between light and dark by hand is a chore. One button now does it by the sun, and nothing stays running.",
    seoTitle: "AutoDark: Windows theme switcher",
    client: "Own project · Windows app",
    summary:
      "A small Windows 11 app that uses light mode between sunrise and sunset and dark mode at night. No tray icon, no background service, no telemetry.",
    problem:
      "Automatic light and dark switching is useful, but the tools that do it usually leave a tray icon or a background process running all day for a job that takes a fraction of a second twice a day.",
    whatIDid:
      "I built AutoDark in .NET with a single ON/OFF button. It works out sunrise and sunset from Windows location or coordinates you enter, then hands the timing to Windows Task Scheduler. The app itself exits completely when you close it. Turning it OFF removes the task and restores your earlier theme settings.",
    result:
      "A Windows installer that needs no administrator rights, with no account, no telemetry and no resident process. It ships with built-in self-tests and a read-only Task Scheduler check, and the code is open source under the MIT license.",
    links: [
      {
        label: "Source code and downloads",
        href: "https://github.com/danilostoletovic/AutoDark",
      },
    ],
    services: ["web-app-development"],
    draft: false,
    updatedAt: "2026-10-08",
  },
  {
    slug: "promptui",
    title:
      "Chat gives you a wall of text, even when you need a table. PromptUI lets the AI build the right interface for each task.",
    seoTitle: "PromptUI: AI-generated interfaces",
    client: "Own project · AI integration (beta)",
    summary:
      "An experimental AI workspace where the model picks the layout for your task: text, tables, tabs, steps, charts or forms, streamed as it is generated.",
    problem:
      "A plain chat window answers everything the same way. A comparison wants a table, a plan wants steps, pasted data wants a chart, and forcing all of it into paragraphs makes the answer harder to use.",
    whatIDid:
      "I built a React front end and a Bun backend that stream interfaces from OpenAI through OpenUI. Follow-up buttons and forms send answers back to the model, broken responses can be repaired with one click, and chat history can be deleted with undo. Your API key lives only in the browser tab's memory.",
    result:
      "A working beta with eight starter tasks, mobile and desktop layouts and a limited offline demo that needs no key. It is a single-user experiment, not a finished product, and the code is open source under the MIT license.",
    links: [
      {
        label: "Try the demo",
        href: "https://danilostoletovic.github.io/PromptUI/",
      },
      {
        label: "Source code",
        href: "https://github.com/danilostoletovic/PromptUI",
      },
    ],
    services: ["web-app-development"],
    draft: false,
    updatedAt: "2026-09-26",
  },
];

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return caseStudies.find((caseStudy) => caseStudy.slug === slug);
}
