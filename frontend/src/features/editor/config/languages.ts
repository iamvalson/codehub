import type { Language } from "../types/editor.types";

export const languages: Language[] = [
  {
    id: "python",
    label: "Python",
    monacoId: "python",
    version: "3.10.0",
    defaultCode: `# Write your solution here\n\ndef solution():\n    pass\n\nsolution()\n`,
  },
  {
    id: "javascript",
    label: "JavaScript",
    monacoId: "javascript",
    version: "18.15.0",
    defaultCode: `// Write your solution here\n\nfunction solution() {\n\n}\n\nsolution();\n`,
  },
  {
    id: "java",
    label: "Java",
    monacoId: "java",
    version: "15.0.2",
    defaultCode: `public class Main {\n    public static void main(String[] args) {\n        // Write your solution here\n    }\n}\n`,
  },
  {
    id: "cpp",
    label: "C++",
    monacoId: "cpp",
    version: "10.2.0",
    defaultCode: `#include <iostream>\nusing namespace std;\n\nint main() {\n    // Write your solution here\n    return 0;\n}\n`,
  },
];

export const defaultLanguage = languages[0];
