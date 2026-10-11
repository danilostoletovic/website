export type CaseStudyLink = {
  label: string;
  href: string;
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
    seoTitle: "Smart Vehicle: Android-controlled robot car case study",
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
    services: ["mobile-app-development"],
    draft: false,
    updatedAt: "2026-10-11",
  },
  {
    slug: "ai-secretary",
    title:
      "Visitors didn't know what to ask for. Now an AI guide answers from approved facts.",
    seoTitle: "AI website assistant integration case study",
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
];

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return caseStudies.find((caseStudy) => caseStudy.slug === slug);
}
