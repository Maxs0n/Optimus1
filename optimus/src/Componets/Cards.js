import React, { useState } from 'react';


function Card({ orderId, status, departureTime, arrivalTime, from, to, price, cargoType, weight, kilometers, driverName }) {
  // Estado para manejar si la tarjeta está expandida o no
    const [isExpanded, setIsExpanded] = useState(false);

  // Función para cambiar el estado cuando se hace clic
    const toggleExpand = () => {
    setIsExpanded(!isExpanded);
};

return (
    <div className={`card ${isExpanded ? 'expanded' : ''}`} onClick={toggleExpand}>
        <div className="card-header">
            <div className="order-id">{orderId}</div>
            <div className="status">
            <span className="status-dot"></span>
            {status}
        </div>
    </div>

    <div className="route-info">
        <div className="timing-info">
            <div className="departure">
            <p><strong>Salida:</strong> {departureTime}</p>
            <p>{from}</p>
            </div>
        <div className="arrival">
            <p><strong>Llega aprox:</strong> {arrivalTime}</p>
            <p>{to}</p>
        </div>
        </div>
    </div>

      {/* Información básica que siempre se muestra */}
    <div className="details">
        <p><strong>Precio:</strong> {price}</p>
        <p><strong>Tipo de carga:</strong> {cargoType}</p>
    </div>

      {/* Información adicional que se muestra solo si la tarjeta está expandida */}
    {isExpanded && (
        <div className="expanded-info">
            <p><strong>Peso Bruto:</strong> {weight}</p>
            <p><strong>Km a recorrer:</strong> {kilometers}</p>
            <div className="driver-info">
            <div className="driver-name">{driverName}</div>
            <div className="icons">
                <a href="tel:+123456789">
                <i className="fas fa-phone"></i>
                </a>
                <a href="sms:+123456789">
                <i className="fas fa-envelope"></i>
                </a>
            </div>
        </div>
        </div>
    )}
    </div>
);
}

export default Card;