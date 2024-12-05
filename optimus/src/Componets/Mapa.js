import React from 'react'
import { MapContainer, TileLayer, Polyline, Marker, Popup } from 'react-leaflet';
import LeafletRoutingMachine from "../Componets/LeafletRoutingMachine";
import "leaflet-control-geocoder/dist/Control.Geocoder.css";
import "leaflet-control-geocoder/dist/Control.Geocoder.js";
import L from "leaflet";
import LeafletGeocoder from "../Componets/LeafletGeocoder";
import "leaflet/dist/leaflet.css";

const Mapa = () => {
  return (
    <div className='map-container'>
    <MapContainer center = {[-34.92145 , -57.95453]} zoom = {13} scrollWheelZoom = {false}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <LeafletGeocoder />
      <LeafletRoutingMachine />
    </MapContainer>
  </div>
  )
}

let DefaultIcon = L.icon({
    iconUrl: "https://unpkg.com/leaflet@1.6/dist/images/marker-icon.png",
    iconSize: [25, 41],
    iconAnchor: [10, 41],
    popupAnchor: [2, -40],
  });
  L.Marker.prototype.options.icon = DefaultIcon;

export default Mapa