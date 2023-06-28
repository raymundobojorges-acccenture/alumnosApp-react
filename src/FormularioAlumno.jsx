import React, { useRef } from 'react';

const FormularioAlumno = ({ agregarAlumno }) => {
  const alumnoFormRef = useRef(null);
  const nombreRef = useRef(null);
  const apellidoRef = useRef(null);
  const edadRef = useRef(null);
  const sexoRef = useRef(null);
  const materiaRef = useRef(null);
  const gradoRef = useRef(null);
  const promedioRef = useRef(null);

  const handleSubmit = e => {
    e.preventDefault();

    const form = alumnoFormRef.current;

    const newAlumno = {
      nombre: nombreRef.current.value,
      apellido: apellidoRef.current.value,
      edad: edadRef.current.value,
      sexo: sexoRef.current.value,
      materia: materiaRef.current.value,
      grado: gradoRef.current.value,
      promedio: promedioRef.current.value
    };

    agregarAlumno(newAlumno);

    form.reset();
  };

  return (
    <div className="formulario">
      <h2>Agregar Alumno</h2>
      <form ref={alumnoFormRef} onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="nombre">Nombre</label>
          <input
            type="text"
            id="nombre"
            name="nombre"
            ref={nombreRef}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="apellido">Apellido</label>
          <input
            type="text"
            id="apellido"
            name="apellido"
            ref={apellidoRef}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="edad">Edad</label>
          <input
            type="number"
            id="edad"
            name="edad"
            ref={edadRef}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="sexo">Sexo</label>
          <select
            id="sexo"
            name="sexo"
            ref={sexoRef}
            required
          >
            <option value="">Seleccionar</option>
            <option value="Masculino">Masculino</option>
            <option value="Femenino">Femenino</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="materia">Materia</label>
          <select
            id="materia"
            name="materia"
            ref={materiaRef}
            required
          >
            <option value="">Seleccionar</option>
            <option value="Español">Español</option>
            <option value="Matemáticas">Matemáticas</option>
            <option value="Historia">Historia</option>
            <option value="Geografía">Geografía</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="grado">Grado</label>
          <select
            id="grado"
            name="grado"
            ref={gradoRef}
            required
          >
            <option value="">Seleccionar</option>
            <option value="1">1er Grado</option>
            <option value="2">2do Grado</option>
            <option value="3">3er Grado</option>
            <option value="4">4to Grado</option>
            <option value="5">5to Grado</option>
            <option value="6">6to Grado</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="promedio">Promedio</label>
          <input
            type="number"
            id="promedio"
            name="promedio"
            ref={promedioRef}
            required
          />
        </div>
        <button type="submit">Agregar Alumno</button>
      </form>
    </div>
  );
};

export default FormularioAlumno;
