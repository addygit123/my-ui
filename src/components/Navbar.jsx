
export default function Navbar() {
    return (
      <>
        <nav>
            <ul className="h-12 w-screen bg-black text-slate flex gap-5 items-center shadow-lg">
                <img className="px-2 py-2" src="src/assets/icon.svg" alt="" />
                <li className="text-gray-300">PROJECTS</li>
                <li className="text-gray-300">ABOUT</li>
                <li className="text-gray-300">GET INVOLVED</li>
                <li className="text-gray-300">TALK</li>
                <li className="text-gray-300">BUILD A PROJECT</li>
                <li className="text-gray-300">NEWS</li>
                <li className="text-gray-300 absolute right-40">SIGN IN</li>
                <li className="text-gray-300 absolute right-20 mx-2">REGISTER</li>
                
            </ul>
        </nav>
      </>
    )
  }