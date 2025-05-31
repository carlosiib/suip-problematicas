"use client";
import React, { useState } from "react";
import { Answer, QuestionNode } from "./types";
import { QUESTIONS } from "./data";

// npm run dev
export default function Home() {
  const [questions, setQuestions] = useState<QuestionNode[] | Answer[]>(
    QUESTIONS
  );

  function handleClick(questionId: string, type: string) {
    console.log("qid", questionId);

    if (type === "question") {
      const question = (questions as QuestionNode[]).find(
        (q) => q.id === questionId
      );
      if (question) {
        setQuestions(question.answers);
        return;
      }
    }

    if (type === "answer") {
      const question = (questions as Answer[]).find(
        (a: { id: string }) => a.id == questionId
      );
      if (question && question.answers) {
        console.log("ans", question);
      }
      return;
    }

    console.log("all", questions);
  }

  return (
    <div>
      <header>
        <nav>
          <ul className="flex flex-wrap justify-between px-10 py-2 border black b-y">
            <li className="font-bold">Problematicas</li>
            <li>
              <button onClick={() => setQuestions(QUESTIONS)}>Incio</button>
            </li>
          </ul>
        </nav>
      </header>
      <section className="px-10 mt-4">
        <ul className="max-w-[500px] mx-auto flex flex-col gap-2">
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
                    <p>{a.question}</p>
                  </div>
                )}
                {a.farewell && <p className="mt-5">{a.farewell}</p>}
                {a.isFinal && (
                  <div className="mt-5 grid place-items-center">
                    <button
                      className="mt-5 border rounded-md py-2 px-6 text-neutral-50 bg-indigo-500 hover:bg-indigo-600"
                      onClick={() => setQuestions(QUESTIONS)}
                    >
                      <span className="mr-2 ">🏠</span>
                      Regresar Inicio
                    </button>
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
                <button onClick={() => handleClick(data.id, "question")}>
                  <span className="mr-2 ">👉</span> {data.question}
                </button>
              </li>
            ))}
        </ul>
      </section>
    </div>
  );
}
