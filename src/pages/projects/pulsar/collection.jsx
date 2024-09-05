import React from 'react'
import ResearchNavbar from '/src/components/ResearchNavbar.jsx';

function collection() {
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
      
      <div className='collection'>
        <h1 className='m-5 text-2xl font-bold justify-center text-[#F5F5F5] ml-[10vw] mr-[8vw] mt-[10vh] mb-[10vh]'>Collections</h1>
        <div className='container w-[80vw] px-0 h-[60vh] bg-white mb-4 rounded-lg '>
          <h3 className='text-lg text-black font-normal py-4 px-4 rounded-lg shadow-lg'>@Pulsar Collections - By Samay</h3>
         
        </div>
      </div>
    </>
  )
}

export default collection
