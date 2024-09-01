import React from 'react'
import PulsarThumbnail from "/src/assets/pulsar-thumbnail.jpg"
import { useNavigate } from 'react-router-dom';

  

  
function projects() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/projects/pulsar');
  };
  return (
    <div className='my-4 hover:py-2'>
      <div onClick={handleClick} className=" card mx-5 my-2 hover:bg-purple-300 shadow-md hover:shadow-[0_0_25px_5px_rgba(128,0,128,0.5)] " style={{width: "75vw",display: "flex", alignItems: "center"}}>
      <img src={PulsarThumbnail} className="card-img-top object-cover w-[18vw] h-[25vh] py-2 relative -left-[27vw] rounded-2xl mr-5" alt="..."/>
      <div className="card-body w-3/5 fixed h-fit absolute right-14 mt-3 mr-10 ">
        <h5 className="card-title text-3xl mb-4">Card title</h5>
        <p className="card-text">Some quick example text to build on the card title     and make up the bulk of the card's content. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus neque reiciendis optio in necessitatibus quidem repudiandae, a asperiores cumque doloribus voluptatum qui rerum, repellendus possimus debitis praesentium eos libero esse? Maxime esse totam error.</p>
       
      </div>
    </div>

    </div>
  )
}

export default projects
