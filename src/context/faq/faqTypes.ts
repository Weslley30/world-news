export type Faq = {
  id: string;
  question: string;
  answer: string;
  updateDate: string;
};

export type FaqState = {
  faqs: Faq[];
};

export type FaqAction =
  | { type: "ADD_FAQ"; payload: Faq }
  | { type: "REMOVE_FAQ"; payload: string };