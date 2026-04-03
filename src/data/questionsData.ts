export type TaskType = "click" | "drag-and-drop";

export interface Option {
  id: string;
  imageSrc: string;
  label?: string;
}

export interface Category {
  id: string;
  title: string;
}

export interface DragItem {
  id: string;
  imageSrc: string;
  correctCategoryId: string;
}

export interface BaseTask {
  id: string;
  type: TaskType;
  instruction: string;
  block: number;
  blockTitle?: string;
}

export interface ClickTask extends BaseTask {
  type: "click";
  options: Option[];
  correctOptionId: string;
}

export interface DragAndDropTask extends BaseTask {
  type: "drag-and-drop";
  categories: Category[];
  items: DragItem[];
}

export type QuestionTask = ClickTask | DragAndDropTask;

export function isClickTask(task: QuestionTask): task is ClickTask {
  return task.type === "click";
}

export function isDragAndDropTask(task: QuestionTask): task is DragAndDropTask {
  return task.type === "drag-and-drop";
}

/** Алиас для совместимости с QuizRunner */
export const isDragTask = isDragAndDropTask;

export const questions: QuestionTask[] = [
  // Блок 1. Уменьшительно-ласкательные (импрессивная)
  {
    id: "1-1",
    block: 1,
    blockTitle: "Обследование уменьшительно-ласкательных форм (в импрессивной речи)",
    type: "click",
    instruction:
      "Нажми на ту картинку, на которой изображен стульчик.",
    options: [
      { id: "opt1", imageSrc: "/images/1-1-chair.jpg" },
      { id: "opt2", imageSrc: "/images/1-1-chair-small.jpg" },
    ],
    correctOptionId: "opt2",
  },
  {
    id: "1-2",
    block: 1,
    type: "click",
    instruction:
      "Нажми на ту картинку, на которой изображен домик.",
    options: [
      { id: "opt1", imageSrc: "/images/1-2-house.jpg" },
      { id: "opt2", imageSrc: "/images/1-2-house-small.jpg" },
    ],
    correctOptionId: "opt2",
  },
  {
    id: "1-3",
    block: 1,
    type: "click",
    instruction:
      "Нажми на ту картинку, на которой изображен мячик.",
    options: [
      { id: "opt1", imageSrc: "/images/1-3-ball.jpg" },
      { id: "opt2", imageSrc: "/images/1-3-ball-small.jpg" },
    ],
    correctOptionId: "opt2",
  },

  // Блок 2. Уменьшительно-ласкательные (экспрессивная)
  {
    id: "2-1",
    block: 2,
    blockTitle: "Обследование уменьшительно-ласкательных форм (в экспрессивной речи)",
    type: "click",
    instruction:
      "Если на первой картинке машина, то как назвать то, что изображено на второй картинке? Нажми на ту картинку, на которой предмет называется «по-маленькому».",
    options: [
      { id: "opt1", imageSrc: "/images/2-1-car.jpg" },
      { id: "opt2", imageSrc: "/images/2-1-car-small.jpg" },
    ],
    correctOptionId: "opt2",
  },
  {
    id: "2-2",
    block: 2,
    type: "click",
    instruction:
      "Если на первой картинке платье, то как назвать то, что изображено на второй картинке? Нажми на ту картинку, на которой предмет называется «по-маленькому».",
    options: [
      { id: "opt1", imageSrc: "/images/2-2-dress.jpg" },
      { id: "opt2", imageSrc: "/images/2-2-dress-small.jpg" },
    ],
    correctOptionId: "opt2",
  },
  {
    id: "2-3",
    block: 2,
    type: "click",
    instruction:
      "Если на первой картинке сумка, то как назвать то, что изображено на второй картинке? Нажми на ту картинку, на которой предмет называется «по-маленькому».",
    options: [
      { id: "opt1", imageSrc: "/images/2-3-bag.png" },
      { id: "opt2", imageSrc: "/images/2-3-bag-small.png" },
    ],
    correctOptionId: "opt2",
  },

  // Блок 3. Детеныши животных
  {
    id: "3-1",
    block: 3,
    blockTitle: "Обследование словообразовательных форм детёнышей животных (в импрессивной и экспрессивной речи)",
    type: "click",
    instruction:
      "Где утка, утенок и утята? Нажми на картинку с утятами.",
    options: [
      { id: "opt1", imageSrc: "/images/3-1-duck.png" },
      { id: "opt2", imageSrc: "/images/3-1-duckling.png" },
      { id: "opt3", imageSrc: "/images/3-1-ducklings.png" },
    ],
    correctOptionId: "opt3",
  },
  {
    id: "3-2",
    block: 3,
    type: "click",
    instruction:
      "Если на первой картинке мама-лиса, то как назвать того, кто изображен на второй картинке? Нажми на ту картинку, на которой изображен детёныш животного.",
    options: [
      { id: "opt1", imageSrc: "/images/3-2-fox-mom.png" },
      { id: "opt2", imageSrc: "/images/3-2-fox-cub.png" },
    ],
    correctOptionId: "opt2",
  },
  {
    id: "3-3",
    block: 3,
    type: "click",
    instruction:
      "Если на картинке мама-медведица, то как назвать того, кто изображен на второй картинке? Нажми на ту картинку, на которой изображен детёныш животного.",
    options: [
      { id: "opt1", imageSrc: "/images/3-3-bear-mom.png" },
      { id: "opt2", imageSrc: "/images/3-3-bear-cub.png" },
    ],
    correctOptionId: "opt2",
  },

  // Блок 4. Вместилища
  {
    id: "4-1",
    block: 4,
    blockTitle: "Обследование словообразовательных форм вместилищ предметов.(в экспрессивной речи)",
    type: "click",
    instruction: "Если хлеб хранится в хлебнице, то как назвать то, в чем хранится сахар? Нажми на ту картинку, на которой изображена посуда для хранения сахара.",
    options: [
      { id: "4-1-correct", imageSrc: "/images/4-1-sugar-bowl.png" },
      { id: "4-1-wrong", imageSrc: "/images/4-1-wrong-1.png" },
    ],
    correctOptionId: "4-1-correct",
  },
  {
    id: "4-2",
    block: 4,
    type: "click",
    instruction: "Назови и нажми на ту картинку, на которой изображено то, в чем хранится масло.",
    options: [
      { id: "4-2-correct", imageSrc: "/images/4-2-butter-dish.png" },
      { id: "4-2-wrong", imageSrc: "/images/4-2-wrong-1.png" },
    ],
    correctOptionId: "4-2-correct",
  },
  {
    id: "4-3",
    block: 4,
    type: "click",
    instruction: "Назови и нажми на ту картинку, на которой изображено то, в чем хранится соль.",
    options: [
      { id: "4-3-correct", imageSrc: "/images/4-3-salt-shaker.png" },
      { id: "4-3-wrong", imageSrc: "/images/4-3-wrong-1.png" },
    ],
    correctOptionId: "4-3-correct",
  },

  // Блок 5. Единичность
  {
    id: "5-1",
    block: 5,
    blockTitle: "5. Обследование словообразовательных форм единичности предметов (в импрессивной и экспрессивной речи)",
    type: "click",
    instruction:
      "Покажи, где бусы, а где одна бусинка. Нажми на ту картинку, на которой изображена часть предмета..",
    options: [
      { id: "opt1", imageSrc: "/images/5-1-beads.png" },
      { id: "opt2", imageSrc: "/images/5-1-bead-single.png" },
    ],
    correctOptionId: "opt2",
  },
  {
    id: "5-2",
    block: 5,
    type: "click",
    instruction: "Как называется то, из чего состоит снег? Нажми на ту картинку, на которой изображена частичка.  ",
    options: [
      { id: "opt1", imageSrc: "/images/5-2-snow.png" },
      { id: "opt2", imageSrc: "/images/5-2-snowflake.png" },
    ],
    correctOptionId: "opt2",
  },
  {
    id: "5-3",
    block: 5,
    type: "click",
    instruction: "Назови и нажми на ту картинку, на которой изображена частичка.",
    options: [
      { id: "opt1", imageSrc: "/images/5-3-pea-pod.png" },
      { id: "opt2", imageSrc: "/images/5-3-pea-single.png" },
    ],
    correctOptionId: "opt2",
  },

  // Блок 6. Деятельность
  {
    id: "6-1",
    block: 6,
    blockTitle: "Обследование словообразовательных форм рода деятельности (в экспрессивной речи)",
    type: "click",
    instruction:
      "Нажми на ту картинку, на которой изображен велосипедист.",
    options: [
      { id: "opt1", imageSrc: "/images/6-1-bicycle.png" },
      { id: "opt2", imageSrc: "/images/6-1-cyclist.png" },
    ],
    correctOptionId: "opt2",
  },
  {
    id: "6-2",
    block: 6,
    type: "click",
    instruction:
      "Если человека, который играет на пианино, называют пианистом, то как называют человека, который играет на гитаре? Нажми на ту картинку, на которой изображена гитара.",
    options: [
      { id: "opt1", imageSrc: "/images/6-2-guitar.png" },
      { id: "opt2", imageSrc: "/images/6-2-guitarist.png" },
    ],
    correctOptionId: "opt2",
  },
  {
    id: "6-3",
    block: 6,
    type: "click",
    instruction:
      "Если человека, который катается на коне, называют конником, то как называют человека, который катается на лыжах? Нажми на ту картинку, на которой изображен человек, который катается на лыжах.",
    options: [
      { id: "opt1", imageSrc: "/images/6-3-skis.png" },
      { id: "opt2", imageSrc: "/images/6-3-skier.png" },
    ],
    correctOptionId: "opt2",
  },

  // Блок 7. Мужской и женский род
  {
    id: "7-1",
    block: 7,
    blockTitle: "Обследование словообразовательных форм женского и мужского рода животных.",
    type: "drag-and-drop",
    instruction:
      "Перетащи и называй картинки: в первый столбик — животных мужского рода (медведь), а во второй — животных женского рода (медведица). ",
    categories: [
      { id: "male", title: "Мужской род" },
      { id: "female", title: "Женский род" },
    ],
    items: [
      {
        id: "item1",
        imageSrc: "/images/7-1-bear-m.png",
        correctCategoryId: "male",
      },
      {
        id: "item2",
        imageSrc: "/images/7-1-bear-f.png",
        correctCategoryId: "female",
      },
      {
        id: "item3",
        imageSrc: "/images/7-1-lion-m.png",
        correctCategoryId: "male",
      },
      {
        id: "item4",
        imageSrc: "/images/7-1-lion-f.png",
        correctCategoryId: "female",
      },
    ],
  },

  // Блок 8. Глаголы (противоположные)
  {
    id: "8-1",
    block: 8,
    blockTitle: "Обследование словообразования глаголов противоположного действия (в импрессивной и экспрессивной речи)",
    type: "click",
    instruction: "На картинках человек наливает воду в стакан и выливает воду из стакана. Нажми на ту картинку, где наливают воду.",
    options: [
      { id: "opt1", imageSrc: "/images/8-1-pour-in.jpg" },
      { id: "opt2", imageSrc: "/images/8-1-pour-out.jpg" },
    ],
    correctOptionId: "opt1",
  },
  {
    id: "8-2",
    block: 8,
    type: "click",
    instruction:
      "На картинках человек открыл и закрыл дверь. Нажми на ту картинку, где человек закрыл дверь.",
    options: [
      { id: "opt1", imageSrc: "/images/8-2-door-open.jpg" },
      { id: "opt2", imageSrc: "/images/8-2-door-closed.jpg" },
    ],
    correctOptionId: "opt2",
  },

  // Блок 9. Глаголы (вид)
  {
    id: "9-1",
    block: 9,
    blockTitle: "Обследование словообразования глаголов совершенного и несовершенного вида (в импрессивной и экспрессивной речи)",
    type: "click",
    instruction: "На картинках человек рисует и уже нарисовал. Нажми на ту картинку, где человек рисует.",
    options: [
      { id: "opt1", imageSrc: "/images/9-1-drawing.png" },
      { id: "opt2", imageSrc: "/images/9-1-drawn.png" },
    ],
    correctOptionId: "opt1",
  },
  {
    id: "9-2",
    block: 9,
    type: "click",
    instruction:
      "На картинках человек готовит и уже приготовил еду. Назови и нажми на ту картинку, где человек приготовил еду.",
    options: [
      { id: "opt1", imageSrc: "/images/9-2-cooking.jpg" },
      { id: "opt2", imageSrc: "/images/9-2-cooked.jpg" },
    ],
    correctOptionId: "opt2",
  },
  {
    id: "9-3",
    block: 9,
    type: "click",
    instruction: "На картинках человек строит и уже построил дом. Назови и нажми на ту картинку, где человек строит дом.",
    options: [
      { id: "opt1", imageSrc: "/images/9-3-building.png" },
      { id: "opt2", imageSrc: "/images/9-3-built.png" },
    ],
    correctOptionId: "opt1",
  },

  // Блок 10. Возвратные глаголы
  {
    id: "10-1",
    block: 10,
    blockTitle: "Обследование словообразования возвратных глаголов (в импрессивной и экспрессивной речи)",
    type: "click",
    instruction:
      "На картинках девушка расчесывает чужие волосы и расчесывается сама. Нажми на ту картинку, где девушка расчесывает волосы.",
    options: [
      { id: "opt1", imageSrc: "/images/10-1-comb-other.jpg" },
      { id: "opt2", imageSrc: "/images/10-1-comb-self.jpg" },
    ],
    correctOptionId: "opt1",
  },
  {
    id: "10-2",
    block: 10,
    type: "click",
    instruction:
      "На картинках девушка одевает девочку и одевается сама. Назови и нажми на ту картинку, где девушка одевается.",
    options: [
      { id: "opt1", imageSrc: "/images/10-2-dress-other.jpg" },
      { id: "opt2", imageSrc: "/images/10-2-dress-self.jpg" },
    ],
    correctOptionId: "opt2",
  },
  {
    id: "10-3",
    block: 10,
    type: "click",
    instruction:
      "На картинках девушка учит других и учится сама. Назови и нажмина ту картинку, где девушка учится.",
    options: [
      { id: "opt1", imageSrc: "/images/10-3-teach-other.jpg" },
      { id: "opt2", imageSrc: "/images/10-3-learn-self.jpg" },
    ],
    correctOptionId: "opt2",
  },

  // Блок 11. Прилагательные
  {
    id: "11-1",
    block: 11,
    blockTitle: "Обследование словообразования прилагательных (в импрессивной и экспрессивной речи)",
    type: "drag-and-drop",
    instruction:
      "На картинках изображены предметы, и то, что сделано из этих предметов. Назови и перетащи картинки: в первый столбик – предмет, и во второй – то, из чего сделано. Например: дерево – деревянный стол.",
    categories: [
      { id: "material", title: "Материал" },
      { id: "product", title: "Изделие" },
    ],
    items: [
      {
        id: "item1",
        imageSrc: "/images/11-1-wood.jpg",
        correctCategoryId: "material",
      },
      {
        id: "item2",
        imageSrc: "/images/11-1-table-wooden.jpg",
        correctCategoryId: "product",
      },
      {
        id: "item3",
        imageSrc: "/images/11-1-ice.jpg",
        correctCategoryId: "material",
      },
      {
        id: "item4",
        imageSrc: "/images/11-1-castle-ice.jpg",
        correctCategoryId: "product",
      },
    ],
  },
];

/** 30 шагов × 1 балл за верный ответ */
export const MAX_SCORE = questions.length;
