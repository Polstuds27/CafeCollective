"use client";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

const icon = L.icon({
    iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
    iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
    shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
    iconSize: [25, 41],
    iconAnchor: [12, 41],
});

interface CafeMapProps {
    lat: number;
    lng: number;
    name: string;
}

export default function CafeMap({ lat, lng, name }: CafeMapProps) {
    return (
        <MapContainer
            center={[lat, lng]}
            zoom={16}
            className="w-full h-[200px] rounded-xl z-0"
        >
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
            />
            <Marker position={[lat, lng]} icon={icon}>
                <Popup>{name}</Popup>
            </Marker>
        </MapContainer>
    );
}