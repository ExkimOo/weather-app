import { useEffect, useState, React } from 'react';
import { useSelector } from 'react-redux';

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

export const Map = () => {
    let position = [56.012057, 92.835273];
    const geolocation = useSelector(({location}) => location.geolocation);
    console.log(geolocation);
    let [location, setLocation] = useState([]);

    useEffect(() => {
        if (geolocation.loc) {
            setLocation([geolocation.loc.split(',')]);
        }
    }, [geolocation]);

    return (
        <div>
            <MapContainer 
            center={position} 
            zoom={12} 
            scrollWheelZoom={true}>
                <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={position}>
                <Popup>
                    ???
                </Popup>
                </Marker>
            </MapContainer>
        </div>
    )
}

export default Map;
