import Editor, { useMonaco } from "@monaco-editor/react";
import { useEffect, useRef } from "react";
import { registerPythonCompletions } from "../config/pythonCompletions";
import type { Language } from "../types/editor.types";

type Props = {
  code: string;
  language: Language;
  onChange: (value: string | undefined) => void;
};

const CodeEditor = ({ code, language, onChange }: Props) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const monaco = useMonaco();

  useEffect(() => {
    if (!monaco) return;

    document.fonts.ready.then(() => {
      monaco.editor.remeasureFonts();
    });

    registerPythonCompletions(monaco);
  }, [monaco]);

  useEffect(() => {
    if (!containerRef.current || !monaco) return;

    const observer = new ResizeObserver(() => {
      monaco.editor.getEditors().forEach((editor) => editor.layout());
    });

    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, [monaco]);

  return (
    <div ref={containerRef} className="w-full h-full overflow-hidden">
      <Editor
        width="100%"
        height="100%"
        language={language.monacoId}
        value={code}
        onChange={onChange}
        theme="vs-dark"
        options={{
          fontSize: 14,
          fontFamily: "JetBrains Mono, Fira Code, monospace",
          minimap: { enabled: true },
          lineNumbers: "on",
          scrollBeyondLastLine: false,
          automaticLayout: true,
          tabSize: 2,
          wordWrap: "on",
          formatOnPaste: true,
          padding: { top: 16 },
          bracketPairColorization: { enabled: true },
          suggestOnTriggerCharacters: true,
          quickSuggestions: {
            other: true,
            comments: false,
            strings: false,
          },
          acceptSuggestionOnEnter: "on",
          tabCompletion: "on",
          wordBasedSuggestions: "matchingDocuments",
          parameterHints: { enabled: true },
          suggest: {
            showKeywords: true,
            showSnippets: true,
            showFunctions: true,
            showVariables: true,
            showClasses: true,
            showModules: true,
            showMethods: true,
          },
        }}
      />
    </div>
  );
};

export default CodeEditor;
