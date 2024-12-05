import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import {faChartSimple} from '@fortawesome/free-solid-svg-icons';
import { faClock } from '@fortawesome/free-solid-svg-icons';
import { faFile } from '@fortawesome/free-solid-svg-icons';


const NavBar = () => {
  return(
    <nav className='NavBar'>
        <Link to="/" className='logo'></Link>
        <ul className='menu'>
            <li><Link className='menu-link' to="/inicio"><FontAwesomeIcon icon={faHouse} className='icono' />Inicio</Link></li>
            <li><Link className='menu-link' to="/estadistica"><FontAwesomeIcon icon={faChartSimple} className='icono' />Estadistica</Link></li>
            <li><Link className='menu-link' to="/actividad"><FontAwesomeIcon icon={faClock} className='icono' />Actividad</Link></li>
            <li><Link className='menu-link' to="/postulaciones"><FontAwesomeIcon icon={faFile} className='icono' />Postulaciones</Link></li>
        </ul>
    </nav>
  )    
};

export default NavBar