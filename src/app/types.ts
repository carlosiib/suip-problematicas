export type Answer = {
  id: string;
  question?: string;
  message?: string;
  isFinal?: boolean;
  farewell?: string;
  answers?: Answer[];
};

export type QuestionNode = {
  id: string;
  question: string;
  type: "question";
  examples?: string;
  answers: Answer[];
};
