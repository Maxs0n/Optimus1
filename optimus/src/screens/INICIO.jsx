import React from "react";
import INICIO from "../screens/INICIO"
import ESTADISTICAS from '../screens/ESTADISTICAS';
import ACTIVIDAD from '../screens/ACTIVIDAD';
import POSTULACIONES from '../screens/POSTULACIONES';
import PERFIL from "./PERFIL";
import NavBar from '../Componets/NavBar';  
import Sidebar from "../Componets/Sidebar";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import "../main.css";
import Mapa from "../Componets/Mapa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons"
import { faBell } from "@fortawesome/free-solid-svg-icons";
import Buscador from '../Componets/Buscador';
import Card from '../Componets/Cards';

function App() {
//   return (
//     <Router>
//       <MainApp />
//     </Router>
//   );
// }

// // Este es el componente que contiene useLocation, dentro del contexto Router
// function MainApp() {
//   const location = useLocation();

  return (
<div className="App">
    
      <div className="head">
        <a href=""><FontAwesomeIcon icon={faBell} style={{color: "#FFD43B",}} className="head-icon-bell"/></a>
        <FontAwesomeIcon icon={faUser} className="head-icon-user"/><a href="Perfil"><p>Perfil</p></a>
      </div>


  <div className="container">
    
      <div className="columna">
        {/* <NavBar/> */}
      <Sidebar/>
      </div>
      
        <Routes>
          <Route path="/inicio" element={<INICIO />}/>
          <Route path="/estadistica" element={<ESTADISTICAS />}/>
          <Route path="/actividad" element={<ACTIVIDAD />}/>
          <Route path="/postulaciones" element={<POSTULACIONES />}/>
          <Route path="/perfil" element={<PERFIL />}/>
        </Routes>
      
        <div>
      <div className="caja">
        <div className="buscador">
          <Buscador />
          <div>
      
            <h2>Viajes Disponibles</h2>
          </div>

            <Card 
              orderId="10218752471"
              status="En Viaje"
              departureTime="16:00 hs"
              arrivalTime="19:30 hs"
              from="Buenos Aires"
              to="Rosario"
              price="$100k"
              cargoType="Combustible"
              weight="30 toneladas"
              kilometers="300 km"
              driverName="Mariana Lopez"
            />

            <Card 
              orderId="10218752471"
              status="En Viaje"
              departureTime="16:00 hs"
              arrivalTime="19:30 hs"
              from="Buenos Aires"
              to="Rosario"
              price="$100k"
              cargoType="Combustible"
              weight="30 toneladas"
              kilometers="300 km"
              driverName="Mariana Lopez"
            />
        </div>
      </div>
    </div>  

      

      <div className="map-container">
        <Mapa />
      </div>

    

  </div>

</div>
  );
}

export default App;