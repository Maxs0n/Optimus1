import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import INICIO from './screens/INICIO';
import ESTADISTICAS from './screens/ESTADISTICAS';
import ACTIVIDAD from './screens/ACTIVIDAD';
import POSTULACIONES from './screens/POSTULACIONES';
import PERFIL from './screens/PERFIL'
import NavBar from './Componets/NavBar';

const App = () => {
  // Hook para obtener la ubicación actual
  const location = useLocation();

  // Determina si el NavBar debería mostrarse o no
  const hideNavBar = ['/inicio', '/estadistica', '/actividad', '/postulaciones', '/Perfil'].includes(location.pathname);

  return (
    <div>
      {/* Muestra el NavBar solo si no estás en las rutas definidas */}
      {!hideNavBar && <NavBar />}

      <Routes>
        <Route path="/inicio" element={<INICIO />} />
        <Route path="/estadistica" element={<ESTADISTICAS />} />
        <Route path="/actividad" element={<ACTIVIDAD />} />
        <Route path="/postulaciones" element={<POSTULACIONES />} />
        <Route path="/perfil" element={<PERFIL />} />
      </Routes>
    </div>
  );
};

export default App;
