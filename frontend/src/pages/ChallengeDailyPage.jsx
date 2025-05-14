import "./challengedaily.css";
import { useEffect, useState } from "react";
import MonacoEditor from "../components/monacoEditor";
import Button from "react-bootstrap/Button";
import {
  getAPIDailyChallengeData,
  putAPIDailyChallengeAnswer,
} from "../utilities";
import ChallengeDisplay from "../components/challengeDisplay";

export default function ChallengeDailyPage() {
  const [dailyChallengeData, setDailyChallengeData] = useState();
  const [editorLanguage, setEditorLanguage] = useState("javascript");
  const [editorCode, setEditorCode] = useState("// Start typing your code ..");
  const [userCode, setUserCode] = useState();

  async function getData() {
    const data = await getAPIDailyChallengeData();
    setDailyChallengeData(data);
  }
  async function setAPIAnswer() {
    setUserCode({ userCodeResult: "loading..." });
    const result = await putAPIDailyChallengeAnswer(
      dailyChallengeData.id,
      editorCode,
      editorLanguage
    );
    setUserCode(result);
  }
  ("Need to set up a way to stop spam clicking, because every click creates ain't you API query");

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    console.log(userCode);
  }, [userCode]);

  //while dailyChallengeData and user has submitted code
  //check if output (according to language) is equal to user's code output
  //return green div if correct, red div if false
  const correctAnswer =
    dailyChallengeData && userCode
      ? (editorLanguage == "javascript"
          ? dailyChallengeData.output_J
          : userCode.userCodeResult) == userCode.userCodeResult
        ? "bg-green-200"
        : "bg-red-200"
      : null;

  return (
    <div className="daily_challenge_container">
      <div className="flex flex-col sm:flex-row sm:h-200">
        {/* this holds 2 columns */}
        <section className="p-3  overflow-auto  w-full sm:w-1/2">
          {dailyChallengeData ? (
            <ChallengeDisplay data={dailyChallengeData} />
          ) : null}
        </section>

        <section className="p-3 w-full sm:w-1/2">
          <div className="mx-auto h-3/4 bg-white rounded-xl shadow-md">
            
            <MonacoEditor
              language={editorLanguage}
              editorCode={editorCode}
              setEditorCode={setEditorCode}
            />
          </div>

          <div className="mx-auto h-1/4 p-4 sm:p-6 lg:p-8 bg-white rounded-xl shadow-md">
            <div className="flex flex-col gap-1">


              <div className="flex gap-2">
                <button onClick={setAPIAnswer}>Run</button>

                <section>
                  <label>Choose a language:</label>
                  <select
                    value={editorLanguage}
                    id="coding_language"
                    onChange={(e) => setEditorLanguage(e.target.value)}
                  >
                    <option value="javascript">JavaScript</option>
                    <option value="python">Python</option>
                  </select>
                </section>
                
              </div>


              <div className="flex gap-2 bg-gray-100 px-1 py-0.5 rounded">
                <h1>Input: </h1>
                <h1>
                  {dailyChallengeData && editorLanguage == "javascript"
                    ? dailyChallengeData.input_J
                    : dailyChallengeData && editorLanguage == "python"
                    ? dailyChallengeData.input_P
                    : null}
                </h1>
              </div>
              <div className="flex gap-2 bg-gray-100 px-1 py-0.5 rounded">
                <h1>Expected: </h1>
                <h1>
                  {dailyChallengeData && editorLanguage == "javascript"
                    ? dailyChallengeData.output_J
                    : dailyChallengeData && editorLanguage == "python"
                    ? dailyChallengeData.output_P
                    : null}
                </h1>
              </div>
              <div
                className={`flex gap-2 bg-gray-100 px-1 py-0.5 rounded ${correctAnswer}`}
              >
                <h1>Output: </h1>
                <h1>{userCode ? userCode.userCodeResult : null}</h1>
              </div>
            </div>
          </div>


        </section>
      </div>
    </div>
  );
}
