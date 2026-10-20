import { students } from "@/data/students";
import StatsPanel from "./StatsPanel";
import StudentList from "./StudentList";

const StudentPortal = () => {
  const totalStudents = students.length;
  const honourRollStudents = students.filter(
    (student) => student.average >= 80,
  ).length;
  const grade12Students = students.filter(
    (student) => student.grade === 12,
  ).length;

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
        <h2 className="text-2xl font-semibold">Students</h2>
        <StudentList students={students} />
      </section>

      <section id="add-student" className="scroll-mt-24 space-y-3">
        <h2 className="text-2xl font-semibold">Add a student</h2>
        <div className="rounded border border-slate-300 p-4 text-sm text-slate-600">
          AddStudent component goes here.
        </div>
      </section>
    </div>
  );
};

export default StudentPortal;
