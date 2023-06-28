import React from 'react';
import Alumno from './Alumno';

const TablaAlumnos = ({ alumnos, eliminarAlumno, total, promedioTotal }) => {
  return (
    <div className="tabla">
      <h2>Lista de Alumnos</h2>
      <table className="alumnos-table">
        <thead>
             <tr>
               <th>Nombre</th>
               <th>Apellido</th>
               <th>Edad</th>
               <th>Sexo</th>
               <th>Materia</th>
               <th>Grado</th>
               <th>Promedio</th>
               <th>Acciones</th>
             </tr>
           </thead>
        <tbody>
          {alumnos.map(alumno => (
            <Alumno key={alumno.id} alumno={alumno} eliminarAlumno={eliminarAlumno} />
          ))}
        </tbody>
      </table>
      <div className="contador-container">
        <p className="contador">Total Alumnos: <span>{total}</span></p>
        <p className="contador">Promedio Total: <span>{isNaN(promedioTotal) ? 0 : promedioTotal.toFixed(2)}</span></p>
      </div>
    </div>
  );
};

export default TablaAlumnos;
