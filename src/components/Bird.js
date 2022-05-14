import React from "react";

const Bird = ({bird, onFavouriteClick}) =>{


    const handleFavouriteClick = () => {
        onFavouriteClick(bird)
    }



    return(
        <>
        <div className="birds">
        <h4>Bird Name :{bird.en}</h4>
        <h5>Bird Song :{bird.type}</h5>
        <audio controls><source src={bird.file}/></audio>
        <h5>Country:{bird.cnt} </h5>
        <h5>Area:{bird.loc}</h5>
        <h5>
        <button value={bird} onClick={handleFavouriteClick}>Add Favourite</button>
        </h5>
        </div>
        </>
    )
}


export default Bird;