import React from "react";
import logo from '../images/birdlogo.jpeg';


const Navbar = () =>{
    return(
        <>
        <nav>
            <img className="logo" src={logo} alt="logo" />
            
            <h4>World Wide Birdsong</h4>
            <h4>Birds not Borders</h4>
            <div></div>
        </nav>
        </>
    )
}

export default Navbar;