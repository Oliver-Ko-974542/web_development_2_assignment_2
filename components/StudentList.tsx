import type { Student } from "@/data/students";
import StudentCard from "./StudentCard";

interface StudentListProps {
  students: Student[];
  onRemove?: (id: number) => void;
}

const StudentList = ({ students, onRemove }: StudentListProps) => {
  if (students.length === 0) {
    return (
      <p className="rounded border border-slate-300 p-4 text-sm text-slate-700">
        No students to show.
      </p>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3">
      {students.map((student) => (
        <StudentCard key={student.id} student={student} onRemove={onRemove} />
      ))}
    </div>
  );
};

export default StudentList;
