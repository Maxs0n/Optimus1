import React from 'react';
import Sidebar from '../Componets/Sidebar.js';
import ProfileCard from '../Componets/ProfileCard.js';
import Settings from '../Componets/Settings.js';
import ProfileBar from '../Componets/ProfileBar.js';
import './PERFIL.module.css';

function perfil() {
  return (
    <div>
      <Sidebar />
      <ProfileBar/>
      <main>
        
        <ProfileCard />
        <Settings />
      </main>
    </div>
  );
}

export default perfil;