"use client";

import { createContext, useContext, useReducer } from "react";
import { faqReducer, initialState } from "./faqReducer";
import { Faq } from "./faqTypes";

type FaqContextType = {
  state: {
    faqs: Faq[];
  };
  // eslint-disable-next-line no-unused-vars
  addFaq: (faq: Faq) => void;
  // eslint-disable-next-line no-unused-vars
  removeFaq: (id: string) => void;
};

const FaqContext = createContext<FaqContextType | null>(null);

export function FaqProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(faqReducer, initialState);

  function addFaq(faq: Faq) {
    dispatch({ type: "ADD_FAQ", payload: faq });
  }

  function removeFaq(id: string) {
    dispatch({ type: "REMOVE_FAQ", payload: id });
  }

  return (
    <FaqContext.Provider value={{ state, addFaq, removeFaq }}>
      {children}
    </FaqContext.Provider>
  );
}

export function useFaq() {
  const context = useContext(FaqContext);
  if (!context) throw new Error("useFaq precisa estar dentro do Provider");
  return context;
}
