"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import type { ClickTask } from "@/data/questionsData";

const POINTS_PER_STEP = 1;

type Props = {
  question: ClickTask;
  onComplete: (points: number) => void;
};

export function ClickTaskComponent({ question, onComplete }: Props) {
  const [locked, setLocked] = useState(false);
  const [pickedId, setPickedId] = useState<string | null>(null);

  function handlePick(id: string) {
    if (locked) return;
    setLocked(true);
    setPickedId(id);
    const ok = id === question.correctOptionId;
    const pts = ok ? POINTS_PER_STEP : 0;
    window.setTimeout(() => onComplete(pts), 950);
  }

  const colsClass =
    question.options.length >= 3
      ? "grid-cols-2 md:grid-cols-3"
      : "grid-cols-2";

  return (
    <div className="flex w-full max-w-4xl flex-col items-center gap-10 px-4">
      <motion.p
        className="text-center text-2xl font-bold leading-snug text-slate-800 md:text-3xl"
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35 }}
      >
        {question.instruction}
      </motion.p>

      <div className={`grid w-full gap-5 ${colsClass} md:gap-6`}>
        {question.options.map((opt, index) => {
          const isPicked = pickedId === opt.id;
          const isCorrect = opt.id === question.correctOptionId;
          const showResult = locked && isPicked;

          return (
            <motion.button
              key={opt.id}
              type="button"
              disabled={locked}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: index * 0.04 }}
              onClick={() => handlePick(opt.id)}
              className={`flex flex-col items-center justify-center gap-2 rounded-lg border bg-white p-2 outline-none ${
                showResult
                  ? isCorrect
                    ? "border-gray-500"
                    : "border-gray-400 opacity-90"
                  : "border-gray-300"
              } focus-visible:ring-2 focus-visible:ring-gray-400`}
            >
              <span className="flex h-36 w-full items-center justify-center md:h-40">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={opt.imageSrc}
                  alt={opt.label ?? ""}
                  className="max-h-full max-w-full object-contain"
                />
              </span>
              {opt.label ? (
                <span className="text-center text-sm text-slate-800">
                  {opt.label}
                </span>
              ) : null}
            </motion.button>
          );
        })}
      </div>
    </div>
  );
}
