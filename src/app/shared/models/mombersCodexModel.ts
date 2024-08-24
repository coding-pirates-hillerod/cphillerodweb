type HandbookSubsection = {
  title: string;
  text: string;
  id: string;
};

export type HandbookSection = {
  title: string;
  id: string;
  subsections: HandbookSubsection[];
};
