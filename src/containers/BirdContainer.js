import React, {useState, useEffect} from 'react';
import Navbar from '../components/Navbar';
import Main from '../components/Main';
import Footer from '../components/Footer';
import BirdList from '../components/BirdList';
import FavouriteBirds from '../components/FavouriteBirds';

function BirdContainer({countries}) {
    const [birds, setBirds]=useState([])
    const [favouriteBirds, setFavouriteBirds] = useState([])

    useEffect(() => {
        getBirds(countries[0].url)
    }, [])
    

    const handleSelectChange = event => {
      getBirds(event.target.value);
    }


    const onFavouriteClick = (bestGoose) => {

      const copyList = [... favouriteBirds]

      const isOnList = copyList.some((bird) => {
          return bird.id === bestGoose.id
      }) 

      if (!isOnList) { 
      copyList.push(bestGoose)
      }

      setFavouriteBirds(copyList)
      
  }
    const getBirds = url =>{
        fetch(url)
        .then(res => res.json())
        .then(birds => setBirds(birds.recordings))
        .catch(error => console.error);
    }



  return (
    <>
      <Navbar/>
      <Main handleSelectChange={handleSelectChange} countries={countries}/>
      <FavouriteBirds favouriteBirds={favouriteBirds}>Hello</FavouriteBirds>
      <BirdList birds={birds} url={countries[0].url} handleSelectChange={handleSelectChange} onFavouriteClick={onFavouriteClick}/>
      
      <Footer/>
    </>
  );
}

export default BirdContainer;