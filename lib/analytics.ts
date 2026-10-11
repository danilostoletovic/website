export const analyticsEvents = {
  contactClick: "contact_clicked",
  ctaClick: "cta_clicked",
  caseStudyView: "case_study_viewed",
} as const;

export type AnalyticsEvent = (typeof analyticsEvents)[keyof typeof analyticsEvents];
