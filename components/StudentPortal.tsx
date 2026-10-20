import StatsPanel from "./StatsPanel";

interface StudentPortalProps {
  totalStudents?: number;
  honourRollStudents?: number;
  grade12Students?: number;
}

const StudentPortal = ({
  totalStudents = 0,
  honourRollStudents = 0,
  grade12Students = 0,
}: StudentPortalProps) => {
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
        <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3">
          <div className="rounded border border-slate-300 p-4 text-sm text-slate-600">
            StudentList component goes here.
          </div>
        </div>
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
