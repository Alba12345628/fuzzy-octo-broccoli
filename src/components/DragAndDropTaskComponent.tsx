"use client";

import {
  DndContext,
  DragOverlay,
  PointerSensor,
  type DragEndEvent,
  useDraggable,
  useDroppable,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import { motion } from "framer-motion";
import { useMemo, useState, type ReactNode } from "react";
import type { DragAndDropTask } from "@/data/questionsData";

const POOL_ID = "pool";

const POINTS_PER_STEP = 1;

type Props = {
  question: DragAndDropTask;
  onComplete: (points: number) => void;
};

function DraggableCard({
  id,
  imageSrc,
  disabled,
}: {
  id: string;
  imageSrc: string;
  disabled: boolean;
}) {
  const { attributes, listeners, setNodeRef, transform, isDragging } =
    useDraggable({ id, disabled });

  const style = transform
    ? {
        transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
      }
    : undefined;

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...listeners}
      {...attributes}
      className={`relative cursor-grab touch-none rounded-lg border border-gray-300 bg-white p-1 active:cursor-grabbing ${
        isDragging ? "z-50 opacity-80" : ""
      }`}
    >
      <span className="flex h-28 w-28 items-center justify-center md:h-32 md:w-32">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={imageSrc}
          alt=""
          className="max-h-full max-w-full object-contain"
        />
      </span>
    </div>
  );
}

function DroppableZone({
  id,
  title,
  children,
  tone,
}: {
  id: string;
  title: string;
  children: ReactNode;
  tone: "pool" | "col";
}) {
  const { setNodeRef, isOver } = useDroppable({ id });

  const borderStyle =
    tone === "pool" ? "border-dashed border-gray-300" : "border-gray-300";

  return (
    <div
      ref={setNodeRef}
      className={`flex min-h-[160px] flex-1 flex-col gap-3 rounded-lg border bg-white p-4 md:min-h-[200px] ${borderStyle} ${
        isOver ? "bg-gray-50" : ""
      }`}
    >
      <h3 className="text-center text-lg font-semibold text-gray-800 md:text-xl">
        {title}
      </h3>
      <div className="flex flex-wrap content-start justify-center gap-3">
        {children}
      </div>
    </div>
  );
}

function initialPlacements(q: DragAndDropTask): Record<string, string> {
  const init: Record<string, string> = {};
  q.items.forEach((item) => {
    init[item.id] = POOL_ID;
  });
  return init;
}

function isPlacementCorrect(
  q: DragAndDropTask,
  placements: Record<string, string>,
): boolean {
  return q.items.every(
    (item) => placements[item.id] === item.correctCategoryId,
  );
}

export function DragAndDropTaskComponent({ question, onComplete }: Props) {
  const [placements, setPlacements] = useState<Record<string, string>>(() =>
    initialPlacements(question),
  );
  const [activeId, setActiveId] = useState<string | null>(null);
  const [checked, setChecked] = useState(false);
  const [allCorrect, setAllCorrect] = useState<boolean | null>(null);

  const columnIds = useMemo(
    () => question.categories.map((c) => c.id),
    [question.categories],
  );

  const sensors = useSensors(
    useSensor(PointerSensor, { activationConstraint: { distance: 8 } }),
  );

  function resolveDropTarget(overId: string): string {
    if (overId === POOL_ID || columnIds.includes(overId)) return overId;
    return placements[overId] ?? POOL_ID;
  }

  function handleDragEnd(event: DragEndEvent) {
    const { active, over } = event;
    setActiveId(null);
    if (!over) return;
    const itemId = String(active.id);
    const target = resolveDropTarget(String(over.id));
    setPlacements((prev) => ({ ...prev, [itemId]: target }));
  }

  function handleCheck() {
    if (checked) return;
    setChecked(true);
    const ok = isPlacementCorrect(question, placements);
    setAllCorrect(ok);
    const pts = ok ? POINTS_PER_STEP : 0;
    window.setTimeout(() => onComplete(pts), 1100);
  }

  const activeItem = question.items.find((i) => i.id === activeId);

  return (
    <div className="flex w-full max-w-5xl flex-col items-center gap-8 px-4">
      <motion.p
        className="text-center text-2xl font-bold leading-snug text-slate-800 md:text-3xl"
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
      >
        {question.instruction}
      </motion.p>

      <DndContext
        sensors={sensors}
        onDragStart={({ active }) => setActiveId(String(active.id))}
        onDragEnd={handleDragEnd}
      >
        <div className="flex w-full flex-col gap-6">
          <DroppableZone id={POOL_ID} title="Сюда бери карточки" tone="pool">
            {question.items
              .filter((item) => placements[item.id] === POOL_ID)
              .map((item) => (
                <DraggableCard
                  key={item.id}
                  id={item.id}
                  imageSrc={item.imageSrc}
                  disabled={checked}
                />
              ))}
          </DroppableZone>

          <div className="flex flex-col gap-6 md:flex-row">
            {question.categories.map((col) => (
              <DroppableZone key={col.id} id={col.id} title={col.title} tone="col">
                {question.items
                  .filter((item) => placements[item.id] === col.id)
                  .map((item) => (
                    <DraggableCard
                      key={item.id}
                      id={item.id}
                      imageSrc={item.imageSrc}
                      disabled={checked}
                    />
                  ))}
              </DroppableZone>
            ))}
          </div>
        </div>

        <DragOverlay dropAnimation={null}>
          {activeItem ? (
            <div className="relative rounded-lg border border-gray-300 bg-white p-1">
              <span className="flex h-28 w-28 items-center justify-center md:h-32 md:w-32">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={activeItem.imageSrc}
                  alt=""
                  className="max-h-full max-w-full object-contain"
                />
              </span>
            </div>
          ) : null}
        </DragOverlay>
      </DndContext>

      <div className="flex flex-col items-center gap-4">
        <button
          type="button"
          disabled={checked}
          onClick={handleCheck}
          className="rounded-lg border border-gray-400 bg-white px-10 py-4 text-xl font-medium text-gray-900 disabled:opacity-50"
        >
          Проверить
        </button>

        {checked && allCorrect !== null ? (
          <p className="text-lg text-gray-800">
            {allCorrect
              ? "Отлично!"
              : "За это задание баллы не начислены — переходим дальше."}
          </p>
        ) : null}
      </div>
    </div>
  );
}
