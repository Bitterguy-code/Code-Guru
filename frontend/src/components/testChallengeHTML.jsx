export const vA20250430 =(
    <section className=" p-4 sm:p-6 lg:p-8 bg-white rounded-xl shadow-md">
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
)

export const vB20250430 = (
    <section className="mx-auto h-full p-4 sm:p-6 lg:p-8 bg-white rounded-xl shadow-md">
  <p className="text-base sm:text-lg mb-4 break-words">
    Given an array <code className="bg-gray-100 px-1 py-0.5 rounded">nums</code> of integers,
    return how many of them contain an <strong className="font-semibold">even number</strong> of digits.
  </p>

  <div className="mb-6">
    <h2 className="text-lg font-bold text-indigo-700 mb-2">
      <strong className="block">Example 1:</strong>
    </h2>
    <pre className="bg-gray-50 border border-gray-200 rounded p-4 overflow-x-auto text-sm break-words">
      <strong className="block">Input:</strong> nums = [12, 345, 2, 6, 7896]
      {"\n"}
      <strong className="block">Output:</strong> 2
      {"\n"}
      <strong className="block">Explanation:</strong>
      12 contains 2 digits (even number of digits).
      {"\n"}345 contains 3 digits (odd number of digits).
      {"\n"}2 contains 1 digit (odd number of digits).
      {"\n"}6 contains 1 digit (odd number of digits).
      {"\n"}7896 contains 4 digits (even number of digits).
      {"\n"}Therefore, only 12 and 7896 contain an even number of digits.
    </pre>
  </div>

  <div className="mb-6">
    <h2 className="text-lg font-bold text-indigo-700 mb-2">
      <strong className="block">Example 2:</strong>
    </h2>
    <pre className="bg-gray-50 border border-gray-200 rounded p-4 overflow-x-auto text-sm break-words">
      <strong className="block">Input:</strong> nums = [555, 901, 482, 1771]
      {"\n"}
      <strong className="block">Output:</strong> 1
      {"\n"}
      <strong className="block">Explanation:</strong>
      Only 1771 contains an even number of digits.
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
)

export const vA20250501 = (
    <section className="mx-auto p-4 sm:p-6 lg:p-8 bg-white rounded-xl shadow-md">
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
    </section>
)

export const vB20250501 = (
    <section className="mx-auto p-4 sm:p-6 lg:p-8 bg-white rounded-xl shadow-md">
    <p className="text-base sm:text-lg mb-4 break-words">
      You have <code className="bg-gray-100 px-1 py-0.5 rounded">n</code> tasks and
      <code className="bg-gray-100 px-1 py-0.5 rounded">m</code> workers. Each task has a strength
      requirement stored in a <strong className="font-semibold">0-indexed</strong> integer array
      <code className="bg-gray-100 px-1 py-0.5 rounded">tasks</code>, with the
      <code className="bg-gray-100 px-1 py-0.5 rounded">i<sup>th</sup></code> task requiring
      <code className="bg-gray-100 px-1 py-0.5 rounded">tasks[i]</code> strength to complete. The strength of each worker is stored in a
      <strong className="font-semibold">0-indexed</strong> integer array
      <code className="bg-gray-100 px-1 py-0.5 rounded">workers</code>, with the
      <code className="bg-gray-100 px-1 py-0.5 rounded">j<sup>th</sup></code> worker having
      <code className="bg-gray-100 px-1 py-0.5 rounded">workers[j]</code> strength. Each worker can only be assigned to a
      <strong className="font-semibold">single</strong> task and must
      have a strength <strong className="font-semibold">greater than or equal</strong> to the task’s strength requirement (i.e.,
      <code className="bg-gray-100 px-1 py-0.5 rounded">workers[j] &gt;= tasks[i]</code>).
    </p>

    <p className="text-base sm:text-lg mb-4 break-words">
      Additionally, you have
      <code className="bg-gray-100 px-1 py-0.5 rounded">pills</code> magical pills that will
      <strong className="font-semibold">increase a worker’s strength</strong> by
      <code className="bg-gray-100 px-1 py-0.5 rounded">strength</code>. You can decide which
      workers receive the magical pills, however, you may only give each worker
      <strong className="font-semibold">at most one</strong> magical pill.
    </p>

    <p className="text-base sm:text-lg mb-6 break-words">
      Given the <strong className="font-semibold">0-indexed</strong> integer arrays
      <code className="bg-gray-100 px-1 py-0.5 rounded">tasks</code> and
      <code className="bg-gray-100 px-1 py-0.5 rounded">workers</code> and the integers
      <code className="bg-gray-100 px-1 py-0.5 rounded">pills</code> and
      <code className="bg-gray-100 px-1 py-0.5 rounded">strength</code>, return
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
        <strong className="block">Output:</strong>
        3
        <strong className="block">Explanation:</strong>
        We can assign the magical pill and tasks as follows:<br/>
        - Give the magical pill to worker 0.<br/>
        - Assign worker 0 to task 2 (0 + 1 &gt;= 1)<br/>
        - Assign worker 1 to task 1 (3 &gt;= 2)<br/>
        - Assign worker 2 to task 0 (3 &gt;= 3)<br/>
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
        - Assign worker 0 to task 0 (0 + 5 &gt;= 5)
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
        - Give the magical pill to worker 0 and worker 1.<br/>
        - Assign worker 0 to task 0 (0 + 10 &gt;= 10)<br/>
        - Assign worker 1 to task 1 (10 + 10 &gt;= 15)<br/>
        - The last pill is not given because it will not make any worker strong enough for the last task.<br/>
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
  </section>
)

