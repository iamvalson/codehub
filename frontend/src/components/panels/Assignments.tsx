const AssessmentsPanel = () => {
  return (
    <div className="flex flex-col p-2 gap-1">
      <p className="text-xs text-slate-500 px-2 py-1">Active</p>

      {/* Assessment items */}
      {["Arrays & Loops", "OOP Basics", "Recursion"].map((title) => (
        <button
          key={title}
          className="w-full text-left px-2 py-1.5 rounded text-sm text-slate-300 hover:bg-slate-800 transition-colors flex items-center gap-2"
        >
          <span
            className="material-symbols-outlined text-amber-400"
            style={{ fontSize: 16 }}
          >
            assignment
          </span>
          {title}
        </button>
      ))}

      <p className="text-xs text-slate-500 px-2 py-1 mt-2">Completed</p>
      {["Intro to Python"].map((title) => (
        <button
          key={title}
          className="w-full text-left px-2 py-1.5 rounded text-sm text-slate-500 hover:bg-slate-800 transition-colors flex items-center gap-2"
        >
          <span
            className="material-symbols-outlined text-green-500"
            style={{ fontSize: 16 }}
          >
            check_circle
          </span>
          {title}
        </button>
      ))}
    </div>
  );
};

export default AssessmentsPanel;
