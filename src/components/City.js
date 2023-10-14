import SearchBox from './SearchBox.js';
import MapSection from './Map.js';
import { useState } from 'react';
import DataSection from './DataSection.js';

const myKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;

export default function City({identifier}){
    const[city, setCity] = useState('');
    const[cords, setCords] = useState(Array(2).fill(null));
    const[weatherData, setWeatherData] = useState(Array(5).fill(null));

    function getLatLon(){
        const curCity = document.getElementById('cityGet' + identifier).value;

        if(!curCity){
            alert('No City Entered. Please enter a city in the form "City, State"');
            return;
        };
        const apiPars = curCity.split(",").map(function(item) {return item.trim()});
        const URL = 'https://maps.googleapis.com/maps/api/geocode/json?address=' + apiPars[0] + '%20' + apiPars[1] + '&key=' + myKey;

        const fetchMapData = async () => {
            const result = await fetch(URL);
            result.json().then(json => {
                if(json.status === "ZERO_RESULTS"){
                    alert('"' + curCity + '" is not a valid city. Please re-enter in the form "City, State"');
                    return;
                }
                const formattedCity = json.results[0].address_components[0].long_name + ', ' + json.results[0].address_components[2].short_name;
                const cords = [json.results[0].geometry.location.lat, json.results[0].geometry.location.lng]
                const URL2 = 'https://api.open-meteo.com/v1/forecast?latitude=' + cords[0]
                                     + '&longitude=' + cords[1] + '&current=temperature_2m&hourly=temperature_2m,apparent_temperature,precipitation_probability,precipitation&daily=temperature_2m_max,temperature_2m_min,precipitation_sum&temperature_unit=fahrenheit&windspeed_unit=mph&precipitation_unit=inch&timezone=America%2FChicago&forecast_days=1';
                const fetchWeatherData = async () => {
                    const result = await fetch(URL2);
                    result.json().then(json => {
                        console.log(json);
                        setWeatherData([json.current.temperature_2m, 
                                        json.daily.temperature_2m_max[0], 
                                        json.daily.temperature_2m_min[0], 
                                        json.daily.precipitation_sum[0],
                                        json.current_units.temperature_2m]);
                        setCity(formattedCity);
                        setCords(cords);
                    })
                }
                fetchWeatherData();
            })
        }
        fetchMapData();
    };
    
    return ( 
    <>
        <h1>City {identifier}{(city ? (': '+ city):'')}</h1>
        <div className="searchArea">
            <SearchBox onButton={() => getLatLon()} identifier={identifier} />
        </div>
        <div className="map">
            <MapSection location={cords} />
        </div>
        <div className="weatherData">
            <DataSection weatherData={weatherData} />
        </div>
    </>);
}