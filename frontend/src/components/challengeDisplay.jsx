import parse from 'html-react-parser';
import { vB20250501 } from './testChallengeHTML';


export default function ChallengeDisplay({htmlData}){
    console.log(htmlData)

    
    return(
      <>
        {/* <div dangerouslySetInnerHTML={{ __html: htmlData }} /> */}
        {/* {parse(htmlData)} */}
        {/* {vB20250501} */}

       

      {/* <section className="mx-auto p-4 sm:p-6 lg:p-8 bg-white rounded-xl shadow-md">
        <p className="text-base sm:text-lg mb-4 break-words">
          You have <code className="bg-gray-100 px-1 py-0.5 rounded">n</code> tasks and 
          <code className="bg-gray-100 px-1 py-0.5 rounded">m</code> workers. Each task has a strength requirement stored in a 
          <strong className="font-semibold"> 0-indexed </strong> integer array 
          <code className="bg-gray-100 px-1 py-0.5 rounded">tasks</code>, with the 
          <code className="bg-gray-100 px-1 py-0.5 rounded">i<sup>th</sup></code> task requiring 
          <code className="bg-gray-100 px-1 py-0.5 rounded">tasks[i]</code> strength. The strength of each worker is stored in a 
          <strong className="font-semibold"> 0-indexed </strong> integer array 
          <code className="bg-gray-100 px-1 py-0.5 rounded">workers</code>, with the 
          <code className="bg-gray-100 px-1 py-0.5 rounded">j<sup>th</sup></code> worker having 
          <code className="bg-gray-100 px-1 py-0.5 rounded">workers[j]</code> strength. Each worker can only be assigned to a 
          <strong className="font-semibold"> single </strong> task and must have a strength 
          <strong className="font-semibold"> greater than or equal </strong> to the task's requirement 
          (<code className="bg-gray-100 px-1 py-0.5 rounded">workers[j] &gt;= tasks[i]</code>).
        </p>

        <p className="text-base sm:text-lg mb-4 break-words">
          Additionally, you have 
          <code className="bg-gray-100 px-1 py-0.5 rounded">pills</code> magical pills that will 
          <strong className="font-semibold"> increase a worker's strength </strong> by 
          <code className="bg-gray-100 px-1 py-0.5 rounded">strength</code>. You can give at most one pill to each worker.
          Return the <strong className="font-semibold">maximum</strong> number of tasks that can be completed.
        </p>

        <div className="mb-6">
          <h2 className="text-lg font-bold text-indigo-700 mb-2">
            <strong className="block">Example 1:</strong>
          </h2>
          <pre className="bg-gray-50 border border-gray-200 rounded p-4 overflow-x-auto text-sm break-words">
            <strong className="block">Input:</strong>
            tasks = [3, 2, 1], workers = [0, 3, 3], pills = 1, strength = 1

            <strong className="block">Output:</strong>
            3

            <strong className="block">Explanation:</strong>
            - Give the magical pill to worker 0.{"\n"}
            - Assign worker 0 to task 2 (0 + 1 ≥ 1){"\n"}
            - Assign worker 1 to task 1 (3 ≥ 2){"\n"}
            - Assign worker 2 to task 0 (3 ≥ 3)
          </pre>
        </div>

        <div className="mb-6">
          <h2 className="text-lg font-bold text-indigo-700 mb-2">
            <strong className="block">Example 2:</strong>
          </h2>
          <pre className="bg-gray-50 border border-gray-200 rounded p-4 overflow-x-auto text-sm break-words">
            <strong className="block">Input:</strong>
            tasks = [5, 4], workers = [0, 0, 0], pills = 1, strength = 5

            <strong className="block">Output:</strong>
            1

            <strong className="block">Explanation:</strong>
            - Give the magical pill to worker 0.{"\n"}
            - Assign worker 0 to task 0 (0 + 5 ≥ 5)
          </pre>
        </div>

        <div className="mb-6">
          <h2 className="text-lg font-bold text-indigo-700 mb-2">
            <strong className="block">Example 3:</strong>
          </h2>
          <pre className="bg-gray-50 border border-gray-200 rounded p-4 overflow-x-auto text-sm break-words">
            <strong className="block">Input:</strong>
            tasks = [10, 15, 30], workers = [0, 10, 10, 10, 10], pills = 3, strength = 10

            <strong className="block">Output:</strong>
            2

            <strong className="block">Explanation:</strong>
            - Give the magical pill to worker 0 and worker 1.{"\n"}
            - Assign worker 0 to task 0 (0 + 10 ≥ 10){"\n"}
            - Assign worker 1 to task 1 (10 + 10 ≥ 15)
          </pre>
        </div>

        <div>
          <h2 className="text-lg font-bold text-indigo-700 mb-2">
            <strong className="block">Constraints:</strong>
          </h2>
          <ul className="list-disc pl-5 space-y-1 text-sm sm:text-base break-words">
            <li>
              <code className="bg-gray-100 px-1 py-0.5 rounded block">
                n == tasks.length
              </code>
            </li>
            <li>
              <code className="bg-gray-100 px-1 py-0.5 rounded block">
                m == workers.length
              </code>
            </li>
            <li>
              <code className="bg-gray-100 px-1 py-0.5 rounded block">
                1 &lt;= n, m &lt;= 5 * 10<sup>4</sup>
              </code>
            </li>
            <li>
              <code className="bg-gray-100 px-1 py-0.5 rounded block">
                0 &lt;= pills &lt;= m
              </code>
            </li>
            <li>
              <code className="bg-gray-100 px-1 py-0.5 rounded block">
                0 &lt;= tasks[i], workers[j], strength &lt;= 10<sup>9</sup>
              </code>
            </li>
          </ul>
        </div>
      </section> */}


      {/* <section className="mx-auto p-4 sm:p-6 lg:p-8 bg-white rounded-xl shadow-md">
        <p className="text-base sm:text-lg mb-4 break-words">
          You have <code className="bg-gray-100 px-1 py-0.5 rounded">n</code> tasks and
          <code className="bg-gray-100 px-1 py-0.5 rounded">m</code> workers. Each task has a strength requirement stored in a
          <strong className="font-semibold"> 0-indexed </strong> integer array
          <code className="bg-gray-100 px-1 py-0.5 rounded">tasks</code>, with the
          <code className="bg-gray-100 px-1 py-0.5 rounded">i<sup>th</sup></code> task requiring
          <code className="bg-gray-100 px-1 py-0.5 rounded">tasks[i]</code> strength to complete.
          <br />
          The strength of each worker is stored in a <strong className="font-semibold">0-indexed</strong> integer array
          <code className="bg-gray-100 px-1 py-0.5 rounded">workers</code>, with the
          <code className="bg-gray-100 px-1 py-0.5 rounded">j<sup>th</sup></code> worker having
          <code className="bg-gray-100 px-1 py-0.5 rounded">workers[j]</code> strength.
          <br />
          Each worker can only be assigned to a <strong className="font-semibold">single</strong> task and must have a strength
          <strong className="font-semibold"> greater than or equal </strong> to the task's requirement
          (<code className="bg-gray-100 px-1 py-0.5 rounded">workers[j] &gt;= tasks[i]</code>).
        </p>

        <p className="text-base sm:text-lg mb-4 break-words">
          Additionally, you have <code className="bg-gray-100 px-1 py-0.5 rounded">pills</code> magical pills that will
          <strong className="font-semibold"> increase a worker's strength </strong> by
          <code className="bg-gray-100 px-1 py-0.5 rounded">strength</code>. You can decide which workers receive the magical pills,
          however, you may only give each worker <strong className="font-semibold">at most one</strong> magical pill.
        </p>

        <p className="text-base sm:text-lg mb-6 break-words">
          Given the <strong className="font-semibold">0-indexed</strong> integer arrays
          <code className="bg-gray-100 px-1 py-0.5 rounded">tasks</code> and
          <code className="bg-gray-100 px-1 py-0.5 rounded">workers</code>, and the integers
          <code className="bg-gray-100 px-1 py-0.5 rounded">pills</code> and
          <code className="bg-gray-100 px-1 py-0.5 rounded">strength</code>, return the
          <em className="italic">maximum number of tasks that can be completed</em>.
        </p>

        <div className="mb-6">
          <h2 className="text-lg font-bold text-indigo-700 mb-2">
            <strong className="block">Example 1:</strong>
          </h2>
          <pre className="bg-gray-50 border border-gray-200 rounded p-4 overflow-x-auto text-sm break-words">
      <strong className="block">Input:</strong>
        tasks = [3, 2, 1], workers = [0, 3, 3], pills = 1, strength = 1

      <strong className="block">Output:</strong>
        3

      <strong className="block">Explanation:</strong>
      - Give the magical pill to worker 0.
      - Assign worker 0 to task 2 (0 + 1 >= 1)
      - Assign worker 1 to task 1 (3 >= 2)
      - Assign worker 2 to task 0 (3 >= 3)
          </pre>
        </div>

        <div className="mb-6">
          <h2 className="text-lg font-bold text-indigo-700 mb-2">
            <strong className="block">Example 2:</strong>
          </h2>
          <pre className="bg-gray-50 border border-gray-200 rounded p-4 overflow-x-auto text-sm break-words">
      <strong className="block">Input:</strong>
        tasks = [5, 4], workers = [0, 0, 0], pills = 1, strength = 5

      <strong className="block">Output:</strong>
        1

      <strong className="block">Explanation:</strong>
      - Give the magical pill to worker 0.
      - Assign worker 0 to task 0 (0 + 5 >= 5)
          </pre>
        </div>

        <div className="mb-6">
          <h2 className="text-lg font-bold text-indigo-700 mb-2">
            <strong className="block">Example 3:</strong>
          </h2>
          <pre className="bg-gray-50 border border-gray-200 rounded p-4 overflow-x-auto text-sm break-words">
      <strong className="block">Input:</strong>
        tasks = [10, 15, 30], workers = [0, 10, 10, 10, 10], pills = 3, strength = 10

      <strong className="block">Output:</strong>
        2

      <strong className="block">Explanation:</strong>
      - Give the magical pill to worker 0 and worker 1.
      - Assign worker 0 to task 0 (0 + 10 >= 10)
      - Assign worker 1 to task 1 (10 + 10 >= 15)
      - The last pill is not given because it will not make any worker strong enough
        for the last task.
          </pre>
        </div>

        <div>
          <h2 className="text-lg font-bold text-indigo-700 mb-2">
            <strong className="block">Constraints:</strong>
          </h2>
          <ul className="list-disc pl-5 space-y-1 text-sm sm:text-base break-words">
            <li>
              <code className="bg-gray-100 px-1 py-0.5 rounded block">
                n == tasks.length
              </code>
            </li>
            <li>
              <code className="bg-gray-100 px-1 py-0.5 rounded block">
                m == workers.length
              </code>
            </li>
            <li>
              <code className="bg-gray-100 px-1 py-0.5 rounded block">
                1 &lt;= n, m &lt;= 5 * 10<sup>4</sup>
              </code>
            </li>
            <li>
              <code className="bg-gray-100 px-1 py-0.5 rounded block">
                0 &lt;= pills &lt;= m
              </code>
            </li>
            <li>
              <code className="bg-gray-100 px-1 py-0.5 rounded block">
                0 &lt;= tasks[i], workers[j], strength &lt;= 10<sup>9</sup>
              </code>
            </li>
          </ul>
        </div>
      </section> */}

      {/* <section className="p-4 sm:p-6 lg:p-8 bg-white rounded-xl shadow-md">
        <p className="text-base sm:text-lg mb-4 break-words">
          You have <code className="bg-gray-100 px-1 py-0.5 rounded">n</code> tasks and{" "}
          <code className="bg-gray-100 px-1 py-0.5 rounded">m</code> workers. Each task has a strength{" "}
          requirement stored in a <strong className="font-semibold">0-indexed</strong> integer array{" "}
          <code className="bg-gray-100 px-1 py-0.5 rounded">tasks</code>, with the{" "}
          <code className="bg-gray-100 px-1 py-0.5 rounded">i<sup>th</sup></code> task requiring{" "}
          <code className="bg-gray-100 px-1 py-0.5 rounded">tasks[i]</code> strength to{"\n"}
          complete. The strength of each worker is stored in a{" "}
          <strong className="font-semibold">0-indexed</strong> integer array{" "}
          <code className="bg-gray-100 px-1 py-0.5 rounded">workers</code>, with the{" "}
          <code className="bg-gray-100 px-1 py-0.5 rounded">j<sup>th</sup></code> worker having{" "}
          <code className="bg-gray-100 px-1 py-0.5 rounded">workers[j]</code> strength. Each worker{" "}
          can only be assigned to a <strong className="font-semibold">single</strong> task and must{" "}
          have a strength <strong className="font-semibold">greater than or equal</strong> to the{" "}
          task’s strength requirement (i.e.,{" "}
          <code className="bg-gray-100 px-1 py-0.5 rounded">workers[j] &gt;= tasks[i]</code>).
        </p>

        <p className="text-base sm:text-lg mb-4 break-words">
          Additionally, you have{" "}
          <code className="bg-gray-100 px-1 py-0.5 rounded">pills</code> magical pills that will{" "}
          <strong className="font-semibold">increase a worker’s strength</strong> by{" "}
          <code className="bg-gray-100 px-1 py-0.5 rounded">strength</code>. You can decide which{" "}
          workers receive the magical pills, however, you may only give each worker{" "}
          <strong className="font-semibold">at most one</strong> magical pill.
        </p>

        <p className="text-base sm:text-lg mb-6 break-words">
          Given the <strong className="font-semibold">0-indexed</strong> integer arrays{" "}
          <code className="bg-gray-100 px-1 py-0.5 rounded">tasks</code> and{" "}
          <code className="bg-gray-100 px-1 py-0.5 rounded">workers</code> and the integers{" "}
          <code className="bg-gray-100 px-1 py-0.5 rounded">pills</code> and{" "}
          <code className="bg-gray-100 px-1 py-0.5 rounded">strength</code>, return{" "}
          <em>
            the <strong className="font-semibold">maximum</strong> number of tasks that can be
            completed.
          </em>
        </p>

        <div className="mb-6">
          <h2 className="text-lg font-bold text-indigo-700 mb-2">
            <strong className="block">Example 1:</strong>
          </h2>
          <pre className="bg-gray-50 border border-gray-200 rounded p-4 overflow-x-auto text-sm break-words">
            <strong className="block">Input:</strong>
            tasks = [3, 2, 1], workers = [0, 3, 3], pills = 1, strength = 1
            {"\n"}
            <strong className="block">Output:</strong>
            3
            {"\n"}
            <strong className="block">Explanation:</strong>
            We can assign the magical pill and tasks as follows:
            {"\n"}- Give the magical pill to worker 0.
            {"\n"}- Assign worker 0 to task 2 (0 + 1 &gt;= 1)
            {"\n"}- Assign worker 1 to task 1 (3 &gt;= 2)
            {"\n"}- Assign worker 2 to task 0 (3 &gt;= 3)
          </pre>
        </div>

        <div className="mb-6">
          <h2 className="text-lg font-bold text-indigo-700 mb-2">
            <strong className="block">Example 2:</strong>
          </h2>
          <pre className="bg-gray-50 border border-gray-200 rounded p-4 overflow-x-auto text-sm break-words">
            <strong className="block">Input:</strong>
            tasks = [5, 4], workers = [0, 0, 0], pills = 1, strength = 5
            {"\n"}
            <strong className="block">Output:</strong>
            1
            {"\n"}
            <strong className="block">Explanation:</strong>
            - Give the magical pill to worker 0.
            {"\n"}- Assign worker 0 to task 0 (0 + 5 &gt;= 5)
          </pre>
        </div>

        <div className="mb-6">
          <h2 className="text-lg font-bold text-indigo-700 mb-2">
            <strong className="block">Example 3:</strong>
          </h2>
          <pre className="bg-gray-50 border border-gray-200 rounded p-4 overflow-x-auto text-sm break-words">
            <strong className="block">Input:</strong>
            tasks = [10, 15, 30], workers = [0, 10, 10, 10, 10], pills = 3, strength = 10
            {"\n"}
            <strong className="block">Output:</strong>
            2
            {"\n"}
            <strong className="block">Explanation:</strong>
            - Give the magical pill to worker 0 and worker 1.
            {"\n"}- Assign worker 0 to task 0 (0 + 10 &gt;= 10)
            {"\n"}- Assign worker 1 to task 1 (10 + 10 &gt;= 15)
            {"\n"}- The last pill is not given because it will not make any worker strong enough
            for the last task.
          </pre>
        </div>

        <div>
          <h2 className="text-lg font-bold text-indigo-700 mb-2">
            <strong className="block">Constraints:</strong>
          </h2>
          <ul className="list-disc pl-5 space-y-1 text-sm sm:text-base break-words">
            <li>
              <code className="bg-gray-100 px-1 py-0.5 rounded block">
                n == tasks.length
              </code>
            </li>
            <li>
              <code className="bg-gray-100 px-1 py-0.5 rounded block">
                m == workers.length
              </code>
            </li>
            <li>
              <code className="bg-gray-100 px-1 py-0.5 rounded block">
                1 &lt;= n, m &lt;= 5 * 10<sup>4</sup>
              </code>
            </li>
            <li>
              <code className="bg-gray-100 px-1 py-0.5 rounded block">
                0 &lt;= pills &lt;= m
              </code>
            </li>
            <li>
              <code className="bg-gray-100 px-1 py-0.5 rounded block">
                0 &lt;= tasks[i], workers[j], strength &lt;= 10<sup>9</sup>
              </code>
            </li>
          </ul>
        </div>
      </section> */}















  

      </>
    )
}