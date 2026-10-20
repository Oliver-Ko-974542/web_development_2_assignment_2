const links = [
  { label: "Overview", href: "#overview" },
  { label: "Students", href: "#students" },
  { label: "Add a student", href: "#add-student" },
];

const Navbar = () => {
  return (
    <header className="sticky top-0 z-20 border-b border-slate-200 bg-white py-4">
      <nav
        aria-label="Primary"
        className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between"
      >
        <div>
          <h1 className="text-lg font-semibold">New Generation High School</h1>
        </div>

        <ul className="flex flex-wrap gap-2">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="rounded border border-slate-300 px-3 py-1 text-sm"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
