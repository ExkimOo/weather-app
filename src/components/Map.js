import { useEffect, useState, React } from 'react';
import { useSelector } from 'react-redux';

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

export const Map = () => {
    const geolocation = useSelector(({location}) => location.geolocation);
    const [location, setLocation] = useState([]);

    useEffect(() => {
        if (geolocation?.loc) {
            setLocation(geolocation.loc.split(','));
        }
    }, [geolocation]);

    return (
        <div>
            {location.length > 1 && (
            <MapContainer 
            center={location} 
            zoom={12} 
            scrollWheelZoom={true}>
                <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={location}>
                <Popup>
                    ???
                </Popup>
                </Marker>
            </MapContainer>
            )}         
        </div>
    )
}

export default Map;
