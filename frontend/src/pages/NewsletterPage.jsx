import { useEffect, useState } from "react"
import { getAPINewsletter } from "../utilities"
import parse from 'html-react-parser';


export default function NewsletterPage() {
  const [newsletterData,setNewsletterData] = useState()

  async function handleAPICall() {
    const result = await getAPINewsletter()
    setNewsletterData(result)
  }

  useEffect(()=>{
    handleAPICall()
  },[])

  useEffect(()=>{
    console.log(newsletterData)
  },[newsletterData])
    
    return ( 
      <div className="daily_newsletter_container">
      <h1>hello</h1>
      <h1>hello</h1>
      <h1>hello</h1>

      {newsletterData?
      parse(newsletterData.html)
      :null
      }
      
      </div>

    )
  };


    // <div className="bg-gray-100 min-h-screen py-10 px-6">
    //   <div className="max-w-7xl mx-auto">
    //     <h1 className="text-4xl font-bold text-gray-800 mb-6">
    //       🧠 Tech & AI Industry Report — May 12, 2025
    //     </h1>

    //     {/* AI & Programming Innovations */}
    //     <section className="mb-10">
    //       <h2 className="text-2xl font-semibold text-blue-700 mb-4">
    //         🚀 AI & Programming Innovations
    //       </h2>
    //       <div className="space-y-6">
    //         <div className="bg-white shadow-md rounded-lg p-6">
    //           <h3 className="text-xl font-bold text-gray-800 mb-2">OpenAI GPT-4.1</h3>
    //           <p className="text-gray-700">
    //             OpenAI released GPT-4.1, featuring a 1 million token context window and enhanced performance in coding and reasoning tasks. It excels in benchmarks like SWE-bench and MMLU, and supports advanced tool-calling capabilities.
    //           </p>
    //         </div>

    //         <div className="bg-white shadow-md rounded-lg p-6">
    //           <h3 className="text-xl font-bold text-gray-800 mb-2">Mistral Medium 3</h3>
    //           <p className="text-gray-700">
    //             Mistral AI introduced Medium 3, delivering top-tier performance at a fraction of the cost. It's optimized for enterprise deployments with support for on-premise setups and seamless integration into existing workflows.
    //           </p>
    //         </div>

    //         <div className="bg-white shadow-md rounded-lg p-6">
    //           <h3 className="text-xl font-bold text-gray-800 mb-2">OpenAI o4-mini</h3>
    //           <p className="text-gray-700">
    //             The o4-mini model by OpenAI offers multimodal capabilities, allowing it to process both text and images. It's designed for tasks like analyzing whiteboard sketches and supports various sectors including utilities and healthcare.
    //           </p>
    //         </div>

    //         <div className="bg-white shadow-md rounded-lg p-6">
    //           <h3 className="text-xl font-bold text-gray-800 mb-2">Model Context Protocol (MCP)</h3>
    //           <p className="text-gray-700">
    //             Anthropic's MCP has been adopted by major AI providers like OpenAI and Google DeepMind. It standardizes context exchange between AI assistants and software environments, facilitating seamless integration with tools and data sources.
    //           </p>
    //         </div>

    //         <div className="bg-white shadow-md rounded-lg p-6">
    //           <h3 className="text-xl font-bold text-gray-800 mb-2">MoonBit Programming Language</h3>
    //           <p className="text-gray-700">
    //             MoonBit is a new language optimized for WebAssembly, featuring Rust-like syntax with garbage collection. It includes built-in testing, AI-assisted programming, and is designed for efficient runtime and compile-time performance.
    //           </p>
    //         </div>
    //       </div>
    //     </section>

    //     {/* Industry Shifts & Market Trends */}
    //     <section className="mb-10">
    //       <h2 className="text-2xl font-semibold text-green-700 mb-4">
    //         📈 Industry Shifts & Market Trends
    //       </h2>
    //       <div className="space-y-6">
    //         <div className="bg-white shadow-md rounded-lg p-6">
    //           <h3 className="text-xl font-bold text-gray-800 mb-2">Tech Stocks Rally</h3>
    //           <p className="text-gray-700">
    //             The Nasdaq-100 surged into a bull market, gaining 4% in a single session. This rally was driven by a temporary reduction in U.S. tariffs on Chinese goods and strong earnings from major tech companies like Nvidia and Tesla.
    //           </p>
    //         </div>

    //         <div className="bg-white shadow-md rounded-lg p-6">
    //           <h3 className="text-xl font-bold text-gray-800 mb-2">Apple Faces Tariff Challenges</h3>
    //           <p className="text-gray-700">
    //             Apple anticipates a $900 million cost increase this quarter due to new tariffs, leading to potential price hikes of over 30% for smartphones and other devices. In response, Apple is shifting production to countries like India and Vietnam.
    //           </p>
    //         </div>

    //         <div className="bg-white shadow-md rounded-lg p-6">
    //           <h3 className="text-xl font-bold text-gray-800 mb-2">GM Appoints New Chief Product Officer</h3>
    //           <p className="text-gray-700">
    //             General Motors has appointed Sterling Anderson, co-founder of autonomous trucking firm Aurora, as its new Chief Product Officer. This move aims to accelerate GM's efforts in electric and autonomous vehicle development.
    //           </p>
    //         </div>

    //         <div className="bg-white shadow-md rounded-lg p-6">
    //           <h3 className="text-xl font-bold text-gray-800 mb-2">Gilmour Space Prepares for Historic Launch</h3>
    //           <p className="text-gray-700">
    //             Gilmour Space Technologies is set to launch Eris, Australia's first domestically designed and manufactured rocket aimed at reaching orbit. This milestone would place Australia among only 12 countries to have achieved this technical feat.
    //           </p>
    //         </div>
    //       </div>
    //     </section>

    //     {/* AI Tools for Developers */}
    //     <section className="mb-10">
    //       <h2 className="text-2xl font-semibold text-purple-700 mb-4">
    //         🛠️ AI Tools for Developers
    //       </h2>
    //       <div className="space-y-6">
    //         <div className="bg-white shadow-md rounded-lg p-6">
    //           <h3 className="text-xl font-bold text-gray-800 mb-2">Replit Ghostwriter</h3>
    //           <p className="text-gray-700">
    //             Replit's Ghostwriter has enhanced its real-time collaboration features, offering developers AI-powered code suggestions, debugging assistance, and documentation generation within a collaborative coding environment.
    //           </p>
    //         </div>

    //         <div className="bg-white shadow-md rounded-lg p-6">
    //           <h3 className="text-xl font-bold text-gray-800 mb-2">Polaris by Meta</h3>
    //           <p className="text-gray-700">
    //             Meta's Polaris tool leverages machine learning to automate testing, deployment, and monitoring tasks. It provides predictive analytics to identify potential system performance issues before they arise.
    //           </p>
    //         </div>
    //       </div>
    //     </section>

    //     {/* AI & Copyright */}
    //     <section className="mb-10">
    //       <h2 className="text-2xl font-semibold text-red-700 mb-4">
    //         ⚖️ AI & Copyright Concerns
    //       </h2>
    //       <div className="bg-white shadow-md rounded-lg p-6">
    //         <h3 className="text-xl font-bold text-gray-800 mb-2">Artists Advocate for Stricter AI Copyright Laws</h3>
    //         <p className="text-gray-700">
    //           Prominent artists, including Sir Elton John, are calling for stricter regulations on AI's use of copyrighted content. They argue that AI systems are generating new content by scraping existing works without proper compensation to original creators.
    //         </p>
    //       </div>
    //     </section>

    //     {/* Footer */}
    //     <footer className="text-center text-gray-500 mt-10">
    //       <p>Data compiled as of May 12, 2025.</p>
    //     </footer>
    //   </div>
    // </div>
    
