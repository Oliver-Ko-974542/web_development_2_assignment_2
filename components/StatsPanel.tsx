interface StatsPanelProps {
  totalStudents: number;
  honourRollStudents: number;
  grade12Students: number;
}

const StatsPanel = ({
  totalStudents,
  honourRollStudents,
  grade12Students,
}: StatsPanelProps) => {
  const stats = [
    { label: "Students", value: totalStudents },
    { label: "Honour roll", value: honourRollStudents },
    { label: "Graduating (Grade 12)", value: grade12Students },
  ];

  return (
    <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
      {stats.map((stat) => (
        <article
          key={stat.label}
          className="rounded border border-slate-300 p-4"
        >
          <p className="text-sm text-slate-700">{stat.label}</p>
          <p className="text-2xl font-semibold">{stat.value}</p>
        </article>
      ))}
    </div>
  );
};

export default StatsPanel;
