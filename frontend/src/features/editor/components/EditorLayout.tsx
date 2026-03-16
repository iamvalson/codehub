import { useCodeRunner } from "../hooks/useCodeRunner";
import { useEditor } from "../hooks/useEditior";

import CodeEditor from "./CodeEditor";
import EditorToolbar from "./EditorToolbar";
import Terminal from "./Terminal";

type Props = {
  starterCode?: string;
};

const EditorLayout = ({ starterCode }: Props) => {
  const { code, selectedLanguage, handleLanguageChange, handleCodeChange } =
    useEditor(starterCode);

  const { output, isRunning, runCode, clearOutput } = useCodeRunner();

  return (
    <div className="flex flex-col w-full h-full overflow-hidden">
      {/* Toolbar */}
      <EditorToolbar
        selectedLanguage={selectedLanguage}
        isRunning={isRunning}
        onLanguageChange={handleLanguageChange}
        onRun={() => runCode(code, selectedLanguage)}
      />

      {/* Editor + Terminal split */}
      <div className="flex flex-col flex-1 overflow-hidden">
        {/* Editor takes 65% */}
        <div className="flex-[65] overflow-hidden">
          <CodeEditor
            code={code}
            language={selectedLanguage}
            onChange={handleCodeChange}
          />
        </div>

        {/* Terminal takes 35% */}
        <div className="flex-[35] overflow-hidden">
          <Terminal
            output={output}
            isRunning={isRunning}
            onClear={clearOutput}
          />
        </div>
      </div>
    </div>
  );
};

export default EditorLayout;
