import React from 'react';
import './index.css';
import BirdContainer from './containers/BirdContainer';
import {MapContainer, TileLayer, Marker, Popup} from 'react-leaflet'

function App() {

  const countries = [
    {location: "All", url: "https://xeno-canto.org/api/2/recordings?query=anser&page2&page5"},
    {location: "Ireland", url: "https://xeno-canto.org/api/2/recordings?query=cnt:ireland+anser"},
    {location: "China", url: "https://xeno-canto.org/api/2/recordings?query=cnt:china+anser"},
    {location: "UK", url: "https://xeno-canto.org/api/2/recordings?query=cnt:united+anser"},
    {location: "Russia", url: "https://xeno-canto.org/api/2/recordings?query=cnt:russia+anser"},
    {location: "Germany", url: "https://xeno-canto.org/api/2/recordings?query=cnt:germany+anser"},
    {location: "Portugal", url: "https://xeno-canto.org/api/2/recordings?query=cnt:portugal+anser"},
    {location: "Ukraine", url: "https://xeno-canto.org/api/2/recordings?query=cnt:ukraine+anser"},
    {location: "Fiji", url: "https://xeno-canto.org/api/2/recordings?query=cnt:fiji+anser"}
  ]
  return (
    <>
    <BirdContainer countries={countries}/>
    </>
  );
}

export default App;
