import * as monaco from "monaco-editor";
import { useEffect, useState, useRef } from "react";
import MonacoEditor from "../components/monacoEditor";
import Button from 'react-bootstrap/Button';
import { getDailyChallengeData } from "../utilities";


export default function ChallengesHomePage() {


    useEffect(()=>{
      getDailyChallengeData()
    },[])

    return ( 
    <>


  
  <div className="flex">{/* this holds 2 columns */}


    {/*columns: 1/2 */}
    <section className=" mx-auto p-4 sm:p-6 lg:p-8 bg-white rounded-xl shadow-md">
      <p className="text-base sm:text-lg mb-4 break-words">
        Given an array 
        <code className="bg-gray-100 px-1 py-0.5 rounded ">nums</code> of integers,
        return how many of them contain an
        <strong className=" font-semibold"> even number </strong>
        of digits.
      </p>

      <div className="mb-6">
      <h2 className="text-lg font-bold text-indigo-700 mb-2">
        <strong className="block">Example 1:</strong>
      </h2>
      <pre className="bg-gray-50 border border-gray-200 rounded p-4 overflow-x-auto text-sm break-words">
        <strong className="block">Input:</strong>
          nums = [12, 345, 2, 6, 7896]

        <strong className="block">Output:</strong>
          2

        <strong className="block">Explanation:</strong>
        <p>12 contains 2 digits (even number of digits).</p>
        <p>345 contains 3 digits (odd number of digits).</p>
        <p>2 contains 1 digit (odd number of digits).</p>
        <p>6 contains 1 digit (odd number of digits).</p>
        <p>7896 contains 4 digits (even number of digits).</p>
        <p>Therefore only 12 and 7896 contain an even number of digits.</p>
      </pre>
      </div>

      <div className="mb-6">
      <h2 className="text-lg font-bold text-indigo-700 mb-2">
        <strong className="block">Example 2:</strong>
      </h2>
      <pre className="bg-gray-50 border border-gray-200 rounded p-4 overflow-x-auto text-sm break-words">
        <strong className="block">Input:</strong>
        nums = [555, 901, 482, 1771]

        <strong className="block">Output:</strong>
          1

          <strong className="block">Explanation:</strong>
          <strong className="block">Only 1771 contains an even number of digits.</strong>
      </pre>
      </div>

      <div>
        <h2 className="text-lg font-bold text-indigo-700 mb-2">
          <strong className="block">Constraints:</strong>
        </h2>
        <ul className="list-disc pl-5 space-y-1 text-sm sm:text-base break-words">
          <li>
            <code className="bg-gray-100 px-1 py-0.5 rounded block">
              1 &lt;= nums.length &lt;= 500
            </code>
          </li>
          <li>
            <code className="bg-gray-100 px-1 py-0.5 rounded block">
              1 &lt;= nums[i] &lt;= 10<sup>5</sup>
            </code>
          </li>
        </ul>
      </div>
    </section>


    {/* columns: 2/2*/}
    <section className="w-1/2">

      {/* row: 1/2*/}
      <div className="max-w-3xl mx-auto h-3/4 p-4 sm:p-6 lg:p-8 bg-white rounded-xl shadow-md">
        
      {/* <div id="playground_code_container"></div> */}
        <MonacoEditor language={"javascript"}/>
        
      </div>

      {/* row: 2/2*/}
      <div className="max-w-3xl mx-auto h-1/4 p-4 sm:p-6 lg:p-8 bg-white rounded-xl shadow-md">
        
        <div className="flex flex-col gap-1">
          
          <div className="flex gap-2">
             <Button>run</Button>
             <Button>submit</Button>
          </div>
          <div className="flex gap-2 bg-gray-100 px-1 py-0.5 rounded">
             <h1 >Input:</h1>
             <h1>[12,345,2,6,7896]</h1>
          </div>
          <div className="flex gap-2 bg-gray-100 px-1 py-0.5 rounded">
             <h1 >Output: </h1>
             <h1>undefined</h1>

          </div>
          <div className="flex gap-2 bg-gray-100 px-1 py-0.5 rounded">
             <h1 >Expected: </h1>
             <h1>2</h1>

          </div>
        
      
        
        {/* <ul className="list-disc pl-5 space-y-1 text-sm sm:text-base break-words">
          <li>
            <code className="bg-gray-100 px-1 py-0.5 rounded block">
              1 &lt;= nums.length &lt;= 500
            </code>
          </li>
          <li>
            <code className="bg-gray-100 px-1 py-0.5 rounded block">
              1 &lt;= nums[i] &lt;= 10<sup>5</sup>
            </code>
          </li>
        </ul> */}
        </div>
      </div>
    </section>
  </div>
  
      
    </>
  )
};
