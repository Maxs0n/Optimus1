import React from 'react';
import './ProfileBar.css';

const ProfileBar = () => {
return (
    <div className="profile-bar">
    <div className="notification">
        <i className="fas fa-bell"></i> {/* Ícono de campana usando FontAwesome */}
    </div>
    <div className="profile-section">
        <i className="fas fa-user-circle profile-icon"></i> {/* Ícono de perfil de FontAwesome */}
        <span>Mi perfil</span>
    </div>
    </div>
);
};

export default ProfileBar;
