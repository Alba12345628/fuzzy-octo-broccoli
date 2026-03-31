"use client";

import { AnimatePresence, motion } from "framer-motion";
import { isClickTask, isDragTask, questions } from "@/data/questionsData";
import { useQuiz } from "@/context/QuizContext";
import { ClickTaskComponent } from "./ClickTaskComponent";
import { DragAndDropTaskComponent } from "./DragAndDropTaskComponent";
import { QuizResultsScreen } from "./QuizResultsScreen";

export function QuizRunner() {
  const { step, score, totalQuestions, completeQuestion, resetQuiz, isFinished } =
    useQuiz();

  if (isFinished) {
    return (
      <QuizResultsScreen score={score} onReset={resetQuiz} />
    );
  }

  const currentTask = questions[step];
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

      {currentTask.blockTitle && (
        <div className="mb-8 w-full max-w-3xl mx-auto rounded-2xl bg-amber-100/90 p-6 shadow-md border-2 border-amber-200/50">
          <h2 className="text-2xl md:text-3xl font-black tracking-tight text-amber-950 text-center drop-shadow-sm leading-tight">
            {currentTask.blockTitle}
          </h2>
        </div>
      )}

      <AnimatePresence mode="wait">
        <motion.div
          key={currentTask.id}
          className="flex w-full max-w-5xl flex-col items-center"
          initial={{ opacity: 0, x: 28 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -28 }}
          transition={{ duration: 0.35 }}
        >
          {isClickTask(currentTask) ? (
            <ClickTaskComponent
              question={currentTask}
              onComplete={completeQuestion}
            />
          ) : null}
          {isDragTask(currentTask) ? (
            <DragAndDropTaskComponent
              question={currentTask}
              onComplete={completeQuestion}
            />
          ) : null}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
