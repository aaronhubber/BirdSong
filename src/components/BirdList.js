import React from "react";
import Bird from "./Bird";


const BirdList = ({birds, onFavouriteClick}) => {

    const BirdItems = birds.map((bird, index) => {
      return <Bird bird={bird} key={index} onFavouriteClick={onFavouriteClick} />

    })

  return (
    <div>
    <ul className="birdlist">
      {BirdItems}
      {}
    </ul>
  </div>
  )
}

export default BirdList;