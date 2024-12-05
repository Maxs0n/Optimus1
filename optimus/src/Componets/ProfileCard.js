import React from 'react';
import './ProfileCard.css';

const ProfileCard = () => {
return (
    <div className="profile-card">
    <div className="profile-image">
        <img src="https://e00-xlk-ue-marca.uecdn.es/files/article_660_webp/uploads/2024/10/16/17290452747730.webp" alt="Profile" />
        <button className="camera-btn">
        <i className="fas fa-camera"></i>
        </button>
    </div>
    <h2 className="profile-name">Lionel Messi</h2>
    <p className="profile-company">Nombre empresa</p>

    <div className="divider"></div>

    <div className="profile-stats">
        <div className="stat">
        <span className="stat-label">Viajes realizados</span>
        <span className="stat-number">32</span>
        </div>
        <div className="divider"></div>
        <div className="stat">
        <span className="stat-label">Viajes completados con éxito</span>
        <span className="stat-number">26</span>
        </div>
        <div className="divider"></div>
        <div className="stat">
        <span className="stat-label">Viajes en curso</span>
        <span className="stat-number">6</span>
        </div>
    </div>

    <div className="divider"></div>

    <div className="profile-link">
        <a href="https://www.optimus.com/in/lionelmessi" target="_blank" rel="noopener noreferrer">
        www.optimus.com/in/lionelmessi
        </a>
        <button className="copy-btn">
        <i className="fas fa-copy"></i>
        </button>
    </div>
    </div>
);
};

export default ProfileCard;
