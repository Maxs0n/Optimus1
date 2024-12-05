import React from 'react';
import './Vistprev.css';

function VistaPrevia({
  image,
  titulo,
  precio,
  detalles,
  tipoCamion,
  pesoBruto,
  origen,
  destino,
  horaCarga,
  horaEntrega,
}) {
  return (
    <div className="vista-previa-container">
      <h2 className="titulo">Vista previa</h2>

      <div className="vista-previa-content">
        {/* Sección de la imagen */}
        <div className="imagen-previa">
          {image ? (
            <img src={image} alt="Vista Previa" className="image-preview" />
          ) : (
            <div className="image-placeholder">
              <p className="image-title">Vista Previa de tu Postulación</p>
              <p className="image-description">
                A medida que vayas creando tu publicación, podrás visualizar cómo se verá en la Postulación.
              </p>
            </div>
          )}
        </div>

        {/* Sección de los detalles */}
        <div className="detalles-previa">
          <h3 className="titulo-publicacion">{titulo || 'Título'}</h3>
          <p className="precio-publicacion">Precio ${precio || '0'}</p>
          <p className="estado-publicacion">Recientemente publicado</p>

          <h3 className="detalles-titulo">Detalles</h3>
          <p className="detalles-descripcion">{detalles || 'Los detalles se van a ver acá'}</p>

          <ul className="detalles-lista">
            <li>Tipo de Camión: {tipoCamion}</li>
            <li>Peso en Bruto: {pesoBruto}</li>
            <li>Origen: {origen}</li>
            <li>Destino: {destino}</li>
            <li>Hora de Carga: {horaCarga}</li>
            <li>Hora de Entrega: {horaEntrega}</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default VistaPrevia;
