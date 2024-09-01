
export default function Navbar() {
    return (
      <>
        <nav>
            <ul className="h-20 w-screen bg-purple-999 text-slate flex gap-5 items-center text-md font-semibold shadow-lg">
                <img className="px-2 py-2" src="src/assets/icon.svg" alt="" />
                <li className="cursor-pointer text-gray-300">PROJECTS</li>
                <li className="cursor-pointer text-gray-300">ABOUT</li>
                <li className="cursor-pointer text-gray-300">GET INVOLVED</li>
                <li className="cursor-pointer text-gray-300">TALK</li>
                <li className="cursor-pointer text-gray-300">BUILD A PROJECT</li>
                <li className="cursor-pointer text-gray-300">NEWS</li>
                <li className="cursor-pointer text-gray-300 absolute right-40">SIGN IN</li>
                <li className="cursor-pointer text-gray-300 absolute right-8">REGISTER</li>
                
            </ul>
        </nav>
      </>
    )
  }