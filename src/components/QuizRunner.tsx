"use client";

import { AnimatePresence, motion } from "framer-motion";
import {
  isClickTask,
  isDragTask,
  MAX_SCORE,
  questions,
} from "@/data/questionsData";
import { useQuiz } from "@/context/QuizContext";
import { getInterpretation } from "@/lib/interpretation";
import { ClickTaskComponent } from "./ClickTaskComponent";
import { DragAndDropTaskComponent } from "./DragAndDropTaskComponent";

export function QuizRunner() {
  const { step, score, totalQuestions, completeQuestion, resetQuiz, isFinished } =
    useQuiz();

  if (isFinished) {
    const interp = getInterpretation(score);
    return (
      <motion.div
        className="flex w-full max-w-2xl flex-col items-center gap-8 rounded-[2rem] bg-white/90 p-10 text-center shadow-2xl backdrop-blur"
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.45 }}
      >
        <div className="flex flex-col gap-2">
          <p className="text-lg font-semibold text-amber-800">Готово!</p>
          <p className="text-5xl font-black text-fuchsia-600">
            {score}{" "}
            <span className="text-2xl font-bold text-slate-600">
              / {MAX_SCORE}
            </span>
          </p>
        </div>
        <div className="rounded-2xl bg-gradient-to-br from-amber-100 to-fuchsia-100 px-6 py-5">
          <p className="text-2xl font-bold text-slate-900">{interp.title}</p>
          <p className="mt-3 text-lg leading-relaxed text-slate-700">
            {interp.description}
          </p>
        </div>
        <motion.button
          type="button"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
          onClick={resetQuiz}
          className="rounded-full bg-gradient-to-r from-fuchsia-500 to-orange-400 px-10 py-4 text-xl font-bold text-white shadow-lg"
        >
          Пройти снова
        </motion.button>
      </motion.div>
    );
  }

  const question = questions[step];
  const progress = ((step + 1) / totalQuestions) * 100;

  return (
    <div className="flex w-full max-w-5xl flex-col items-center gap-8 px-4 py-5">
      <header className="flex w-full flex-col gap-3">
        <div className="flex items-center justify-between gap-4 text-amber-800">
          <span className="text-lg font-bold md:text-xl">
            Шаг {step + 1} из {totalQuestions}
          </span>
          <span className="text-lg font-bold text-fuchsia-700 md:text-xl">
            Баллы: {score}
          </span>
        </div>
        <div className="h-4 w-full overflow-hidden rounded-full bg-white/50 shadow-inner">
          <motion.div
            className="h-full rounded-full bg-gradient-to-r from-fuchsia-500 via-orange-400 to-amber-400"
            initial={false}
            animate={{ width: `${progress}%` }}
            transition={{ type: "spring", stiffness: 120, damping: 20 }}
          />
        </div>
      </header>

      <AnimatePresence mode="wait">
        <motion.div
          key={question.id}
          className="flex w-full max-w-5xl flex-col items-center"
          initial={{ opacity: 0, x: 28 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -28 }}
          transition={{ duration: 0.35 }}
        >
          {isClickTask(question) ? (
            <ClickTaskComponent
              question={question}
              onComplete={completeQuestion}
            />
          ) : null}
          {isDragTask(question) ? (
            <DragAndDropTaskComponent
              question={question}
              onComplete={completeQuestion}
            />
          ) : null}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
