"use client";
import { useDictionaries } from "@core/contexts/dictionariesContext";

const test = () => {
  const dict = useDictionaries();
  return (
    <div>
      {dict.text.welcome}
      <h1> test</h1>
      <p>This is a test page.</p>
    </div>
  );
};

export default test;
