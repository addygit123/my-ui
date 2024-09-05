import React from 'react'
import bgimage from "/src/assets/pulsar-page-background.jpg"
import bgwebp from "/src/assets/pulsar-page-background.webp"
import pulsarimage from "/src/assets/pulsar.png"

import "/src/index.css";
import "/src/assets/fonts/Poppins/Poppins-Regular.ttf";
import graph1 from "/src/assets/graph-1.png";
import ResearchNavbar from '../../../components/ResearchNavbar';


function pulsar() {
  
    const about = "/projects/pulsar/about";
    const classify = '/projects/pulsar/classify';
    const discuss = '/projects/pulsar/discuss';
    const collection = '/projects/pulsar/collection';
  return (
    
    <>
    
    <div className='bg-black'>
      
        {/* <div className='flex h-20'
        style={{backgroundImage:`url(${bgimage})`,boxShadow: 'rgb(42 19 135 / 50%) 0px 2px 7px',opacity:20}}>
            <img className='self-center w-20 h-20 rounded-full ml-14 my-5 border-2' src="/src/assets/pulsar-logo.jpg" alt="" />
            <h4 className='text-white text-xl font-bold self-center ml-10'>Einstein@Home: Pulsar Seekers</h4>
        </div> */}

    </div>
    
    <div className="Project-homepage flex flex-col">
    
        <div className="project-page-background relative inline-block m-0 p-0">
            <picture>
              <source srcSet={bgwebp} type='image/webp'/>
              <img className="w-screen h-screen " src={bgimage} loading='lazy' alt="background-pulsar-page" />
            </picture>
            <div className="absolute top-5 left-1/2 transform -translate-x-1/2 w-auto">
            <ResearchNavbar 
                about={about}
                classify={classify}
                discuss={discuss}
                collection={collection}/>
            </div>
            <div className=" w-1/4 px-5 text-2xl font-semibold top-20 left-40 text-white bg-transparent absolute bg-opacity-50">
              Join the Search for Pulsars:Help Einstein@Home scientists to identify these amazing cosmic lighthouses!
              <br />
              
              <br />
              <p className='text-sm font-thin '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias tempore, necessitatibus amet, doloremque repellat asperiores sunt sapiente rem quae eum sint optio corporis molestiae minus commodi debitis rerum non obcaecati ullam atque cupiditate modi! ,Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora molestiae rem consectetur incidunt, voluptatibus officiis labore debitis unde! Est reiciendis exercitationem aliquid architecto, sed quo, cum dolor nesciunt tempora similique dolore odit, adipisci atque sunt eligendi? Doloribus minus quidem perferendis!</p>
              <br />
              <button className='hover:bg-teal-500 hover:text-white align-center font-light text-lg text-md left-1/4  text-white bg-sky-899 absolute border-4 border-teal-500 rounded-3xl px-6 py-3 '>Learn More</button>
              
              
            </div>
            <div className=" w-1/2 mx-8  text-4xl font-semibold top-40 right-0 m text-white bg-transparent absolute bg-opacity-50">
            <img className="rounded-full w-4/5 h-4/5  border-10 border-white-700 shadow-3xl" loading="lazy" src={pulsarimage} alt="" />
            </div>

            
            
        </div>
        <div className="project-workflow w-screen shadow-lg shadow-black-500/50 m-0 p-0">
          <div className="workflow-page-content px-40 py-10 bg-pink-900 ">
            <h3 className='font-bold text-white text-lg'>Get started </h3>
            <br />
            <p className='text-white text-md' >Pulsar Seekers offers two distinct workflows to engage volunteers. The first is the Training Mode, designed to educate and train new volunteers in classifying pulsar candidates. Once you feel confident and ready, you can transition from training mode into Expert Mode by coming back to the main page and clicking on to the "Expert mode" button, where your task involves providing concise yes or no responses.</p>
            <div className="buttons-page flex py-10">
            <button className='hover:bg-teal-500 hover:text-white text-md font-semibold text-white bg-pink-800 border-4 border-white-500 rounded-lg px-4 py-3' href="">Training Mode</button>
            <button className='hover:bg-teal-500 hover:text-white text-md font-semibold text-white bg-pink-800 border-4 border-white-500 rounded-lg px-4 py-3 mx-5' href="">Expert Mode</button>
            </div>
          </div>
          <div className="project-page-container w-screen h-fit flex mx-2 px-10">
          
            <a>
            <div className="img-1  h-[19rem] overflow-y-scroll">
              <img className="object-cover w-full" src={graph1} alt="" />
            </div>
            </a>
            <a>
            <div className="img-1 h-[19rem] overflow-y-scroll">
              <img className="object-cover w-full" src={graph1} alt="" />
            </div>
            </a>
            <a>
            <div className="img-1 h-[19rem] overflow-y-scroll">
              <img className="object-cover w-full" src={graph1} alt="" />
            </div>
            </a>
            <div className="live-views w-6/12">
              <button className='relative top-1/2 left-1/2 hover:bg-teal-500 hover:text-white text-md font-semibold text-white bg-pink-900 border-4 border-black rounded-lg px-4 py-3  self-center' href="">Join in</button>
            </div>
          </div>
          <br />
          
        </div>
        <div className="flex h-screen">
          <div className="w-1/4 px-4 bg-gray-500 shadow-xl mx-4 my-6 py-5 h-fit items-center rounded-xl justify-center">
          <h4 className='mb-2 font-semibold text-lg'>What do experts say?</h4>
          <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi voluptates aliquam provident id cupiditate, commodi, neque ratione eaque debitis quae sit fugiat! Asperiores facilis dolores illo eius! Illum explicabo repudiandae, dolorum officia voluptatum natus, ullam sit amet fugiat aliquid laudantium odit et fuga? Accusantium at velit quis impedit officia! Dolor!
          </p>
          </div>
          <div className="w-1/2 bg-sky-600 text-white flex items-center justify-center shadow-lg shadow-black px-10 py-10">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet eligendi totam, sapiente id iure placeat explicabo eius aspernatur debitis aut consectetur nobis sequi culpa aperiam iusto earum molestias, vitae, qui voluptatem laboriosam? Rerum, fugit assumenda recusandae nam ex itaque dolor eos qui quam iste impedit blanditiis sit minus est quos quae magnam numquam temporibus, suscipit asperiores repellendus? Quo fugit odio delectus voluptate accusantium expedita et omnis natus quisquam commodi id dignissimos obcaecati veritatis, provident temporibus iste repellendus. Excepturi unde fuga adipisci consequatur, ut suscipit eveniet doloribus id quos amet ratione sit et deleniti, recusandae dolorum aut alias dolorem nesciunt, quidem magnam sint voluptas neque. Debitis ratione provident molestias animi illum enim impedit repellendus eos, quae odit minus saepe velit beatae facere! Incidunt repellendus delectus, laboriosam quibusdam praesentium laudantium tenetur a accusamus assumenda similique quam impedit sequi asperiores soluta debitis rem modi. Voluptas reprehenderit soluta laudantium at nulla consectetur odit in! Placeat consequuntur ipsa officia necessitatibus aperiam dicta quod consectetur modi, eum iure earum beatae, saepe magnam neque perferendis officiis tenetur vel consequatur atque reiciendis omnis fugit obcaecati hic voluptatum? Eaque, praesentium quas repellat illum iste facilis dolorem laborum architecto autem nostrum accusamus quo dolorum tempore explicabo dolor quos ratione voluptas! Dolores corporis, aspernatur ab quasi beatae itaque eaque temporibus consequatur culpa magni id fugiat cupiditate ea consectetur in consequuntur quas dolorem natus sapiente. Fuga consectetur molestiae enim saepe totam libero eum nam, nulla quasi a dolorum assumenda consequatur fugit, in deleniti exercitationem, temporibus cupiditate inventore aut nisi vel necessitatibus. Earum.
          </div>
          <div className="w-1/4 flex items-center justify-center">
          <ul>
            <li className='hover:text-lg'><a href="">External Links</a></li>
            <li className='hover:text-lg'><a href="">More Info</a></li>
          </ul>
          </div>
        </div>
        
        


      
    </div>
    </>
  )
}

export default pulsar
