import "./playground.css";
import MonacoEditor from "../components/monacoEditor";

import { useState, useRef } from "react";

export default function PlaygroundPage() {
  const editorRef = useRef(null); //useRef used for editor because don't want it to be re-rendered
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
    console.log("the value is")
    console.log(value);
    console.log("the user question is")
    console.log(userQuestion);
  }; //TODO: send request to api with value, question. get answer

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
          <MonacoEditor language={codingLanguage} value={value} />
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
