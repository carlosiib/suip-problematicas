import { QuestionNode } from "./types";

const additional = [
  {
    type: "l1",
    message:
      "En el formato Repartidor, en la columna del cliente, en el apartado de Notas, indíquele cuántos cambios va a hacerle al cliente y escriba una breve descripción de lo platicado con él. Agregue estos cambios en el borrador para contemplarlos con los pedidos de la ruta.",
  },
  {
    type: "l4",
    message:
      "Indíquele al repartidor que debe etiquetar las bebidas del respectivo cliente. (Indíquele que recoja las bebidas del cliente y que, de manera sutil, las etiquete en la cabina trasera del auto).",
  },
  {
    type: "greet",
    message:
      "Muchas gracias por su comprensión. Le enviaremos al repartidor para realizar la revisión y los cambios necesarios. Estamos al pendiente de cualquier comentario.",
  },
];

export const QUESTIONS: QuestionNode[] = [
  {
    id: "q-01",
    question: "Bebida sin gas o aguada",
    type: "question",
    answers: [
      {
        id: "q-01-a1",
        question:
          "¿Cuántas son las bebidas que no tienen gas?",
        answers: [
          {
            id: "q-01-a2",
            message: "Esperar respuesta del cliente",
            question:
              "Probablemente sea un problema con la boquilla. Si gusta separar las bebidas para que no las venda, le enviaremos al repartidor para que las revise y se las cambie.",
            answers: [
              {
                id: "1-01-a2-a1",
                isFinal: true,
                question: additional[0].message,
                farewell:
                  additional[additional.length - 1].message,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "q-02",
    question: "Pregunta 02",
    type: "question",
    answers: [
      {
        id: "q-02-a2",
        isFinal: true,
        question: "Texto de q-02-a2",
      },
    ],
  },
];
