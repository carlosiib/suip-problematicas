'use client'
import React, { useState } from 'react';

const addtional = [
  {
    type: 'l1',
    message:
      'En el Formato Repartidor en la columna del cliente en el apartado de Notas indicarle cuantos cambios va a hacerle al cliente y escribirle una breve descripcion de lo platicado con el cliente. Agregar estos cambios en el borrador para contemplarlos con los pedidos de la ruta.',
  },
  {
    type: 'l4',
    message:
      'Indicarle al repartidor que tiene que etiquetarle las bebidas al respectivo cliente. (Indicarle que recoja las bebidas al cliente y sutilmente etiquete las bebidas en la cabinatrasera del auto)',
  },
  {
    type: 'greet',
    message:
      'Muchas gracias por su comprendimiento, le enviaremos al repartidor para realizarle la revision y los cambios necesarios . Estamos al pendientede cualquier comentario.',
  },
];

const q = [
  {
    id: 'q-01',
    question: 'Bebida sin gas o aguada',
    type: 'question',
    answers: [
      {
        id: 'q-01-a1',
        question: '¿Cuantas son las bebidas que no tienen gas?',
        answers: [
          {
            id: 'q-01-a2',
            message: 'Esperar respuesta cliente',
            question:
              'Probablemente es que sea un problema con la boquilla, si gusta separar las bebidas para que no las venda, le enviaremos al repartidor para que les revise las bebidas y selas cambie.',
            answers: [
              {
                id: '1-01-a2-a1',
                isFinal: true,
                question: addtional[0].message,
                farewell: addtional[addtional.length - 1].message,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'q-02',
    question: 'question-02',
    type: 'question',
    answers: [
      {
        id: 'q-02-a2',
        isFinal: true,
        question: 'q-02-a2-text',
      },
    ],
  },
];

// npm run dev
export default function Home() {
  const [questions, setQuestions] = useState(q);

   function handleClick(questionId: string, type: string) {
    console.log('qid', questionId);

    if (type === 'question') {
      const updated = questions.find((q) => q.id === questionId);
      setQuestions(updated);
      return;
    }

    if (type === 'answer') {
      const answers = questions?.answers.find((a) => a.id == questionId);
      console.log('asnw', answers);
      setQuestions(answers);
      return;
    }

    console.log('all', questions);
  }

  return (
    <div>
            <header>
        <nav>
          <ul className="flex flex-wrap justify-between px-10 py-2 border black b-y">
            <li className="font-bold">Problematicas</li>
            <li>
              <button onClick={() => setQuestions(q)}>Incio</button>
            </li>
          </ul>
        </nav>
      </header>
       <section className="px-10 mt-4">
        <ul className="max-w-[500px] mx-auto flex flex-col gap-2">
          {!questions.answers &&
            questions?.map((data: any) => (
              <li key={data.id}>
                <button onClick={() => handleClick(data.id, 'question')}>
                  <span className="mr-2 ">👉</span> {data.question}
                </button>
              </li>
            ))}
          {questions.answers &&
            questions?.answers?.map((a: any) => (
              <li key={a.id}>
                {a.message && (
                  <p className="mb-5">
                    <span className="mr-2 ">🗣</span>
                    {a.message}
                  </p>
                )}
                {!a.isFinal ? (
                  <p onClick={() => handleClick(a.id, 'answer')}>
                    <span className="mr-2 ">❓</span>
                    {a.question}
                  </p>
                ) : (
                  <div>
                    {a.isFinal && (
                      <p className="mb-5">
                        <span className="mr-2 ">🔚</span> Fin de pregunta
                      </p>
                    )}

                    <p>{a.question}</p>
                  </div>
                )}

                {a.farewell && <p className="mt-5">{a.farewell}</p>}
                {a.isFinal && (
                  <div className="mt-5 grid place-items-center ">
                    <button
                      className="mt-5 border rounded-md py-2 px-6  text-neutral-50 bg-indigo-500 hover:bg-indigo-600"
                      onClick={() => setQuestions(q)}
                    >
                      <span className="mr-2 ">🏠</span>
                      Regresar Inicio
                    </button>
                  </div>
                )}
              </li>
            ))}
        </ul>
      </section>
    </div>
  );
}
