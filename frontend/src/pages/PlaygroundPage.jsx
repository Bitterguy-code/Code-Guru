import "./playground.css";
import MonacoEditor from "../components/monacoEditor";
import { useState } from "react";
import { putAPIPlaygroundAnswer } from "../utilities";
import parse from "html-react-parser";

export default function PlaygroundPage() {
  const [value, setValue] = useState(`function hello() {
	console.log('Hello world!');
    }

hello();`);
  const [codingLanguage, setCodingLanguage] = useState("javascript");
  const [userQuestion, setUserQuestion] = useState("");
  const [playgroundAnswer, setPlaygroundAnswer] = useState();

  // On Ask AI submit, get answer from OpenAI
  const handleClick = async () => {
    setPlaygroundAnswer("Loading...");
    // console.log(value);
    // console.log(userQuestion);
    // console.log(codingLanguage);
    const result = await putAPIPlaygroundAnswer(
      codingLanguage,
      value,
      userQuestion
    );
    setPlaygroundAnswer(result);
  };

  return (
    <div className="playground_container">
      <div className="playground_left_container">
        
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
          

          <section className="flex gap-2">
          <button onClick={handleClick}>Ask AI</button>
          <label>Choose a language:</label>

            <select
              value={codingLanguage}
              id="coding_language"
              onChange={(e) => setCodingLanguage(e.target.value)}
            >
              <option value="javascript">JavaScript</option>
              <option value="python">Python</option>
            </select>
          </section>
          
        </div>
      </div>
      <div className="playground_right_container ">
        <div className="playground_correction">
          <label>Answer</label>
          {/* {parse(playgroundAnswer)} */}

          {/* <section>
              {playgroundAnswer}
            </section> */}
          <section className="h-170 overflow-auto">
            {playgroundAnswer
              ? playgroundAnswer == "loading..."
                ? playgroundAnswer
                : parse(playgroundAnswer)
              : null}
          </section>

          {/* <> <p className="text-base sm:text-lg mb-4 break-words"> Your function currently logs <code className="bg-gray-100 px-1 py-0.5 rounded">'Hello world!'</code> to the console. To make it better, consider adding flexibility by allowing a custom greeting message and returning the message instead of just logging it. This enhances reusability and makes the function more versatile. </p> <pre className="bg-gray-50 border border-gray-200 rounded p-4 overflow-x-auto text-sm break-words"> <strong className="block">Improved Version:</strong> {`function hello(name = 'world') { const message = \`Hello \${name}!\`; console.log(message); return message; } hello(); // Logs "Hello world!" hello('Alice'); // Logs "Hello Alice!" `} </pre> <p className="text-base sm:text-lg mb-4 break-words"> <strong className="font-semibold">What's changed:</strong> The function now accepts a <code className="bg-gray-100 px-1 py-0.5 rounded">name</code> parameter (default is <code className="bg-gray-100 px-1 py-0.5 rounded">'world'</code>). It returns the greeting, making it suitable for more than just console output. </p> <p className="text-base sm:text-lg mb-4 break-words"> <strong className="font-semibold">Further improvements:</strong> Depending on your needs, you could: <ul className="list-disc pl-5 space-y-1 text-sm sm:text-base"> <li>Add validation to ensure <code className="bg-gray-100 px-1 py-0.5 rounded">name</code> is a string.</li> <li>Support localization or additional formatting.</li> <li>Integrate with UI components if used in React.</li> </ul> </p> </> */}
          {/* <>
  <p className="text-base sm:text-lg mb-4 break-words">
    Here is a basic JavaScript function that prints <code className="bg-gray-100 px-1 py-0.5 rounded">'Hello world!'</code> to the console:
  </p>

  <pre className="bg-gray-50 border border-gray-200 rounded p-4 overflow-x-auto text-sm break-words">
    <code>
{`function hello() {
  console.log('Hello world!');
}

hello();`}
    </code>
  </pre>

  <p className="text-base sm:text-lg mb-4 break-words">
    <span className="font-semibold text-indigo-700">Note:</span> The code above defines a function called
    <code className="bg-gray-100 px-1 py-0.5 rounded mx-1">hello</code> which logs the message "Hello world!" to your browser's console. The function is then called directly afterwards. This is a fundamental example commonly used for testing environments or learning syntax in JavaScript.
  </p>
</> */}

          {/* <>
  <p className="text-base sm:text-lg mb-4 break-words">
    You can improve your JavaScript function to make it more flexible and reusable by allowing it to accept a message as an argument, instead of only printing <code className="bg-gray-100 px-1 py-0.5 rounded">Hello world!</code>. This way, you can use the function to print any message you want.
  </p>

  <pre className="bg-gray-50 border border-gray-200 rounded p-4 overflow-x-auto text-sm break-words mb-6">
    <strong className="block">Improved Example:</strong>
    {`
function hello(message) {
  console.log(message);
}

hello('Hello world!');
hello('Welcome to my app!');
    `}
  </pre>

  <p className="text-base sm:text-lg mb-4 break-words">
    <strong className="font-semibold">Why is this better?</strong><br/>
    - You can reuse the function for different messages.<br/>
    - The function is more readable and easier to update.<br/>
    - It follows the <em>Single Responsibility Principle</em>, making your code cleaner and simpler to test.
  </p>
</> */}

          {/* <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700">
      <div className="bg-gray-900 rounded-lg shadow-2xl p-8 max-w-xl w-full border-2 border-gray-700">
        <h2 className="text-2xl font-bold text-cyan-400 mb-6 font-mono">JavaScript Example</h2>
        <pre className="bg-gray-800 rounded-md p-6 overflow-x-auto mb-8 border border-gray-700">
          <code className="text-green-300 text-sm leading-loose font-mono">
{`function hello() {
  console.log('Hello world!');
}

hello();`}
          </code>
        </pre>
        <div className="bg-cyan-900 text-cyan-200 p-4 rounded-lg shadow-inner font-mono text-base">
          {/* User question is not clear, so this box remains intentionally empty 
          <span>User question is unclear: "sdjfjsd"</span>
        </div>
      </div>
    </div> */}
          {/* <>
  <p className="text-base sm:text-lg mb-4 break-words">
    Here is an improved version of your JavaScript function. This new version is more flexible, allows you to display a custom message by accepting an argument, and defaults to <code className="bg-gray-100 px-1 py-0.5 rounded">'Hello world!'</code> if no message is provided.
  </p>
  <pre className="bg-gray-50 border border-gray-200 rounded p-4 overflow-x-auto text-sm break-words">
    <strong className="block">Improved Code:</strong>
    {`
function hello(message = 'Hello world!') {
  console.log(message);
}

hello(); // Output: Hello world!
hello('Welcome to coding!'); // Output: Welcome to coding!
    `}
  </pre>
  <p className="text-base sm:text-lg mb-4 break-words">
    <strong className="font-semibold">What's better?</strong>
    <ul className="list-disc pl-5 space-y-1 mt-2">
      <li>Accepts an optional <code className="bg-gray-100 px-1 py-0.5 rounded">message</code> so you can reuse the function for different greetings.</li>
      <li>Defaults to <code className="bg-gray-100 px-1 py-0.5 rounded">'Hello world!'</code> if no custom message is provided.</li>
      <li>Enhances reusability and flexibility for future development.</li>
    </ul>
  </p>
</> */}
        </div>
      </div>
    </div>
  );
}
