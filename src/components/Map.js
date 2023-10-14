import React from 'react';
import { GoogleMap, useLoadScript, MarkerF } from "@react-google-maps/api";

const DEFAULT_MAP = [33.495, -40.85];

export default function Map({ location }){
    const{ isLoaded } = useLoadScript({
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    });

    if(!isLoaded) return <div>Loading...</div>
    if(location[0]) return <Mapping mapLocation={location} zoom={12}/>
    return <Mapping mapLocation={DEFAULT_MAP} zoom={1}/>
}

function Mapping({ mapLocation, zoom }){
    return (
    <GoogleMap 
        zoom={zoom}
        center={{lat: mapLocation[0], lng: mapLocation[1]}}
        mapContainerClassName="map-container"
    >
        <MarkerF position={{lat: mapLocation[0], lng: mapLocation[1]}} />
    </GoogleMap>
    );
}