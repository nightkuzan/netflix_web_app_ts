"use client";

import { useParams } from "next/navigation";
import { createContext, useContext, ReactNode } from "react";

export type Dictionaries = Record<string, any>;

const DictionariesContext = createContext<Dictionaries | null>(null);

interface DictionariesProviderProps {
  dictionaries: Dictionaries;
  children: ReactNode;
}

export default function DictionariesProvider({
  dictionaries,
  children,
}: DictionariesProviderProps) {
  return (
    <DictionariesContext.Provider value={dictionaries}>
      {children}
    </DictionariesContext.Provider>
  );
}

export function useDictionaries(): Dictionaries {
  const context = useContext(DictionariesContext);
  const params = useParams();
  const locale = params.lang;

  if (!context) {
    throw new Error(
      "useDictionaries must be used within a DictionariesProvider"
    );
  }

  context.locale = locale;
  return context;
}
