import React from 'react';

const Alumno = ({ alumno, eliminarAlumno }) => {
  const { id, nombre, apellido, edad, sexo, materia, grado, promedio } = alumno;

  return (
    <tr>
      <td>{nombre}</td>
      <td>{apellido}</td>
      <td>{edad}</td>
      <td>{sexo}</td>
      <td>{materia}</td>
      <td>{grado}</td>
      <td>{promedio}</td>
      <td>
        <button onClick={() => eliminarAlumno(id)}>Eliminar</button>
      </td>
    </tr>
  );
};

export default Alumno;