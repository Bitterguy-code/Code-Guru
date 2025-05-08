import parse from 'html-react-parser';
import { vB20250501,vC20250501,vA20250502, vA20250504, vA20250505, vB20250505 } from './testChallengeHTML';

export default function ChallengeDisplay({data, htmlData}){

    return(
      <>
        <section className="p-4 sm:p-6 lg:p-8 bg-white rounded-xl shadow-md">
        <h1 className="text-xl font-bold text-gray-900 mb-2">
          {data.questionTitle}
        </h1>
        <div className='flex gap-6'>
          <p className="text-sm text-gray-600 mb-4">
            Difficulty: <span className="font-medium text-green-600">{data.difficulty}</span>
          </p>
          <p className="text-sm text-gray-600 mb-4">
            Date: <time dateTime="2025-05-04T00:00:00Z">May 4, 2025</time>
          </p>
          <a
            href={data.questionLink}
            className="text-blue-600 underline hover:text-blue-800 text-sm break-words"
            target="_blank"
            rel="noopener noreferrer"
          >
            View on LeetCode
          </a>
        </div>

        {/* <div dangerouslySetInnerHTML={{ __html: htmlData }} /> */}
        {parse(data.html)}
        </section>
      </>
    )
}