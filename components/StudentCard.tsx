"use client";

import { useState } from "react";
import type { Student } from "@/data/students";

interface StudentCardProps {
  student: Student;
  onRemove?: (id: number) => void;
}

const StudentCard = ({ student, onRemove }: StudentCardProps) => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <article className="rounded border border-slate-300 p-4">
      <h3 className="text-base font-semibold">
        {student.firstName} {student.lastName}
      </h3>
      <p className="text-sm text-slate-700">Grade {student.grade}</p>

      {showDetails ? (
        <div className="mt-2 space-y-1 text-sm text-slate-700">
          <p>Average: {student.average}</p>
          {student.average >= 80 ? (
            <p className="inline-block rounded border border-slate-300 px-2 py-0.5 text-xs">
              Honour roll
            </p>
          ) : null}
        </div>
      ) : null}

      <div className="mt-3 flex gap-2">
        <button
          type="button"
          onClick={() => setShowDetails((currentValue) => !currentValue)}
          className="rounded border cursor-pointer border-slate-300 px-3 py-1 text-sm"
        >
          {showDetails ? "Hide details" : "Show details"}
        </button>
        <button
          type="button"
          onClick={() => onRemove?.(student.id)}
          className="rounded cursor-pointer text-white bg-red-500 border border-red-300 px-3 py-1 text-sm"
        >
          Remove
        </button>
      </div>
    </article>
  );
};

export default StudentCard;
