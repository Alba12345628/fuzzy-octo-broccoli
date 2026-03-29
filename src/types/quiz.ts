/**
 * Единый источник типов заданий — модуль конфигурации.
 */
export type {
  BaseTask,
  Category,
  ClickTask,
  DragAndDropTask,
  DragItem,
  Option,
  QuestionTask,
  TaskType,
} from "@/data/questionsData";

export {
  isClickTask,
  isDragAndDropTask,
  isDragTask,
  MAX_SCORE,
  questions,
} from "@/data/questionsData";
