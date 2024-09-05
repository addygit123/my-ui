import React from 'react'
import ResearchNavbar from '/src/components/ResearchNavbar.jsx';

function classify() {
    const imageUrl = "/src/assets/graphpulsar.png";
    const about = "/projects/pulsar/about";
    const classify = '/projects/pulsar/classify';
    const discuss = '/projects/pulsar/discuss';
    const collection = '/projects/pulsar/collection';
  return (
    <>
      <ResearchNavbar 
                about={about}
                classify={classify}
                discuss={discuss}
                collection={collection}/>
      <div className='flex mt-4 mb-5'>
      <div className="w-[50vw] ml-[10vw] bg-gray-800 h-[100vh]">
      


      </div>
      <div className="w-[30vw] ml-[2vw] bg-[#1E1E1E] h-[100vh] p-10 rounded-lg border-1 border-gray-400">
        <div className='buttons flex justify-center items-center'>
          <button type="button" class="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Task</button>
          <button type="button" class="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Tutorial</button>
         
        </div>
        <p ></p>

      </div>
      </div>
    </>
  )
}

export default classify