export const vC20250501 = (
  <section className="mx-auto p-4 sm:p-6 lg:p-8 bg-white rounded-xl shadow-md">
  <p className="text-base sm:text-lg mb-4 break-words">
    You have <code className="bg-gray-100 px-1 py-0.5 rounded">n</code> tasks and
    <code className="bg-gray-100 px-1 py-0.5 rounded">m</code> workers. Each task has a strength
    requirement stored in a <strong className="font-semibold">0-indexed</strong> integer array
    <code className="bg-gray-100 px-1 py-0.5 rounded">tasks</code>, with the
    <code className="bg-gray-100 px-1 py-0.5 rounded">i<sup>th</sup></code> task requiring
    <code className="bg-gray-100 px-1 py-0.5 rounded">tasks[i]</code> strength to complete. The strength of each worker is stored in a
    <strong className="font-semibold">0-indexed</strong> integer array
    <code className="bg-gray-100 px-1 py-0.5 rounded">workers</code>, with the
    <code className="bg-gray-100 px-1 py-0.5 rounded">j<sup>th</sup></code> worker having
    <code className="bg-gray-100 px-1 py-0.5 rounded">workers[j]</code> strength. Each worker can only be assigned to a
    <strong className="font-semibold">single</strong> task and must
    have a strength <strong className="font-semibold">greater than or equal</strong> to the task’s strength requirement (i.e.,
    <code className="bg-gray-100 px-1 py-0.5 rounded">workers[j] &gt;= tasks[i]</code>).
  </p>

  <p className="text-base sm:text-lg mb-4 break-words">
    Additionally, you have
    <code className="bg-gray-100 px-1 py-0.5 rounded">pills</code> magical pills that will
    <strong className="font-semibold">increase a worker’s strength</strong> by
    <code className="bg-gray-100 px-1 py-0.5 rounded">strength</code>. You can decide which
    workers receive the magical pills, however, you may only give each worker
    <strong className="font-semibold">at most one</strong> magical pill.
  </p>

  <p className="text-base sm:text-lg mb-6 break-words">
    Given the <strong className="font-semibold">0-indexed</strong> integer arrays
    <code className="bg-gray-100 px-1 py-0.5 rounded">tasks</code> and
    <code className="bg-gray-100 px-1 py-0.5 rounded">workers</code> and the integers
    <code className="bg-gray-100 px-1 py-0.5 rounded">pills</code> and
    <code className="bg-gray-100 px-1 py-0.5 rounded">strength</code>, return
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
      <strong className="block">Output:</strong>
      3
      <strong className="block">Explanation:</strong>
      We can assign the magical pill and tasks as follows:<br/>
      - Give the magical pill to worker 0.<br/>
      - Assign worker 0 to task 2 (0 + 1 &gt;= 1)<br/>
      - Assign worker 1 to task 1 (3 &gt;= 2)<br/>
      - Assign worker 2 to task 0 (3 &gt;= 3)<br/>
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
      - Give the magical pill to worker 0.<br/>
      - Assign worker 0 to task 0 (0 + 5 &gt;= 5)<br/>
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
      - Give the magical pill to worker 0 and worker 1.<br/>
      - Assign worker 0 to task 0 (0 + 10 &gt;= 10)<br/>
      - Assign worker 1 to task 1 (10 + 10 &gt;= 15)<br/>
      - The last pill is not given because it will not make any worker strong enough for the last task.<br/>
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
</section>
)


