export type LevelKey =
  | "very_high"
  | "medium"
  | "below_average"
  | "low"
  | "very_low";

export type Interpretation = {
  key: LevelKey;
  title: string;
  description: string;
};

/** Максимум 30 баллов по всему тесту */
export function getInterpretation(totalScore: number): Interpretation {
  const s = Math.max(0, Math.min(30, totalScore));

  if (s >= 25) {
    return {
      key: "very_high",
      title: "Высокий уровень",
      description:
        "Словообразовательные умения сформированы. Ребёнок уверенно оперирует формами слова.",
    };
  }
  if (s >= 18) {
    return {
      key: "medium",
      title: "Средний уровень",
      description:
        "Есть устойчивые навыки, при необходимости возможна точечная коррекция.",
    };
  }
  if (s >= 10) {
    return {
      key: "below_average",
      title: "Уровень ниже среднего",
      description:
        "Встречаются затруднения; рекомендуется продолжить наблюдение и упражнения.",
    };
  }
  if (s >= 5) {
    return {
      key: "low",
      title: "Низкий уровень",
      description:
        "Требуется систематическая логопедическая работа по словообразованию.",
    };
  }
  return {
    key: "very_low",
    title: "Очень низкий уровень",
    description:
      "Необходима детальная диагностика и индивидуальный план коррекции.",
  };
}
