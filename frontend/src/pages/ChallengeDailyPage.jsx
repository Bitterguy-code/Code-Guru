import { useEffect, useState } from "react";
import MonacoEditor from "../components/monacoEditor";
import Button from "react-bootstrap/Button";
import {
  getAPIDailyChallengeData,
  putAPIDailyChallengeAnswer,
} from "../utilities";
import ChallengeDisplay from "../components/challengeDisplay";
import parse from 'html-react-parser';


export default function ChallengeDailyPage() {
  const [dailyChallengeData, setDailyChallengeData] = useState();
  const [editorLanguage, setEditorLanguage] = useState("javascript");
  const [editorCode, setEditorCode] = useState("// Start typing your code ..");

  async function getData() {
    const data = await getAPIDailyChallengeData();
    setDailyChallengeData(data);
  }
  function setAPIAnswer() {
    if (dailyChallengeData) {
      putAPIDailyChallengeAnswer(dailyChallengeData.id, editorCode);
    }
  }

  useEffect(() => {
    getData();
  }, []);
  useEffect(() => {
    console.log(editorCode);
    setAPIAnswer();
  }, [editorCode]);



  return (
    <>
      <div className="flex h-200">
        {/* this holds 2 columns */}
        <section className="w-1/2 p-3  overflow-auto">
          {dailyChallengeData ? 
            <ChallengeDisplay data={dailyChallengeData} />
           : null}
        </section>




        <section className="w-1/2 p-3">
          <div className="mx-auto h-3/4 bg-white rounded-xl shadow-md">
            <div>
              <label>Choose a language:</label>
              <select
                value={editorLanguage}
                id="coding_language"
                onChange={(e) => setEditorLanguage(e.target.value)}
              >
                <option value="javascript">JavaScript</option>
                <option value="python">Python</option>
              </select>
            </div>
            <MonacoEditor
              language={editorLanguage}
              editorCode={editorCode}
              setEditorCode={setEditorCode}
            />
          </div>


          <div className="mx-auto h-1/4 p-4 sm:p-6 lg:p-8 bg-white rounded-xl shadow-md">
            <div className="flex flex-col gap-1">
              <div className="flex gap-4">
                <p>Version: {editorLanguage}</p>
                <Button>run</Button>
                <Button>submit</Button>
              </div>
              <div className="flex gap-2 bg-gray-100 px-1 py-0.5 rounded">
                <h1>Input: </h1>
                <h1>
                  {dailyChallengeData && editorLanguage == "javascript"?
                  dailyChallengeData.input_J
                  : dailyChallengeData && editorLanguage == "python"?
                    dailyChallengeData.input_P
                    : null
                  }
                </h1>
              </div>
              <div className="flex gap-2 bg-gray-100 px-1 py-0.5 rounded">
                <h1>Expected: </h1>
                <h1>
                  {dailyChallengeData && editorLanguage == "javascript"?
                    dailyChallengeData.output_J
                    : dailyChallengeData && editorLanguage == "python"?
                      dailyChallengeData.output_P
                      : null
                    }
                </h1>
              </div>
              <div className="flex gap-2 bg-gray-100 px-1 py-0.5 rounded">
                <h1>Output: </h1>
                <h1>undefined</h1>
              </div>
            </div>
          </div>

          
        </section>
      </div>
    </>
  );
}
