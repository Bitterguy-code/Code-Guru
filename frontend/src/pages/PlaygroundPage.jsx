import "./playground.css";
import MonacoEditor from "../components/monacoEditor";

import { useState } from "react";

export default function PlaygroundPage() {
  const [value, setValue] = useState(`function hello() {
	console.log('Hello world!');
    }

hello();`);
  const [codingLanguage, setCodingLanguage] = useState("javascript");
  const [userQuestion, setUserQuestion] = useState("");

  // TEST
  //   useEffect(() => {
  //     console.log(codingLanguage);
  //   }, [codingLanguage]);

  const handleClick = () => {
    console.log(value);
    console.log(userQuestion);
    console.log(codingLanguage);
  }; //TODO: send request to api with value, question, codingLanguage. get answer

  return (
    <div className="playground_container">
      <div className="playground_left_container">
        <label>Choose a language:</label>
        <select
          value={codingLanguage}
          id="coding_language"
          onChange={(e) => setCodingLanguage(e.target.value)}
        >
          <option value="javascript">JavaScript</option>
          <option value="python">Python</option>
        </select>
        <br />
        <div id="playground_code_container">
          <MonacoEditor
            language={codingLanguage}
            editorCode={value}
            setEditorCode={setValue}
          />
        </div>
        <div className="playground_prompt">
          <br />
          <label>What is your question</label>
          <br />
          <textarea
            id="playground_prompt_input"
            rows={4}
            value={userQuestion}
            onChange={(e) => setUserQuestion(e.target.value)}
          />
          <button onClick={handleClick}>Ask AI</button>
        </div>
      </div>
      <div className="playground_right_container">
        <div className="playground_correction">
          <label>Answer</label>
        </div>
      </div>
    </div>
  );
}
