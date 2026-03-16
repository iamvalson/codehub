import { useState } from "react";

type FileNode = {
  name: string;
  type: "file" | "folder";
  language?: string;
  children?: FileNode[];
};

// This will eventually come from your API / assessment data
const mockFiles: FileNode[] = [
  {
    name: "assessment-1",
    type: "folder",
    children: [
      { name: "main.py", type: "file", language: "python" },
      { name: "solution.py", type: "file", language: "python" },
    ],
  },
  {
    name: "assessment-2",
    type: "folder",
    children: [{ name: "index.js", type: "file", language: "javascript" }],
  },
];

const languageIcons: Record<string, string> = {
  python: "🐍",
  javascript: "🟨",
  java: "☕",
  cpp: "⚙️",
};

const FileTree = ({
  nodes,
  depth = 0,
}: {
  nodes: FileNode[];
  depth?: number;
}) => {
  const [openFolders, setOpenFolders] = useState<string[]>([]);

  const toggleFolder = (name: string) => {
    setOpenFolders((prev) =>
      prev.includes(name) ? prev.filter((f) => f !== name) : [...prev, name],
    );
  };

  return (
    <>
      {nodes.map((node) => (
        <div key={node.name}>
          <button
            onClick={() => node.type === "folder" && toggleFolder(node.name)}
            className="w-full text-left flex items-center gap-1.5 px-2 py-0.5 text-sm text-slate-300 hover:bg-slate-800 transition-colors rounded"
            style={{ paddingLeft: `${8 + depth * 12}px` }}
          >
            {node.type === "folder" ? (
              <>
                <span
                  className="material-symbols-outlined text-slate-400"
                  style={{ fontSize: 14 }}
                >
                  {openFolders.includes(node.name) ? "folder_open" : "folder"}
                </span>
                <span>{node.name}</span>
                <span
                  className="material-symbols-outlined text-slate-500 ml-auto"
                  style={{ fontSize: 14 }}
                >
                  {openFolders.includes(node.name)
                    ? "expand_more"
                    : "chevron_right"}
                </span>
              </>
            ) : (
              <>
                <span style={{ fontSize: 12 }}>
                  {languageIcons[node.language ?? ""] ?? "📄"}
                </span>
                <span className="text-slate-300">{node.name}</span>
              </>
            )}
          </button>

          {/* Render children if folder is open */}
          {node.type === "folder" &&
            openFolders.includes(node.name) &&
            node.children && (
              <FileTree nodes={node.children} depth={depth + 1} />
            )}
        </div>
      ))}
    </>
  );
};

const FilesPanel = () => (
  <div className="flex flex-col py-2">
    <FileTree nodes={mockFiles} />
  </div>
);

export default FilesPanel;
