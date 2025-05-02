import Editor from "@monaco-editor/react";

export default function MonacoEditor({ language, editorCode, setEditorCode }) {
  // console.log(language)
  // const editorCode = (value) => {
  //     console.log(value)
  //     // console.log(language)
  // }

  return (
    <div className="h-full p-4 sm:p-6 lg:p-8">
      <Editor
        height="100%"
        language={language}
        defaultValue="// Start typing your code .."
        value={editorCode}
        theme="vs-dark"
        onChange={setEditorCode}
      />
    </div>
  );
}
