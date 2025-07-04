"use client";
import React, { useRef, useState } from "react";
import { Answer, QuestionNode } from "./types";
import { QUESTIONS } from "./data";
import { Button } from "@/components/ui/button";
import { Header } from "@/comp/Header";

// npm run dev
export default function Home() {
  const [questions, setQuestions] = useState<QuestionNode[] | Answer[]>(
    QUESTIONS
  );
  const [tabs, setTabs] = useState(false);
  // const [c, setC] = useState(0);

  const count = useRef<number>(0);

  function handleClick(questionId: string, type: string) {
    // console.log("qid", questionId);
    count.current += 1;

    if (count.current === 1) {
      recursiveQuestion(questionId);
    }

    if (type === "question") {
      const question = (questions as QuestionNode[]).find(
        (q) => q.id === questionId
      );
      if (question) {
        setQuestions(question.answers);
      }
      if (count.current >= 1) {
        setTabs(true);
      }
      return;
    }

    // if (type === "answer") {
    //   const question = (questions as Answer[]).find(
    //     (a: { id: string }) => a.id == questionId
    //   );
    //   if (question && question.answers) {
    //     console.log("ans", question);
    //   }
    //   return;
    // }
  }

  function resetQuestions() {
    count.current = 0;
    return setQuestions(QUESTIONS);
  }

  function recursiveQuestion(id: string) {
    const all = questions.filter((question) => question.id == id);
    console.log("id recursive", id, all);
    const total = recursiveIndicator(all);
    console.log(total);
  }

  function recursiveIndicator(data: any, count = 0) {
    function recursive(node: any): any {
      if (!node || typeof node !== "object") return null;

      if (Array.isArray(node)) {
        for (const item of node) {
          const result = recursive(item);
          if (result) return result;
        }
      } else {
        count++;

        if (node.isFinal) {
          return { finalNode: node, count }; // final node finded
        }

        if (node.answers) {
          const result = recursive(node.answers);
          if (result) return result;
        }
      }

      return null;
    }

    const result = recursive(data);
    return result || { finalNode: null, count };
  }

  return (
    <>
      <Header resetQuestions={resetQuestions} />
      <section className="px-10 mt-4 ">
        {count.current >= 1 && tabs && <p className="mb-5">show tabs</p>}
        <ul className="max-w-[500px] mx-auto flex flex-col gap-5">
          {Array.isArray(questions) &&
            questions.every((item) => "isFinal" in item || "message" in item) &&
            (questions as Answer[]).map((a: any) => (
              <li key={a.id}>
                {a.message && (
                  <p className="mb-5">
                    <span className="mr-2">🗣</span>
                    {a.message}
                  </p>
                )}
                {a.isFinal && (
                  <div>
                    <p className="mb-5">
                      <span className="mr-2 ">🔚</span> Fin de pregunta
                    </p>
                    <p>
                      {" "}
                      <span className="mr-2">📄</span>
                      {a.question}
                    </p>
                  </div>
                )}
                {a.farewell && (
                  <p className="mt-5">
                    <span className="mr-2">✔</span>
                    {a.farewell}
                  </p>
                )}
                {a.isFinal && (
                  <div className="mt-5 grid place-items-center">
                    <Button
                      size="sm"
                      className="mt-5 border rounded-md py-2 px-6 text-neutral-50 bg-indigo-500 hover:bg-indigo-600"
                      onClick={resetQuestions}
                    >
                      <span className="mr-2 ">🏠</span>
                      Regresar Inicio
                    </Button>
                  </div>
                )}
              </li>
            ))}

          {Array.isArray(questions) &&
            questions.every(
              (item) => "answers" in item && "question" in item
            ) &&
            (questions as QuestionNode[]).map((data: any) => (
              <li key={data.id}>
                <button
                  className="text-start"
                  onClick={() => handleClick(data.id, "question")}
                >
                  <span className="mr-2 ">👉</span> {data.question}
                </button>
                {data?.examples && (
                  <div
                    className="_prose mt-4 examples-container"
                    dangerouslySetInnerHTML={{ __html: data.examples }}
                  ></div>
                )}
              </li>
            ))}
        </ul>
      </section>
    </>
  );
}