export const vA20250502= (
  <section className="mx-auto p-4 sm:p-6 lg:p-8 bg-white rounded-xl shadow-md">
  <p className="text-base sm:text-lg mb-4 break-words">
    There are <code className="bg-gray-100 px-1 py-0.5 rounded">n</code> dominoes in a line, and we place each domino vertically upright.
    In the beginning, we simultaneously push some of the dominoes either to the left or to the right.
  </p>

  <p className="text-base sm:text-lg mb-4 break-words">
    After each second, each domino that is falling to the left pushes the adjacent domino on the left.
    Similarly, the dominoes falling to the right push their adjacent dominoes standing on the right.
  </p>

  <p className="text-base sm:text-lg mb-4 break-words">
    When a vertical domino has dominoes falling on it from both sides, it stays still due to the balance of the forces.
  </p>

  <p className="text-base sm:text-lg mb-4 break-words">
    For the purposes of this question, we will consider that a falling domino expends no additional force to a falling or already fallen domino.
  </p>

  <p className="text-base sm:text-lg mb-4 break-words">
    You are given a string <code className="bg-gray-100 px-1 py-0.5 rounded">dominoes</code> representing the initial state where:
  </p>

  <ul className="list-disc pl-5 space-y-1 text-sm sm:text-base break-words mb-6">
    <li>
      <code className="bg-gray-100 px-1 py-0.5 rounded block">
        dominoes[i] = 'L'
      </code>
      if the <code className="bg-gray-100 px-1 py-0.5 rounded">i<sup>th</sup></code> domino has been pushed to the left,
    </li>
    <li>
      <code className="bg-gray-100 px-1 py-0.5 rounded block">
        dominoes[i] = 'R'
      </code>
      if the <code className="bg-gray-100 px-1 py-0.5 rounded">i<sup>th</sup></code> domino has been pushed to the right,
    </li>
    <li>
      <code className="bg-gray-100 px-1 py-0.5 rounded block">
        dominoes[i] = '.'
      </code>
      if the <code className="bg-gray-100 px-1 py-0.5 rounded">i<sup>th</sup></code> domino has not been pushed.
    </li>
  </ul>

  <div className="mb-6">
    <h2 className="text-lg font-bold text-indigo-700 mb-2">
      <strong className="block">Example 1:</strong>
    </h2>
    <pre className="bg-gray-50 border border-gray-200 rounded p-4 overflow-x-auto text-sm break-words">
      <strong className="block">Input:</strong>
      dominoes = "RR.L"
      <strong className="block">Output:</strong>
      RR.L
      <strong className="block">Explanation:</strong>
      The first domino expends no additional force on the second domino.
    </pre>
  </div>

  <div className="mb-6">
    <h2 className="text-lg font-bold text-indigo-700 mb-2">
      <strong className="block">Example 2:</strong>
    </h2>
    <img
      className="mb-4 rounded"
      src="https://s3-lc-upload.s3.amazonaws.com/uploads/2018/05/18/domino.png"
      alt="Domino falling example"
      style={{ height: 196, width: 512 }}
    />
    <pre className="bg-gray-50 border border-gray-200 rounded p-4 overflow-x-auto text-sm break-words">
      <strong className="block">Input:</strong>
      dominoes = ".L.R...LR..L.."
      <strong className="block">Output:</strong>
      LL.RR.LLRRLL..
    </pre>
  </div>

  <div>
    <h2 className="text-lg font-bold text-indigo-700 mb-2">
      <strong className="block">Constraints:</strong>
    </h2>
    <ul className="list-disc pl-5 space-y-1 text-sm sm:text-base break-words">
      <li>
        <code className="bg-gray-100 px-1 py-0.5 rounded block">n == dominoes.length</code>
      </li>
      <li>
        <code className="bg-gray-100 px-1 py-0.5 rounded block">1 &lt;= n &lt;= 10<sup>5</sup></code>
      </li>
      <li>
        <code className="bg-gray-100 px-1 py-0.5 rounded block">dominoes[i] is either 'L', 'R', or '.'</code>
      </li>
    </ul>
  </div>
</section>

)

