"use client";

import { motion } from "framer-motion";
import { MAX_SCORE } from "@/data/questionsData";

type Props = {
  score: number;
  onReset: () => void;
};

function DynamicInterpretation({ score }: { score: number }) {
  if (score >= 25) {
    return (
      <div className="mb-6 rounded-xl border border-green-200 bg-green-50 p-6 text-left">
        <h3 className="mb-2 text-lg font-bold text-green-900">
          Высокий уровень (23–28 баллов)
        </h3>
        <p className="mb-2 text-green-800">
          Словообразовательные умения сформированы. Характерно:
        </p>
        <ul className="mb-4 list-disc space-y-1 pl-6 text-green-800">
          <li>
            правильное образование слов с использованием различных моделей
            (суффиксы, уменьшительно-ласкательные формы, названия детёнышей и
            др.)
          </li>
          <li>самостоятельное выполнение заданий</li>
          <li>умение переносить способ образования на новый материал</li>
          <li>единичные, случайные ошибки</li>
        </ul>
        <p className="font-semibold text-green-900">
          Ребёнок владеет основными способами словообразования и осознаёт
          языковые закономерности. Дополнительная коррекционная работа по
          развитию словообразовательных навыков не требуется.
        </p>
      </div>
    );
  }

  if (score >= 18 && score <= 24) {
    return (
      <div className="mb-6 rounded-xl border border-blue-200 bg-blue-50 p-6 text-left">
        <h3 className="mb-2 text-lg font-bold text-blue-900">
          Средний уровень (18–22 балла)
        </h3>
        <p className="mb-2 text-blue-800">
          Словообразовательные умения сформированы частично. Характерно:
        </p>
        <ul className="mb-4 list-disc space-y-1 pl-6 text-blue-800">
          <li>правильное выполнение знакомых заданий</li>
          <li>трудности при образовании слов по менее знакомым моделям</li>
          <li>ошибки в выборе суффиксов</li>
          <li>нестабильность выполнения</li>
          <li>требуется незначительная помощь</li>
        </ul>
        <p className="font-semibold text-blue-900">
          Ребёнок частично усвоил словообразовательные модели, но не всегда
          применяет их правильно. Следует дополнительно провести коррекционную
          работу по развитию словообразовательных умений глаголов и
          прилагательных.
        </p>
      </div>
    );
  }

  if (score >= 10 && score <= 17) {
    return (
      <div className="mb-6 rounded-xl border border-yellow-200 bg-yellow-50 p-6 text-left">
        <h3 className="mb-2 text-lg font-bold text-yellow-900">
          Уровень ниже среднего (10–17 баллов)
        </h3>
        <p className="mb-2 text-yellow-800">
          Словообразовательные умения недостаточно сформированы. Характерно:
        </p>
        <ul className="mb-4 list-disc space-y-1 pl-6 text-yellow-800">
          <li>значительное количество ошибок</li>
          <li>трудности в образовании слов даже по образцу</li>
          <li>замена словообразования описательными конструкциями</li>
          <li>ограниченное использование суффиксов</li>
          <li>необходимость постоянной помощи</li>
        </ul>
        <p className="font-semibold text-yellow-900">
          Наблюдается несформированность обобщённых словообразовательных
          навыков. Требуется дополнительная работа по развитию
          словообразовательных навыков.
        </p>
      </div>
    );
  }

  if (score >= 5 && score <= 9) {
    return (
      <div className="mb-6 rounded-xl border border-orange-200 bg-orange-50 p-6 text-left">
        <h3 className="mb-2 text-lg font-bold text-orange-900">
          Низкий уровень (5–9 баллов)
        </h3>
        <p className="mb-2 text-orange-800">
          Словообразовательные умения сформированы слабо. Характерно:
        </p>
        <ul className="mb-4 list-disc space-y-1 pl-6 text-orange-800">
          <li>выполнение отдельных простых заданий</li>
          <li>грубые ошибки при образовании слов</li>
          <li>отсутствие понимания словообразовательных моделей</li>
          <li>невозможность образования слов без помощи</li>
        </ul>
        <p className="font-semibold text-orange-900">
          Ребёнок не владеет способами словообразования, необходима работа по
          формированию и развитию лексико-грамматического строя речи.
        </p>
      </div>
    );
  }

  return (
    <div className="mb-6 rounded-xl border border-red-200 bg-red-50 p-6 text-left">
      <h3 className="mb-2 text-lg font-bold text-red-900">
        Очень низкий уровень (0–4 балла)
      </h3>
      <p className="mb-2 text-red-800">
        Словообразовательные умения не сформированы. Характерно:
      </p>
      <ul className="mb-4 list-disc space-y-1 pl-6 text-red-800">
        <li>ребёнок не справляется с заданиями</li>
        <li>отказ или полное непонимание задачи</li>
        <li>отсутствие попыток словообразования</li>
      </ul>
      <p className="font-semibold text-red-900">
        Навыки словообразования отсутствуют, требуется системная коррекционная
        работа по формированию лексико-грамматического строя речи.
      </p>
    </div>
  );
}

export function QuizResultsScreen({ score, onReset }: Props) {
  return (
    <motion.div
      className="flex w-full max-w-3xl flex-col items-stretch gap-6 rounded-[2rem] bg-white/95 p-8 text-center shadow-2xl backdrop-blur md:p-10"
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

      <div className="mb-2 rounded-xl border border-gray-100 bg-white p-6 text-left shadow-sm">
        <h2 className="mb-4 text-center text-xl font-bold text-gray-800">
          Интерпретация результатов обследования словообразовательных навыков
        </h2>
        <p className="mb-3 text-gray-700">
          Полученные количественные результаты диагностики требуют
          дополнительной качественной интерпретации специалистом-логопедом. Для
          полноты оценки необходимо учитывать не только суммарное количество
          набранных баллов, но и характер допущенных ошибок, степень
          самостоятельности выполнения заданий, особенности понимания
          инструкций, а также индивидуальные речевые проявления ребёнка.
        </p>
        <p className="mb-2 text-gray-700">
          Оценка выполнения заданий проводилась по суммарному количеству
          набранных баллов (максимум — 28 баллов). При интерпретации
          учитывались:
        </p>
        <ul className="list-disc space-y-1 pl-6 text-gray-700">
          <li>правильность образования слов</li>
          <li>
            использование словообразовательных моделей (суффиксальных,
            префиксальных)
          </li>
          <li>способность переносить способ образования на новые слова</li>
          <li>характер ошибок (случайные или системные)</li>
        </ul>
      </div>

      <DynamicInterpretation score={score} />

      <motion.button
        type="button"
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.98 }}
        onClick={onReset}
        className="rounded-full bg-gradient-to-r from-fuchsia-500 to-orange-400 px-10 py-4 text-xl font-bold text-white shadow-lg"
      >
        Пройти снова
      </motion.button>
    </motion.div>
  );
}
