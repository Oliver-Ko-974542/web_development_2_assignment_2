/*
 * File: StudentPortal.tsx
 * Author: Xiongxian Lei
 * Date: 2026-10-22
 * Description: The main container for the student management application.
 * Inputs (Props): None.
 * Processing: Manages the global state of the student array and search filter. Calculates derived stats.
 * Output: Renders Overview, Students list, and Add Student sections.
 */

"use client";

import { useState } from "react";
import { students as initialStudents, type Student } from "@/data/students";
import StatsPanel from "./StatsPanel";
import StudentList from "./StudentList";
import SearchBox from "./SearchBox";
import AddStudent from "./AddStudent";

const StudentPortal = () => {
  // State for the master list of students and the current search text
  const [studentList, setStudentList] = useState<Student[]>(initialStudents);
  const [searchTerm, setSearchTerm] = useState("");

  // Stats are always calculated from the full list (search does not affect stats)
  const totalStudents = studentList.length;
  const honourRollStudents = studentList.filter((s) => s.average >= 80).length;
  const grade12Students = studentList.filter((s) => s.grade === 12).length;

  // Filtered list specifically for the StudentList display
  const filteredStudents = studentList.filter((s) =>
    `${s.firstName} ${s.lastName}`.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Handlers for modifying the list (creates a new array each time)
  const handleRemove = (id: number) => {
    setStudentList(studentList.filter((s) => s.id !== id));
  };

  const handleClearAll = () => {
    setStudentList([]);
  };

  const handleAddStudent = (newStudentData: Omit<Student, "id">) => {
    const nextId = studentList.length > 0 ? Math.max(...studentList.map((s) => s.id)) + 1 : 1;
    const newStudent: Student = { ...newStudentData, id: nextId };
    setStudentList([...studentList, newStudent]);
  };

  return (
    <div className="space-y-6">
      <section id="overview" className="scroll-mt-24 space-y-3">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-semibold">Overview</h2>
          <button
            type="button"
            onClick={handleClearAll}
            className="rounded border cursor-pointer border-red-300 bg-red-50 px-3 py-1 text-sm text-red-600 hover:bg-red-100"
          >
            Clear all
          </button>
        </div>
        <div>
          <StatsPanel
            totalStudents={totalStudents}
            honourRollStudents={honourRollStudents}
            grade12Students={grade12Students}
          />
        </div>
      </section>

      <section id="students" className="scroll-mt-24 space-y-3">
        <h2 className="text-2xl font-semibold">Students</h2>
        <SearchBox searchTerm={searchTerm} onSearchChange={setSearchTerm} />
        <StudentList students={filteredStudents} onRemove={handleRemove} />
      </section>

      <section id="add-student" className="scroll-mt-24 space-y-3">
        <h2 className="text-2xl font-semibold">Add a student</h2>
        <AddStudent onAdd={handleAddStudent} />
      </section>
    </div>
  );
};

export default StudentPortal;