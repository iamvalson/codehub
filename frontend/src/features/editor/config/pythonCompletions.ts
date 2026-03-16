// src/features/editor/config/pythonCompletions.ts
import type * as Monaco from "monaco-editor";

export const registerPythonCompletions = (monaco: typeof Monaco) => {
  monaco.languages.registerCompletionItemProvider("python", {
    provideCompletionItems: (model, position) => {
      const word = model.getWordUntilPosition(position);
      const range = {
        startLineNumber: position.lineNumber,
        endLineNumber: position.lineNumber,
        startColumn: word.startColumn,
        endColumn: word.endColumn,
      };

      const suggestions: Monaco.languages.CompletionItem[] = [
        // Built-in functions
        {
          label: "print",
          kind: monaco.languages.CompletionItemKind.Function,
          insertText: "print(${1:value})",
          insertTextRules:
            monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
          documentation: "Print to stdout",
          range,
        },
        {
          label: "len",
          kind: monaco.languages.CompletionItemKind.Function,
          insertText: "len(${1:iterable})",
          insertTextRules:
            monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
          documentation: "Return the length of an object",
          range,
        },
        {
          label: "range",
          kind: monaco.languages.CompletionItemKind.Function,
          insertText: "range(${1:stop})",
          insertTextRules:
            monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
          documentation: "Return a range object",
          range,
        },
        // Snippets
        {
          label: "def",
          kind: monaco.languages.CompletionItemKind.Snippet,
          insertText: "def ${1:function_name}(${2:params}):\n\t${3:pass}",
          insertTextRules:
            monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
          documentation: "Define a function",
          range,
        },
        {
          label: "class",
          kind: monaco.languages.CompletionItemKind.Snippet,
          insertText:
            "class ${1:ClassName}:\n\tdef __init__(self):\n\t\t${2:pass}",
          insertTextRules:
            monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
          documentation: "Define a class",
          range,
        },
        {
          label: "for",
          kind: monaco.languages.CompletionItemKind.Snippet,
          insertText: "for ${1:item} in ${2:iterable}:\n\t${3:pass}",
          insertTextRules:
            monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
          documentation: "For loop",
          range,
        },
        {
          label: "if",
          kind: monaco.languages.CompletionItemKind.Snippet,
          insertText: "if ${1:condition}:\n\t${2:pass}",
          insertTextRules:
            monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
          documentation: "If statement",
          range,
        },
        {
          label: "try",
          kind: monaco.languages.CompletionItemKind.Snippet,
          insertText:
            "try:\n\t${1:pass}\nexcept ${2:Exception} as e:\n\t${3:pass}",
          insertTextRules:
            monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
          documentation: "Try/except block",
          range,
        },
        {
          label: "list comprehension",
          kind: monaco.languages.CompletionItemKind.Snippet,
          insertText: "[${1:expr} for ${2:item} in ${3:iterable}]",
          insertTextRules:
            monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
          documentation: "List comprehension",
          range,
        },
      ];

      return { suggestions };
    },
  });
};
