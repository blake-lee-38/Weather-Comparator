import SearchBox from './SearchBox.js';
import MapSection from './Map.js';
import { useState } from 'react';

const location = {
    address: '1600 Amphitheatre Parkway, Mountain View, california.',
    lat: 37.42216,
    lng: -122.08427,
}

const endpoint = new URL('https://maps.googleapis.com/maps/api/geocode/json?address=Mound%20MN&key=AIzaSyDD2H0Dqd3txLDy8sX5oGdlvsaG6wcb0K0');

export default function City({identifier}){
    const[city, setCity] = useState('');
    const cityOutput = (city ? city: "No valid city yet");

    function getLatLon(){
        const city = document.getElementById('cityGet' + identifier).value;
        if(!city){
            alert("No City Entered");
            return;
        };
        const apiPars = city.split(",").map(function(item) {return item.trim()});
        setCity(city);
        return;  
    }
    
    return ( 
    <>
        <div className="searchArea">
            <SearchBox onButton={() => getLatLon()} identifier={identifier} />
        </div>
        <div className="displayCity">
            <p className="displaying">{cityOutput}</p>
        </div>
        <div className="map">
            <MapSection />
        </div>
    </>)
}