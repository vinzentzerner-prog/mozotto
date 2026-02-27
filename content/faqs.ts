export interface FAQ {
  id: string;
  questionKey: string;
  answerKey: string;
}

export const faqs: FAQ[] = [
  { id: "setup", questionKey: "faq_setup_q", answerKey: "faq_setup_a" },
  { id: "guests", questionKey: "faq_guests_q", answerKey: "faq_guests_a" },
  { id: "timing", questionKey: "faq_timing_q", answerKey: "faq_timing_a" },
  { id: "travel", questionKey: "faq_travel_q", answerKey: "faq_travel_a" },
  { id: "requirements", questionKey: "faq_requirements_q", answerKey: "faq_requirements_a" },
  { id: "deposit", questionKey: "faq_deposit_q", answerKey: "faq_deposit_a" },
];
