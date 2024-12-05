import React, { useState } from 'react';
import PostularViaje from '../Componets/Postviaje';
import VistaPrevia from '../Componets/Vistprev';
import Sidebar from '../Componets/Sidebar';
import styles from './POSTULACIONES.module.css';

function App() {
  // Estado para cada campo
  const [image, setImage] = useState(null);
  const [titulo, setTitulo] = useState('');
  const [precio, setPrecio] = useState('');
  const [detalles, setDetalles] = useState('');
  const [tipoCamion, setTipoCamion] = useState('');
  const [pesoBruto, setPesoBruto] = useState('');
  const [origen, setOrigen] = useState('');
  const [destino, setDestino] = useState('');
  const [horaCarga, setHoraCarga] = useState('');
  const [horaEntrega, setHoraEntrega] = useState('');

  return (
    <div className={styles['app-container']}>
      <Sidebar />
      <div className={styles['main-content']}>
        {/* Formulario */}
        <div className={styles['form-container']}>
          <PostularViaje
            image={image}
            setImage={setImage}
            titulo={titulo}
            setTitulo={setTitulo}
            precio={precio}
            setPrecio={setPrecio}
            detalles={detalles}
            setDetalles={setDetalles}
            tipoCamion={tipoCamion}
            setTipoCamion={setTipoCamion}
            pesoBruto={pesoBruto}
            setPesoBruto={setPesoBruto}
            origen={origen}
            setOrigen={setOrigen}
            destino={destino}
            setDestino={setDestino}
            horaCarga={horaCarga}
            setHoraCarga={setHoraCarga}
            horaEntrega={horaEntrega}
            setHoraEntrega={setHoraEntrega}
          />
        </div>

        {/* Vista previa */}
        <div className={styles['preview-container']}>
          <VistaPrevia
            image={image}
            titulo={titulo}
            precio={precio}
            detalles={detalles}
            tipoCamion={tipoCamion}
            pesoBruto={pesoBruto}
            origen={origen}
            destino={destino}
            horaCarga={horaCarga}
            horaEntrega={horaEntrega}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
