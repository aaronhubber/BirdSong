import React, {useState, useEffect} from 'react';
import Navbar from '../components/Navbar';
import Main from '../components/Main';
import Footer from '../components/Footer';
import BirdList from '../components/BirdList';


function BirdContainer() {
    const [birds, setBirds]=useState([])

    useEffect(() => {
        getUkrainianBirds()
    }, [])
    
    const getUkrainianBirds = function(){
        fetch("https://xeno-canto.org/api/2/recordings?query=cnt:ukraine&page1")
        .then(res => res.json())
        .then(birds => setBirds(birds.recordings))
        .catch(error => console.error);
    }

  return (
    <>
      <Navbar/>
      <Main/>
      <BirdList birds={birds}/>
      <Footer/>
    </>
  );
}

export default BirdContainer;