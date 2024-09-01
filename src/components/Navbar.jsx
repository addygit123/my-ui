import { NavLink } from "react-router-dom";

export default function Navbar() {
    return (
      <>
        <nav>
            <ul className="h-20 w-screen bg-purple-999 text-slate flex gap-5 items-center text-md font-semibold shadow-lg">
                <img className="px-2 py-2" src="src/assets/icon.svg" alt="" />
                <li  className="cursor-pointer text-gray-300 hover:text-white hover:bg-purple-700 hover:py-3   hover:px-2 hover:rounded-xl  "><NavLink to="/projects">PROJECTS</NavLink></li>
                <li className="cursor-pointer text-gray-300 hover:text-white hover:bg-purple-700 hover:py-3   hover:px-2 hover:rounded-xl   "><a>ABOUT</a></li>
                <li className="cursor-pointer text-gray-300 hover:text-white hover:bg-purple-700 hover:py-3   hover:px-2 hover:rounded-xl   "><a>GET INVOLVED</a></li>
                <li className="cursor-pointer text-gray-300 hover:text-white hover:bg-purple-700 hover:py-3   hover:px-2 hover:rounded-xl   "><a>TALK</a></li>
                <li className="cursor-pointer text-gray-300 hover:text-white hover:bg-purple-700 hover:py-3   hover:px-2 hover:rounded-xl   "><a>BUILD A PROJECT</a></li>
                <li className="cursor-pointer text-gray-300 hover:text-white hover:bg-purple-700 hover:py-3   hover:px-2 hover:rounded-xl   "><a>NEWS</a></li>
                <li className="cursor-pointer text-gray-300 absolute right-40 hover:text-white hover:bg-purple-700 hover:py-3   hover:px-2 hover:rounded-xl   "><a>SIGN IN</a></li>
                <li className="cursor-pointer text-gray-300 absolute right-8 hover:text-white hover:bg-purple-700 hover:py-3  hover:px-2 hover:rounded-xl "><a>REGISTER</a></li>
                
            </ul>
        </nav>
      </>
    )
  }