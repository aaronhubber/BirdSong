import React from "react"


const FaveBird = ({bird}) => {

    return (
        <p className="best-birds">In {bird.loc} a {bird.en}. It sounds like <audio controls><source src={bird.file}/></audio></p>
    )
}

export default FaveBird