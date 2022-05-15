import React from "react";
import Bird from "./Bird";


const BirdList = ({birds, onFavouriteClick}) => {

    const BirdItems = birds.map((bird, index) => {
      return <Bird bird={bird} key={index} onFavouriteClick={onFavouriteClick} />

    })

    function HowMany(BirdItems){
      let numberSelected = 0;
      for (let i = 0; i < BirdItems.length; i++) {
        if (BirdItems.length >1) {
          numberSelected++;
        }
        else{
          return "There is just one lonely goose recorded in this location."
        }
      }
      return `There have been ${numberSelected} geese recorderd in this location`;
    }
    
    const SortedBirds = BirdItems.sort((a, b)=> parseInt(a.id) - parseInt(b.id))
    


  return (
    <div>
    <p> {HowMany(birds)} .</p>
    <p className="birdlist"> {SortedBirds}</p>
    <ul className="birdlist">
      {BirdItems}
    </ul>

  </div>
  )
}

export default BirdList;