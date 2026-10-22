/*
 * File: AddStudent.tsx
 * Author: Xiongxian Lei
 * Date: 2026-10-22
 * Description: Component for adding a new student to the roster.
 * Inputs (Props): onAdd (callback function to append a student).
 * Processing: Manages 4 local states for inputs. Validates empty names before adding.
 * Output: Renders four inputs and an add button.
 */

"use client";

import { useState } from "react";
import type { Student } from "@/data/students";

interface AddStudentProps {
  onAdd: (student: Omit<Student, "id">) => void;
}

const AddStudent = ({ onAdd }: AddStudentProps) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [grade, setGrade] = useState<number>(9);
  const [average, setAverage] = useState<number>(70);

  const handleAddClick = () => {
    // If either name is empty, nothing is added
    if (!firstName.trim() || !lastName.trim()) return;

    onAdd({
      firstName: firstName.trim(),
      lastName: lastName.trim(),
      grade,
      average,
    });

    // Reset values to their starting state
    setFirstName("");
    setLastName("");
    setGrade(9);
    setAverage(70);
  };

  return (
    <div className="flex flex-col gap-3 rounded border border-slate-300 p-4">
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        <input
          type="text"
          placeholder="First name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          className="rounded border border-slate-300 px-3 py-2 text-sm"
        />
        <input
          type="text"
          placeholder="Last name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          className="rounded border border-slate-300 px-3 py-2 text-sm"
        />
        <div className="flex flex-col">
          <label className="mb-1 text-xs text-slate-500">Grade (9-12)</label>
          <input
            type="number"
            min="9"
            max="12"
            value={grade}
            onChange={(e) => setGrade(Number(e.target.value))}
            className="rounded border border-slate-300 px-3 py-2 text-sm"
          />
        </div>
        <div className="flex flex-col">
          <label className="mb-1 text-xs text-slate-500">Average (0-100)</label>
          <input
            type="number"
            min="0"
            max="100"
            value={average}
            onChange={(e) => setAverage(Number(e.target.value))}
            className="rounded border border-slate-300 px-3 py-2 text-sm"
          />
        </div>
      </div>
      <button
        type="button"
        onClick={handleAddClick}
        className="mt-2 cursor-pointer self-start rounded bg-slate-900 px-4 py-2 text-sm text-white hover:bg-slate-800"
      >
        Add student
      </button>
    </div>
  );
};

export default AddStudent;