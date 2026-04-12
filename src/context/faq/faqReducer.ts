import { FaqState, FaqAction } from "./faqTypes";

export const initialState: FaqState = {
  faqs: [],
};

export function faqReducer(
  state: FaqState,
  action: FaqAction
): FaqState {
  switch (action.type) {
    case "ADD_FAQ":
      return {
        ...state,
        faqs: [...state.faqs, action.payload],
      };

    case "REMOVE_FAQ":
      return {
        ...state,
        faqs: state.faqs.filter((f) => f.id !== action.payload),
      };

    default:
      return state;
  }
}