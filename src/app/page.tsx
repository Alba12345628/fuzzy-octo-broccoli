import { QuizApp } from "@/components/QuizApp";
import { MAX_SCORE } from "@/data/questionsData";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-1 flex-col items-center justify-center bg-gradient-to-b from-amber-200 via-orange-100 to-fuchsia-100 px-4 py-10 font-sans">
      <div className="mb-8 max-w-2xl text-center">
        <h1 className="text-3xl font-black tracking-tight text-amber-950 drop-shadow-sm md:text-4xl">
          15 адаптированных заданий для платформы
        </h1>
        <p className="mt-3 text-lg font-medium text-amber-900/90">
          Сейчас мы будем проверять, как ты умеешь различать названия больших и маленьких вещей. Например, большая собака и маленькая собачка, большая чаша и маленькая чашечка, большая картина, и маленькая картинка. Следуй инструкциям, которые я тебе даю.
        </p>
      </div>
      <QuizApp />
    </div>
  );
}