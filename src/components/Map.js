import React from 'react';
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";

export default function Map(){
    const{ isLoaded } = useLoadScript({
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    });

    if(!isLoaded) return <div>Loading...</div>
    return <Mapping />
}

function Mapping(){
    return <GoogleMap zoom={4} center={{lat: 44, lng: -80}} mapContainerClassName="map-container">
        <Marker position={{lat: 44, lng: -80}} />
    </GoogleMap>
}