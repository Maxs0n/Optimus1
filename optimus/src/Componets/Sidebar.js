import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Sidebar.css';

function Sidebar() {
  const navigate = useNavigate();

  const handlePencilClick = () => {
    navigate('/postulaciones');
  };

  return (
    <div className="sidebar">
      {/* Icono de las tres líneas */}
      <div className="sidebar-item">
        <button className="sidebar-button">
          <span className="icon">≡</span>
        </button>
      </div>

      {/* Botón de lápiz */}
      <div className="sidebar-item">
        <button
          className="sidebar-button pencil-button"
          onClick={handlePencilClick}
        >
          ✏️
        </button>
      </div>

      {/* Botón de correo */}
      <div className="sidebar-item">
        <button className="sidebar-button">📧</button>
        <p className="sidebar-text">Mail</p>
      </div>

      {/* Botón de chat */}
      <div className="sidebar-item">
        <button className="sidebar-button">💬</button>
        <p className="sidebar-text">Chat</p>
      </div>

      {/* Botón de espacios */}
      <div className="sidebar-item">
        <button className="sidebar-button">📂</button>
        <p className="sidebar-text">Spaces</p>
      </div>

      {/* Botón de reuniones */}
      <div className="sidebar-item">
        <button className="sidebar-button">📹</button>
        <p className="sidebar-text">Meet</p>
      </div>
    </div>
  );
}

export default Sidebar;
