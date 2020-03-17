import React, {useRef, useEffect} from 'react';
import mapboxgl from 'mapbox-gl'
import './Map.css'


const Map = props => {

    mapboxgl.accessToken = 'pk.eyJ1IjoibmFiZWVsbWVobW9vZCIsImEiOiJjazd2dGdhNXUxZmZoM2htcmY2c2hwZDllIn0.vIcPwJSv4raAd_IpjYO3Bg'
    mapboxgl.baseApiUrl = 'https://api.mapbox.com';
    let mapContainer = useRef();
    const {center, zoom} = props;
    useEffect(() => {
        let map = new mapboxgl.Map(
            {
                container: mapContainer,
                style: 'mapbox://styles/mapbox/streets-v11',
                center: props.center,
                zoom: props.zoom
            }
        )
    }, [center, zoom])
    

    return (
        <div ref={el => mapContainer = el} className={`map map-container ${props.className}`} style={props.style}/>
    )
}

export default Map