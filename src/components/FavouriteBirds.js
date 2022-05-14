import React from "react"
import FaveBird from "./FavBird"



const FavouriteBirds = ({favouriteBirds}) => {

    const bestBirds = favouriteBirds.map((bird) => {
        return <FaveBird bird = {bird}/>
    })

    return (
        <>
        <div>
        <h3>Favourite Bird Calls</h3>
        {bestBirds}
        </div>
        </>
    )
}

export default FavouriteBirds;