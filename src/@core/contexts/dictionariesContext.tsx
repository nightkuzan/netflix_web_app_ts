"use client";

import { useParams } from "next/navigation";
import { createContext, useContext, ReactNode } from "react";

export interface TextDictionary {
  welcome?: string;
  login?: string;
  signup?: string;
  email?: string;
  password?: string;
  forgot_password?: string;
  remember_me?: string;
  submit?: string;
  cancel?: string;
  home?: string;
  search?: string;
  my_list?: string;
  settings?: string;
  logout?: string;
  tv_shows?: string;
  movies?: string;
  categories?: string;
  new_and_popular?: string;
  browse_by_languages?: string;
  kids?: string;
  play?: string;
  more_info?: string;
  info?: string;
  top_1_shows?: string;
  devil_in_ohio_description?: string;
  tv_mysteries?: string;
  based_on_books?: string;
  back?: string;
  error_404?: string;
  page_not_found?: string;
  page_not_found_desc?: string;
  back_to_home?: string;
  popular_on_netflix?: string;
  continue_watching?: string;
  new_releases?: string;
  error?: string;
  unable_to_load?: string;
  try_again_later?: string;
  [key: string]: string | undefined;
}

export interface Dictionaries {
  text?: TextDictionary;
  locale?: string;
  [key: string]: unknown;
}

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