export const vA20250504= (
  <>
  <p className="text-base sm:text-lg mb-4 break-words">
    Given a list of <code className="bg-gray-100 px-1 py-0.5 rounded">dominoes</code>, 
    <code className="bg-gray-100 px-1 py-0.5 rounded">dominoes[i] = [a, b]</code> is 
    <strong className="font-semibold"> equivalent to </strong> 
    <code className="bg-gray-100 px-1 py-0.5 rounded">dominoes[j] = [c, d]</code> if and only if either 
    (<code className="bg-gray-100 px-1 py-0.5 rounded">a == c</code> and 
    <code className="bg-gray-100 px-1 py-0.5 rounded">b == d</code>), or 
    (<code className="bg-gray-100 px-1 py-0.5 rounded">a == d</code> and 
    <code className="bg-gray-100 px-1 py-0.5 rounded">b == c</code>) - that is, one domino can be rotated to be equal to another domino.
  </p>

  <p className="text-base sm:text-lg mb-6 break-words">
    Return <em>the number of pairs </em>
    <code className="bg-gray-100 px-1 py-0.5 rounded">(i, j)</code>
    <em> for which </em>
    <code className="bg-gray-100 px-1 py-0.5 rounded">0 &lt;= i &lt; j &lt; dominoes.length</code>
    <em>, and </em>
    <code className="bg-gray-100 px-1 py-0.5 rounded">dominoes[i]</code>
    <em> is </em>
    <strong className="font-semibold">equivalent to </strong>
    <code className="bg-gray-100 px-1 py-0.5 rounded">dominoes[j]</code>.
  </p>

  <div className="mb-6">
    <h2 className="text-lg font-bold text-indigo-700 mb-2">
      <strong className="block">Example 1:</strong>
    </h2>
    <pre className="bg-gray-50 border border-gray-200 rounded p-4 overflow-x-auto text-sm break-words">
      <strong className="block">Input:</strong> dominoes = [[1,2],[2,1],[3,4],[5,6]]
      <strong className="block">Output:</strong> 1
    </pre>
  </div>

  <div className="mb-6">
    <h2 className="text-lg font-bold text-indigo-700 mb-2">
      <strong className="block">Example 2:</strong>
    </h2>
    <pre className="bg-gray-50 border border-gray-200 rounded p-4 overflow-x-auto text-sm break-words">
      <strong className="block">Input:</strong> dominoes = [[1,2],[1,2],[1,1],[1,2],[2,2]]
      <strong className="block">Output:</strong> 3
    </pre>
  </div>

  <div>
    <h2 className="text-lg font-bold text-indigo-700 mb-2">
      <strong className="block">Constraints:</strong>
    </h2>
    <ul className="list-disc pl-5 space-y-1 text-sm sm:text-base break-words">
      <li>
        <code className="bg-gray-100 px-1 py-0.5 rounded block">
          1 &lt;= dominoes.length &lt;= 4 * 10<sup>4</sup>
        </code>
      </li>
      <li>
        <code className="bg-gray-100 px-1 py-0.5 rounded block">
          dominoes[i].length == 2
        </code>
      </li>
      <li>
        <code className="bg-gray-100 px-1 py-0.5 rounded block">
          1 &lt;= dominoes[i][j] &lt;= 9
        </code>
      </li>
    </ul>
  </div>
</>
)

