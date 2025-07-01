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
    question: "Bebida sin gas o aguada.",
    type: "question",
    answers: [
      {
        id: "q-01-a1",
        question: "¿Cuántas son las bebidas que no tienen gas?",
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
                farewell: additional[additional.length - 1].message,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "q-02",
    question: "Bebida con algun sedimento o particuladentro de ella.",
    type: "question",
    answers: [
      {
        id: "q-02-a1",
        question:
          "¿Cuántas bebidas son las que tienen algún sedimento o particula en la bebida?",
        answers: [
          {
            id: "q-02-a2",
            message: "Esperar respuesta del cliente",
            question:
              "Probablemente es que haya pasado algun inconveniente en producción no nos habia tocado, si gusta separar las bebidaspara que no las venda y le enviaremos al repartidor para quele revise las bebidas y se las cambie.",
            answers: [
              {
                id: "q-02-a3",
                isFinal: true,
                question: additional[0].message,
                farewell: additional[additional.length - 1].message,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "q-03",
    question: "Bebidas con defectos fisicos.",
    type: "question",
    examples: `
    <details style='margin-left:2.2rem'>
      <summary> <span style='margin-right:0.5rem'>⏬</span> Ejemplos </summary>
     <ul>
        <li>Tapa violable.</li>
        <li>Botella con manchas blancas o grises.</li>
        <li>Bultos (Parte de abajo) chuecos o malformados.</li>
        <li>Boquilla chueca.</li>
        <li>Botella con mal soplado por dentro de labotella.</li>
        <li>Deforme.</li>
      </ul>
    </details>
    `,
    answers: [
      {
        id: "q-03-a1",
        question:
          "¿Cuántas bebidas son las que tienen algún defecto fisico en la bebida?",
        answers: [
          {
            id: "q-03-a2",
            message: "Esperar respuesta del cliente",
            question:
              "Probablemente sea algun problema con las botellas, si gusta separarnos las bebidas para que no las venda y le enviamos al repartidor para que les revise las bebidas y se las cambie.",
            answers: [
              {
                id: "q-03-a3",
                isFinal: true,
                question: additional[0].message,
                farewell: additional[additional.length - 1].message,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "q-04",
    question: "Bebida incompleta (falta de liquido).",
    type: "question",
    answers: [
      {
        id: "q-04-a1",
        question: "¿Cuántas bebidas estan incompletas?",
        answers: [
          {
            id: "q-04-a2",
            message: "Esperar respuesta del cliente",
            question:
              "Probablemente es que haya habido algún inconveniente con la maquina llenadora o pudiera ser la botella tambien que este tirando un poco, si puede separanos las bebidas y no las venda. De igual manera le enviamos al repartidor para que le revise las bebidas y se las cambie.",
            answers: [
              {
                id: "q-04-a3",
                isFinal: true,
                question: additional[0].message,
                farewell: additional[additional.length - 1].message,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "q-05",
    question: "Bebida explotada.",
    type: "question",
    answers: [
      {
        id: "q-05-a1",
        question: "¿Cuántas bebidas han explotado?",
        answers: [
          {
            id: "q-05-a2",
            message: "Esperar respuesta del cliente",
            question:
              "Probablemente es que sea un problema con la botella, si gusta separar las bebidas para que no las venda. Le enviaremos al repartidor para que les revise las bebidas y las cambie.",
            answers: [
              {
                id: "q-05-a3",
                isFinal: true,
                question: additional[0].message,
                farewell: additional[additional.length - 1].message,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "q-06",
    question: "Bebida sin etiqueta.",
    type: "question",
    answers: [
      {
        id: "q-06-a1",
        question: "¿Cuantas piezas son las que tiene sin etiqueta?",
        answers: [
          {
            id: "q-06-a2",
            message: "Esperar respuesta del cliente",
            question:
              "Probablemente es que se le haya pasado a la etiquetadora si puede separarnos las bebidas que no tienen etiqueta para queno las venda y le enviamos al repartidor para que se las reponga.",
            answers: [
              {
                id: "q-06-a3",
                isFinal: true,
                question: additional[1].message,
                farewell: additional[additional.length - 1].message,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "q-0x",
    question: "Pregunta 0x",
    type: "question",
    answers: [
      {
        id: "q-0x-ax",
        isFinal: true,
        question: "Texto de q-0x-ax",
      },
    ],
  },
];
