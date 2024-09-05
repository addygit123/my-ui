import { NavLink } from "react-router-dom";
import research from "/src/assets/Research.png"
export default function Navbar() {
    return (
      <>
        <nav>
            <ul className="h-20 w-screen bg-purple-999 text-slate flex gap-5 items-center text-md font-semibold shadow-lg">
                <img onClick={() => window.location.href = '/'} className=" px-2 ml-4 mr-[7vw] py-2 w-[13vw]" src={research} alt="Name of the website" />
                <li  className="cursor-pointer text-gray-300 hover:text-white hover:bg-purple-700 hover:py-3   hover:px-2 hover:rounded-xl  "><NavLink to="/projects">PROJECTS</NavLink></li>
                <li className="cursor-pointer text-gray-300 hover:text-white hover:bg-purple-700 hover:py-3   hover:px-2 hover:rounded-xl   "><NavLink to="/talk">TALK</NavLink></li>
                <li className="cursor-pointer text-gray-300 hover:text-white hover:bg-purple-700 hover:py-3   hover:px-2 hover:rounded-xl   "><NavLink to="/about">ABOUT</NavLink></li>
                <li className="cursor-pointer text-gray-300 hover:text-white hover:bg-purple-700 hover:py-3   hover:px-2 hover:rounded-xl   "><NavLink to="/getinvolved">GET INVOLVED</NavLink></li>
                <li className="cursor-pointer text-gray-300 hover:text-white hover:bg-purple-700 hover:py-3   hover:px-2 hover:rounded-xl   "><NavLink to="/build">BUILD A PROJECT</NavLink></li>
                <li className="cursor-pointer text-gray-300 hover:text-white hover:bg-purple-700 hover:py-3   hover:px-2 hover:rounded-xl   "><NavLink to="/news">NEWS</NavLink></li>
                <li className="cursor-pointer text-gray-300 absolute right-40 hover:text-white hover:bg-purple-700 hover:py-3   hover:px-2 hover:rounded-xl   "><a>SIGN IN</a></li>
                <li className="cursor-pointer text-gray-300 absolute right-8 hover:text-white hover:bg-purple-700 hover:py-3  hover:px-2 hover:rounded-xl "><a>REGISTER</a></li>
                
            </ul>
        </nav>
      </>
    )
  }