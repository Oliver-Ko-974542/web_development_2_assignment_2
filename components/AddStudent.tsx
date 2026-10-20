"use client";

import { useState } from "react";

interface AddStudentInput {
  firstName: string;
  lastName: string;
  grade: number;
  average: number;
}

interface AddStudentProps {
  onAddStudent: (newStudent: AddStudentInput) => void;
}

const AddStudent = ({ onAddStudent }: AddStudentProps) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [grade, setGrade] = useState(9);
  const [average, setAverage] = useState(70);

  const handleAddStudent = () => {
    if (!firstName.trim() || !lastName.trim()) {
      return;
    }

    onAddStudent({
      firstName: firstName.trim(),
      lastName: lastName.trim(),
      grade,
      average,
    });

    setFirstName("");
    setLastName("");
    setGrade(9);
    setAverage(70);
  };

  return (
    <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
      <input
        type="text"
        value={firstName}
        onChange={(event) => setFirstName(event.target.value)}
        placeholder="First name"
        className="rounded border border-slate-300 px-3 py-2 text-sm"
      />
      <input
        type="text"
        value={lastName}
        onChange={(event) => setLastName(event.target.value)}
        placeholder="Last name"
        className="rounded border border-slate-300 px-3 py-2 text-sm"
      />
      <input
        type="number"
        min={9}
        max={12}
        value={grade}
        onChange={(event) => setGrade(Number(event.target.value))}
        className="rounded border border-slate-300 px-3 py-2 text-sm"
      />
      <input
        type="number"
        min={0}
        max={100}
        value={average}
        onChange={(event) => setAverage(Number(event.target.value))}
        className="rounded border border-slate-300 px-3 py-2 text-sm"
      />
      <div>
        <button
          type="button"
          onClick={handleAddStudent}
          className="rounded border border-slate-300 px-3 py-2 text-sm"
        >
          Add student
        </button>
      </div>
    </div>
  );
};

export type { AddStudentInput };
export default AddStudent;
