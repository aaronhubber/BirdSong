import React from "react";

const Bird = ({bird}) =>{
    return(
        <>
        <div className="birds">
        <h4>Bird Name :{bird.en}</h4>
        <h5>Bird Song :{bird.type}</h5>
        <h5>Bird Info:</h5><audio controls><source src={bird.file}/></audio>
        </div>
        </>
    )
}

export default Bird;