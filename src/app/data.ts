import { QuestionNode } from "./types";

const addtional = [
  {
    type: "l1",
    message:
      "En el Formato Repartidor en la columna del cliente en el apartado de Notas indicarle cuantos cambios va a hacerle al cliente y escribirle una breve descripcion de lo platicado con el cliente. Agregar estos cambios en el borrador para contemplarlos con los pedidos de la ruta.",
  },
  {
    type: "l4",
    message:
      "Indicarle al repartidor que tiene que etiquetarle las bebidas al respectivo cliente. (Indicarle que recoja las bebidas al cliente y sutilmente etiquete las bebidas en la cabinatrasera del auto)",
  },
  {
    type: "greet",
    message:
      "Muchas gracias por su comprendimiento, le enviaremos al repartidor para realizarle la revision y los cambios necesarios . Estamos al pendientede cualquier comentario.",
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
        question: "¿Cuantas son las bebidas que no tienen gas?",
        answers: [
          {
            id: "q-01-a2",
            message: "Esperar respuesta cliente",
            question:
              "Probablemente es que sea un problema con la boquilla, si gusta separar las bebidas para que no las venda, le enviaremos al repartidor para que les revise las bebidas y selas cambie.",
            answers: [
              {
                id: "1-01-a2-a1",
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
    id: "q-02",
    question: "question-02",
    type: "question",
    answers: [
      {
        id: "q-02-a2",
        isFinal: true,
        question: "q-02-a2-text",
      },
    ],
  },
]