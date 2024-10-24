import { useState } from "react";
import { Link } from "react-router-dom";
import Download from "./Download";

function Navbar() {
    const [toggleHamburg, setToggleHamburg] = useState(false)
    return (
        <div className="navbar w-full h-[10%] bg-black font-mono  md:px-10 text-md text-gray-200">
            <div className="navbar-center">
                <div className="dropdown md:hidden" >
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle" onClick={() => { setToggleHamburg(!toggleHamburg) }}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                    </div>
                    {toggleHamburg && (<ul tabIndex={0} className="menu menu-sm dropdown-content mt-2 z-[1] p-4 shadow-xl bg-base-100 rounded-box w-40">
                        <li><Link to="/">
                            <button onClick={() => { setToggleHamburg(!toggleHamburg) }}>Home</button>
                        </Link></li>
                        <li ><Link to="/info">
                            <button onClick={() => { setToggleHamburg(!toggleHamburg) }}>Info</button>
                        </Link></li>
                        <li><Link to="/projects">
                            <button onClick={() => { setToggleHamburg(!toggleHamburg) }}>Projects</button>
                        </Link></li>
                    </ul>)}
                </div>
                <div className="md:flex flex-row gap-4 justify-around hidden">
                <div className="hover:text-gray-500">
                        <Link to="/">
                            <button className="flex flex-row gap-2">Home</button>
                        </Link>
                    </div>
                    <div className="hover:text-gray-500">
                        <Link to="/info">
                            <button className="flex flex-row gap-2">Info</button>
                        </Link>
                    </div>
                    <div className="hover:text-gray-500">
                        <Link to="/projects">
                            <button>Projects</button>
                        </Link>
                    </div>
                    <div className="hover:text-gray-500">
                       <Download />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Navbar;