"use client";

import Link from "next/link";
import {
  useDictionaries,
  TextDictionary,
} from "@core/contexts/dictionariesContext";

import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const NotFound = (): React.ReactElement => {
  const dictionaries = useDictionaries();
  const text: TextDictionary = dictionaries.text || {};

  return (
    <div className="flex items-center justify-center min-bs-[100dvh] relative p-6 overflow-x-hidden">
      <div className="flex items-center flex-col text-center">
        <div className="flex flex-col gap-2 is-[90vw] sm:is-[unset] mbe-6">
          <Typography className="font-medium text-8xl" color="text.primary">
            {text.error_404}
          </Typography>
          <Typography variant="h4">{text.page_not_found}</Typography>
          <Typography className="pt-2">{text.page_not_found_desc}</Typography>
        </div>
        <Button href="/" component={Link} variant="contained">
          {text.back_to_home}
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
