"use client";

import { QuizProvider } from "@/context/QuizContext";
import { QuizRunner } from "./QuizRunner";

export function QuizApp() {
  return (
    <QuizProvider>
      <QuizRunner />
    </QuizProvider>
  );
}
