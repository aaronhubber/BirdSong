import React from "react";
import birdimage1 from "../images/bird1.jpeg"

const BirdContact = (props) =>{
    return(
        <div className="contact-card">
        <img src={birdimage1}/>
        <h3>Mr Kissington</h3>
        <div className="info-group">
            <p>Number:(212) 555-2345</p>
        </div>
        <div className="info-group">
            <p>Email:fluff@me.com</p>
        </div>
    </div>
    )
}

export default BirdContact;