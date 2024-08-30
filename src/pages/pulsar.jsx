import React from 'react'
import bgimage from "/src/assets/pulsar-page-background.jpg"
import "/src/index.css";
import "/src/assets/fonts/Poppins/Poppins-Regular.ttf";


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
        <div className="project-page-background">
            <img className="w-screen h-2/5" src={bgimage} alt="background-pulsar-page" />
            
        </div>
      
    </div>
    </>
  )
}

export default pulsar
