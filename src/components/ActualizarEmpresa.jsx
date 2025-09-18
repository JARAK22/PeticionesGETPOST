import { useState } from "react";
import { useParams } from "react-router-dom";
import NavBar from "./NavBar";

function ActualizarEmpresa() {
  const [empresa, setEmpresa] = useState({
    nombre: "",
    nit: "",
    direccion: "",
    telefono: "",
    fecha_creacion: "",
  });
  const { id } = useParams();

  async function actualizar(e) {
    e.preventDefault();
    await fetch(
      `https://skojryaxbquqtwvuyhfv.supabase.co/rest/v1/empresa?id=eq.${id}`,
      {
        method: "PATCH",
        headers: {
          "content-type": "application/json",
          apiKey:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNrb2pyeWF4YnF1cXR3dnV5aGZ2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTc1MTQ0MTUsImV4cCI6MjA3MzA5MDQxNX0.nZMSWKNIve_UmSe1KEehy9ocL2FIR25QflnccDRQ998",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNrb2pyeWF4YnF1cXR3dnV5aGZ2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTc1MTQ0MTUsImV4cCI6MjA3MzA5MDQxNX0.nZMSWKNIve_UmSe1KEehy9ocL2FIR25QflnccDRQ998",
        },
        body: JSON.stringify({
          nombre: empresa.nombre,
          nit: empresa.nit,
          direccion: empresa.direccion,
          telefono: empresa.telefono,
          fecha_creacion: empresa.fecha_creacion,
        }),
      }
    ).then((res) => res.json());
  }

  
  return (
    <div className="container-crear-empleado">
      <NavBar />
      <h1>ACTUALIZAR EMPRESA</h1>
      <form onSubmit={actualizar} className="form-crear-empleado">
        <label htmlFor="nombre">Nombre</label>
        <input
          type="text"
          id="nombre"
          name="nombre"
          onChange={(e) => setEmpresa({ ...empresa, nombre: e.target.value })}
        />
        <label htmlFor="nit">Nit</label>
        <input
          type="text"
          id="nit"
          name="nit"
          onChange={(e) => setEmpresa({ ...empresa, nit: e.target.value })}
        />
        <label htmlFor="direccion">Direccion</label>
        <input
          type="text"
          id="direccion"
          name="direccion"
          onChange={(e) =>
            setEmpresa({ ...empresa, direccion: e.target.value })
          }
        />
        <label htmlFor="telefono">Telefono</label>
        <input
          type="text"
          id="telefono"
          name="telefono"
          onChange={(e) => setEmpresa({ ...empresa, telefono: e.target.value })}
        />
        <label htmlFor="fecha_creacion">Fecha Creacion</label>
        <input
          type="date"
          id="fecha_creacion"
          name="fecha_creacion"
          onChange={(e) =>
            setEmpresa({ ...empresa, fecha_creacion: e.target.value })
          }
        />
        <button type="submit">ACTUALIZAR</button>
      </form>
    </div>
  );
}

export default ActualizarEmpresa;
