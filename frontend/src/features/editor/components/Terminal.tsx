import type { TerminalOutput } from "../types/editor.types";

type Props = {
  output: TerminalOutput[];
  isRunning: boolean;
  onClear: () => void;
};

const outputColors: Record<TerminalOutput["type"], string> = {
  stdout: "text-slate-200",
  stderr: "text-red-400",
  info: "text-blue-400",
  error: "text-red-500",
};

const Terminal = ({ output, isRunning, onClear }: Props) => {
  return (
    <div className="flex flex-col h-full bg-[#0D1117] border-t border-slate-800">
      {/* Terminal header */}
      <div className="flex items-center justify-between px-4 py-1.5 border-b border-slate-800 bg-[#161B22]">
        <div className="flex items-center gap-2">
          <span
            className="material-symbols-outlined text-slate-400"
            style={{ fontSize: 16 }}
          >
            terminal
          </span>
          <span className="text-xs text-slate-400 font-mono">OUTPUT</span>
        </div>
        <button
          onClick={onClear}
          className="text-slate-500 hover:text-slate-300 transition-colors"
          title="Clear terminal"
        >
          <span className="material-symbols-outlined" style={{ fontSize: 16 }}>
            delete_sweep
          </span>
        </button>
      </div>

      {/* Terminal output */}
      <div className="flex-1 overflow-y-auto p-4 font-mono text-sm">
        {output.length === 0 && !isRunning && (
          <p className="text-slate-600">Press Run to execute your code...</p>
        )}

        {isRunning && (
          <div className="flex items-center gap-2 text-blue-400">
            <span className="animate-pulse">●</span>
            <span>Running...</span>
          </div>
        )}

        {output.map((line, i) => (
          <pre
            key={i}
            className={`whitespace-pre-wrap leading-relaxed ${outputColors[line.type]}`}
          >
            {line.content}
          </pre>
        ))}
      </div>
    </div>
  );
};

export default Terminal;
