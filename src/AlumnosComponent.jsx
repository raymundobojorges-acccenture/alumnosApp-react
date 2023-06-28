// crear componente de formulario y tabla
// usar use ref para el formulario
// usar useMemo para el promedio

import React, { useState, useEffect, useMemo } from 'react';
import './alumnos-styles.css';
import FormularioAlumno from './FormularioAlumno';
import TablaAlumnos from './TablaAlumnos';

const ListaAlumnos = () => {
  const [alumnos, setAlumnos] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    let total = alumnos.length;
    setTotal(total);
  }, [alumnos]);

  const agregarAlumno = newAlumno => {
    newAlumno.id = Date.now().toString();

    setAlumnos(prevAlumnos => [...prevAlumnos, newAlumno]);
  };

  const eliminarAlumno = id => {
    setAlumnos(prevAlumnos => prevAlumnos.filter(alumno => alumno.id !== id));
  };

  // const promedioTotal = alumnos.length > 0 ? alumnos.reduce((total, alumno) => total + parseFloat(alumno.promedio), 0) / alumnos.length : 0;

  const promedioTotal = useMemo(() => {
    if (alumnos.length === 0) {
      return 0;
    }

    const sumaPromedios = alumnos.reduce(
      (total, alumno) => total + parseFloat(alumno.promedio),
      0
    );

    return sumaPromedios / alumnos.length;
  }, [alumnos]);
  
  return (
    <div className="container">
      <FormularioAlumno agregarAlumno={agregarAlumno} />
      <TablaAlumnos alumnos={alumnos} eliminarAlumno={eliminarAlumno} total={total} promedioTotal={promedioTotal} />
    </div>
  );
};

export default ListaAlumnos;
