import React from 'react'
import bgimage from "/src/assets/pulsar-page-background.jpg"
import "/src/index.css";
import "/src/assets/fonts/Poppins/Poppins-Regular.ttf";
import graph1 from "/src/assets/graph-1.png";


function pulsar() {
  return (
    <>
    <div className='bg-black'>
        <div className='flex h-30'
        style={{backgroundImage:`url(${bgimage})`,boxShadow: 'rgb(42 19 135 / 50%) 0px 2px 7px',opacity:20}}>
            <img className='self-center w-20 h-20 rounded-full ml-14 my-5 border-2' src="/src/assets/pulsar-logo.jpg" alt="" />
            <h4 className='text-white text-2xl font-bold self-center ml-10'>Einstein@Home: Pulsar Seekers</h4>
        </div>

    </div>
    <div className="Project-homepage">
        <div className="project-page-background relative inline-block">
            <img className="w-screen " src={bgimage} alt="background-pulsar-page" />
            <div className="align-center max-w-49 text-3xl font-semibold top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white bg-black absolute bg-opacity-50">
              Join the Search for Pulsars:Help Einstein@Home scientists to identify these amazing cosmic lighthouses!
            </div>
            <button className='hover:bg-teal-500 hover:text-white align-center max-w-49 text-md font-semibold top-3/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-teal-500 bg-white absolute border-4 border-teal-500 rounded-lg px-4 py-3'>Learn More</button>
        </div>
        <div className="project-workflow w-screen h-fit shadow-lg shadow-black-500/50">
          <div className="workflow-page-content px-40 py-8 ">
            <h3 className='font-bold text-teal-500 text-lg'>Get started </h3>
            <br />
            <p className='text-teal-500 text-md' >Pulsar Seekers offers two distinct workflows to engage volunteers. The first is the Training Mode, designed to educate and train new volunteers in classifying pulsar candidates. Once you feel confident and ready, you can transition from training mode into Expert Mode by coming back to the main page and clicking on to the "Expert mode" button, where your task involves providing concise yes or no responses.</p>
            <div className="buttons-page flex py-10">
            <button className='hover:bg-teal-500 hover:text-white text-md font-semibold text-teal-500 bg-white border-4 border-teal-500 rounded-lg px-4 py-3' href="">Training Mode</button>
            <button className='hover:bg-teal-500 hover:text-white text-md font-semibold text-teal-500 bg-white border-4 border-teal-500 rounded-lg px-4 py-3 mx-5' href="">Expert Mode</button>
            </div>
          </div>
          <div className="project-page-container w-screen h-fit flex mx-2 px-10">
            <a>
            <div className="img-1  h-80 overflow-y-scroll">
              <img className="object-cover w-full" src={graph1} alt="" />
            </div>
            </a>
            <a>
            <div className="img-1 h-80 overflow-y-scroll">
              <img className="object-cover w-full" src={graph1} alt="" />
            </div>
            </a>
            <a>
            <div className="img-1 h-80 overflow-y-scroll">
              <img className="object-cover w-full" src={graph1} alt="" />
            </div>
            </a>
            <div className="live-views w-6/12">
              <button className='relative top-1/2 left-1/2 hover:bg-teal-500 hover:text-white text-md font-semibold text-teal-500 bg-white border-4 border-teal-500 rounded-lg px-4 py-3  self-center' href="">Join in</button>
            </div>
          </div>
          <br />
        </div>


      
    </div>
    </>
  )
}

export default pulsar
