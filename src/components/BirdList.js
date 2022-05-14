import React from "react";
import Bird from "./Bird";

const BirdList = ({birds, onMunroClick}) => {

    const BirdItems = birds.map((bird, index) => {
      return <Bird bird={bird} key={index} onMunroClick={onMunroClick} />

    })

  return (
    <div>
    <ul>
      {BirdItems}
    </ul>
  </div>
  )
}

export default BirdList;