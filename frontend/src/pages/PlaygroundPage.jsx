import "./playground.css";
import * as monaco from "monaco-editor";

import { useEffect } from "react";

export default function PlaygroundPage() {
  const value = `function hello() {
	alert('Hello world!');}`;

  useEffect(() => {
    const myEditor = monaco.editor.create(
      document.getElementById("playground_code_container"),
      {
        value,
        language: "javascript",
        automaticLayout: true,
      }
    );
  }, [value]);

  return (
    <div className="playground_container">
      <div className="playground_left_container">
        <label for="coding_language">Choose a language:</label>
        <select name="coding_language" id="coding_language">
          <option value="javascript">JavaScript</option>
          <option value="python">Python</option>
        </select>
        <div id="playground_code_container"></div>
        <div className="playground_prompt"></div>
      </div>
      <div className="playground_right_container">
        <div className="playground_correction"></div>
      </div>
    </div>
  );
}
