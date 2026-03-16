import { languages } from "../config/languages";
import type { Language } from "../types/editor.types";

type Props = {
  selectedLanguage: Language;
  isRunning: boolean;
  onLanguageChange: (id: string) => void;
  onRun: () => void;
};

const EditorToolbar = ({
  selectedLanguage,
  isRunning,
  onLanguageChange,
  onRun,
}: Props) => {
  return (
    <div className="flex items-center justify-between px-4 py-2 bg-[#161B22] border-b border-slate-800">
      {/* Left — language selector */}
      <select
        value={selectedLanguage.id}
        onChange={(e) => onLanguageChange(e.target.value)}
        className="bg-slate-800 text-slate-300 text-sm px-3 py-1 rounded border border-slate-700 focus:outline-none focus:ring-1 focus:ring-primary cursor-pointer"
      >
        {languages.map((lang) => (
          <option key={lang.id} value={lang.id}>
            {lang.label}
          </option>
        ))}
      </select>

      {/* Right — actions */}
      <div className="flex items-center gap-2">
        <button
          onClick={onRun}
          disabled={isRunning}
          className="flex items-center gap-1.5 px-3 py-1.5 bg-green-600 hover:bg-green-500 disabled:opacity-50 disabled:cursor-not-allowed text-white text-sm rounded transition-colors font-medium"
        >
          <span className="material-symbols-outlined" style={{ fontSize: 16 }}>
            {isRunning ? "stop_circle" : "play_arrow"}
          </span>
          {isRunning ? "Running..." : "Run"}
        </button>

        <button className="flex items-center gap-1.5 px-3 py-1.5 bg-blue-600 hover:bg-blue-500 text-white text-sm rounded transition-colors font-medium">
          <span className="material-symbols-outlined" style={{ fontSize: 16 }}>
            upload
          </span>
          Submit
        </button>
      </div>
    </div>
  );
};

export default EditorToolbar;