export const vA20250505= (
  <>
  <p className="text-base sm:text-lg mb-4 break-words">
    You have two types of tiles: a <code className="bg-gray-100 px-1 py-0.5 rounded">2 x 1</code> domino shape and a tromino shape. You may rotate these shapes.
  </p>
  
  <img 
    alt="" 
    src="https://assets.leetcode.com/uploads/2021/07/15/lc-domino.jpg" 
    className="w-full max-w-[362px] h-auto max-h-[195px] mb-4" 
  />
  
  <p className="text-base sm:text-lg mb-4 break-words">
    Given an integer n, return <em>the number of ways to tile an</em> <code className="bg-gray-100 px-1 py-0.5 rounded">2 x n</code> <em>board</em>. Since the answer may be very large, return it <strong className="font-semibold">modulo</strong> <code className="bg-gray-100 px-1 py-0.5 rounded">10<sup>9</sup> + 7</code>.
  </p>

  <p className="text-base sm:text-lg mb-6 break-words">
    In a tiling, every square must be covered by a tile. Two tilings are different if and only if there are two 4-directionally adjacent cells on the board such that exactly one of the tilings has both squares occupied by a tile.
  </p>

  <div className="mb-6">
    <h2 className="text-lg font-bold text-indigo-700 mb-2">
      <strong className="block">Example 1:</strong>
    </h2>
    
    <img 
      alt="" 
      src="https://assets.leetcode.com/uploads/2021/07/15/lc-domino1.jpg" 
      className="w-full max-w-[500px] h-auto max-h-[226px] mb-4" 
    />
    
    <pre className="bg-gray-50 border border-gray-200 rounded p-4 overflow-x-auto text-sm break-words">
      <strong className="block">Input:</strong> n = 3
      <strong className="block">Output:</strong> 5
      <strong className="block">Explanation:</strong> The five different ways are show above.
    </pre>
  </div>

  <div className="mb-6">
    <h2 className="text-lg font-bold text-indigo-700 mb-2">
      <strong className="block">Example 2:</strong>
    </h2>
    
    <pre className="bg-gray-50 border border-gray-200 rounded p-4 overflow-x-auto text-sm break-words">
      <strong className="block">Input:</strong> n = 1
      <strong className="block">Output:</strong> 1
    </pre>
  </div>

  <div>
    <h2 className="text-lg font-bold text-indigo-700 mb-2">
      <strong className="block">Constraints:</strong>
    </h2>
    <ul className="list-disc pl-5 space-y-1 text-sm sm:text-base break-words">
      <li>
        <code className="bg-gray-100 px-1 py-0.5 rounded block">
          1 &lt;= n &lt;= 1000
        </code>
      </li>
    </ul>
  </div>
</>
)

export const vB20250505 = "<>\n  <p className=\"text-base sm:text-lg mb-4 break-words\">\n    You have two types of tiles: a <code className=\"bg-gray-100 px-1 py-0.5 rounded\">2 x 1</code> domino shape and a tromino shape. You may rotate these shapes.\n  </p>\n  \n  <img \n    alt=\"\" \n    src=\"https://assets.leetcode.com/uploads/2021/07/15/lc-domino.jpg\" \n    className=\"w-full max-w-[362px] h-[195px] mb-4\"\n  />\n  \n  <p className=\"text-base sm:text-lg mb-4 break-words\">\n    Given an integer n, return <em>the number of ways to tile an</em> <code className=\"bg-gray-100 px-1 py-0.5 rounded\">2 x n</code> <em>board</em>. Since the answer may be very large, return it <strong className=\"font-semibold\">modulo</strong> <code className=\"bg-gray-100 px-1 py-0.5 rounded\">10<sup>9</sup> + 7</code>.\n  </p>\n\n  <p className=\"text-base sm:text-lg mb-6 break-words\">\n    In a tiling, every square must be covered by a tile. Two tilings are different if and only if there are two 4-directionally adjacent cells on the board such that exactly one of the tilings has both squares occupied by a tile.\n  </p>\n\n  <div className=\"mb-6\">\n    <h2 className=\"text-lg font-bold text-indigo-700 mb-2\">\n      <strong className=\"block\">Example 1:</strong>\n    </h2>\n    \n    <img \n      alt=\"\" \n      src=\"https://assets.leetcode.com/uploads/2021/07/15/lc-domino1.jpg\" \n      className=\"w-full max-w-[500px] h-[226px] mb-4\"\n    />\n    \n    <pre className=\"bg-gray-50 border border-gray-200 rounded p-4 overflow-x-auto text-sm break-words\">\n      <strong className=\"block\">Input:</strong> n = 3\n      <strong className=\"block\">Output:</strong> 5\n      <strong className=\"block\">Explanation:</strong> The five different ways are show above.\n    </pre>\n  </div>\n\n  <div className=\"mb-6\">\n    <h2 className=\"text-lg font-bold text-indigo-700 mb-2\">\n      <strong className=\"block\">Example 2:</strong>\n    </h2>\n    \n    <pre className=\"bg-gray-50 border border-gray-200 rounded p-4 overflow-x-auto text-sm break-words\">\n      <strong className=\"block\">Input:</strong> n = 1\n      <strong className=\"block\">Output:</strong> 1\n    </pre>\n  </div>\n\n  <div>\n    <h2 className=\"text-lg font-bold text-indigo-700 mb-2\">\n      <strong className=\"block\">Constraints:</strong>\n    </h2>\n    <ul className=\"list-disc pl-5 space-y-1 text-sm sm:text-base break-words\">\n      <li>\n        <code className=\"bg-gray-100 px-1 py-0.5 rounded block\">\n          1 &lt;= n &lt;= 1000\n        </code>\n      </li>\n    </ul>\n  </div>\n</>\n"