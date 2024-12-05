import React from 'react';
import './Postviaje.css';

function PostularViaje({
  image,
  setImage,
  titulo,
  setTitulo,
  precio,
  setPrecio,
  detalles,
  setDetalles,
  tipoCamion,
  setTipoCamion,
  pesoBruto,
  setPesoBruto,
  origen,
  setOrigen,
  destino,
  setDestino,
  horaCarga,
  setHoraCarga,
  horaEntrega,
  setHoraEntrega,
}) {
  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };

  return (
    <div className="postular-viaje-card">
      <h2 className="title">Postular Viaje</h2>

      <div className="form-group">
        <label>Foto de la carga</label>
        <div className="image-upload">
          <input type="file" accept="image/*" onChange={handleImageUpload} />
          {image ? (
            <img src={image} alt="Cargar Foto" className="uploaded-image" />
          ) : (
            <div className="image-placeholder">
              <p>Cargar Foto</p>
            </div>
          )}
        </div>
      </div>

      <div className="form-group">
        <label>Título</label>
        <input
          type="text"
          value={titulo}
          onChange={(e) => setTitulo(e.target.value)}
          placeholder="Título"
        />
      </div>

      <div className="form-group">
        <label>Precio</label>
        <input
          type="number"
          value={precio}
          onChange={(e) => setPrecio(e.target.value)}
          placeholder="Precio"
        />
      </div>

      <div className="form-group">
        <label>Detalles</label>
        <input
          type="text"
          value={detalles}
          onChange={(e) => setDetalles(e.target.value)}
          placeholder="Detalles"
        />
      </div>

      <div className="form-group">
        <label>Tipo de Camión</label>
        <input
          type="text"
          value={tipoCamion}
          onChange={(e) => setTipoCamion(e.target.value)}
          placeholder="Tipo de Camión"
        />
      </div>

      <div className="form-group">
        <label>Peso en Bruto</label>
        <input
          type="text"
          value={pesoBruto}
          onChange={(e) => setPesoBruto(e.target.value)}
          placeholder="Peso en Bruto"
        />
      </div>

      <div className="form-group">
        <label>Origen</label>
        <input
          type="text"
          value={origen}
          onChange={(e) => setOrigen(e.target.value)}
          placeholder="Origen"
        />
      </div>

      <div className="form-group">
        <label>Destino</label>
        <input
          type="text"
          value={destino}
          onChange={(e) => setDestino(e.target.value)}
          placeholder="Destino"
        />
      </div>

      <div className="form-group">
        <label>Hora de Carga</label>
        <input
          type="time"
          value={horaCarga}
          onChange={(e) => setHoraCarga(e.target.value)}
          placeholder="Hora de Carga"
        />
      </div>

      <div className="form-group">
        <label>Hora de Entrega</label>
        <input
          type="time"
          value={horaEntrega}
          onChange={(e) => setHoraEntrega(e.target.value)}
          placeholder="Hora de Entrega"
        />
      </div>
    </div>

    
  );
}

export default PostularViaje;

