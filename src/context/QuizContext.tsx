"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { questions } from "@/data/questionsData";

type QuizContextValue = {
  step: number;
  score: number;
  totalQuestions: number;
  completeQuestion: (points: number) => void;
  resetQuiz: () => void;
  isFinished: boolean;
};

const QuizContext = createContext<QuizContextValue | null>(null);

export function QuizProvider({ children }: { children: ReactNode }) {
  const [step, setStep] = useState(0);
  const [score, setScore] = useState(0);

  const completeQuestion = useCallback((points: number) => {
    setScore((s) => s + points);
    setStep((st) => st + 1);
  }, []);

  const resetQuiz = useCallback(() => {
    setStep(0);
    setScore(0);
  }, []);

  const isFinished = step >= questions.length;

  const value = useMemo(
    () => ({
      step,
      score,
      totalQuestions: questions.length,
      completeQuestion,
      resetQuiz,
      isFinished,
    }),
    [step, score, completeQuestion, resetQuiz, isFinished],
  );

  return (
    <QuizContext.Provider value={value}>{children}</QuizContext.Provider>
  );
}

export function useQuiz() {
  const ctx = useContext(QuizContext);
  if (!ctx) {
    throw new Error("useQuiz must be used within QuizProvider");
  }
  return ctx;
}
