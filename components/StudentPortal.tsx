"use client";

import { useMemo, useState } from "react";
import { students } from "@/data/students";
import AddStudent, { type AddStudentInput } from "./AddStudent";
import SearchBox from "./SearchBox";
import StatsPanel from "./StatsPanel";
import StudentList from "./StudentList";

const StudentPortal = () => {
  const [studentList, setStudentList] = useState(students);
  const [searchText, setSearchText] = useState("");

  const totalStudents = studentList.length;
  const honourRollStudents = studentList.filter(
    (student) => student.average >= 80,
  ).length;
  const grade12Students = studentList.filter(
    (student) => student.grade === 12,
  ).length;

  const filteredStudents = useMemo(() => {
    const normalizedSearchText = searchText.trim().toLowerCase();

    if (!normalizedSearchText) {
      return studentList;
    }

    return studentList.filter((student) => {
      const fullName = `${student.firstName} ${student.lastName}`.toLowerCase();
      return fullName.includes(normalizedSearchText);
    });
  }, [searchText, studentList]);

  const handleRemoveStudent = (studentId: number) => {
    setStudentList((currentStudents) =>
      currentStudents.filter((student) => student.id !== studentId),
    );
  };

  const handleClearAll = () => {
    setStudentList([]);
  };

  const handleAddStudent = (newStudent: AddStudentInput) => {
    setStudentList((currentStudents) => {
      const highestId = currentStudents.reduce(
        (maxId, student) => (student.id > maxId ? student.id : maxId),
        0,
      );

      return [
        ...currentStudents,
        {
          id: highestId + 1,
          firstName: newStudent.firstName,
          lastName: newStudent.lastName,
          grade: newStudent.grade,
          average: newStudent.average,
        },
      ];
    });
  };

  return (
    <div className="space-y-6">
      <section id="overview" className="scroll-mt-24 space-y-3">
        <h2 className="text-2xl font-semibold">Overview</h2>
        <div>
          <StatsPanel
            totalStudents={totalStudents}
            honourRollStudents={honourRollStudents}
            grade12Students={grade12Students}
          />
        </div>
      </section>

      <section id="students" className="scroll-mt-24 space-y-3">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <h2 className="text-2xl font-semibold">Students</h2>
          <button
            type="button"
            onClick={handleClearAll}
            className="rounded border border-slate-300 px-3 py-1 text-sm"
          >
            Clear all
          </button>
        </div>

        <SearchBox searchText={searchText} onSearchTextChange={setSearchText} />

        <StudentList
          students={filteredStudents}
          onRemove={handleRemoveStudent}
        />
      </section>

      <section id="add-student" className="scroll-mt-24 space-y-3">
        <h2 className="text-2xl font-semibold">Add a student</h2>
        <AddStudent onAddStudent={handleAddStudent} />
      </section>
    </div>
  );
};

export default StudentPortal;
