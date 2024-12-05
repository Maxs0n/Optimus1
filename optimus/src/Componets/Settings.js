import React from 'react';
import './settings.css';

function Settings() {
return (
    <div className="settings">
    <div className="tabs">
        <button className="tab active">Configuración de Cuenta</button>
        <button className="tab">Documentación</button>
    </div>
    <div className="settings-form">
        <div className="form-row">
        <input type="text" placeholder="Nombre" />
        <input type="text" placeholder="Nombre" />
        </div>
        <div className="form-row">
        <input type="text" placeholder="Nombre" />
        <input type="text" placeholder="Nombre" />
        </div>
        <div className="form-row">
        <input type="text" placeholder="Nombre" />
        <input type="text" placeholder="Nombre" />
        </div>
    </div>
    </div>
);
}

export default Settings;
