import { useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

function ActualizarDepartamento() {
  const { iddepartamento } = useParams();
  const [nombre, setNombre] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [empresa_id, setEmpresaId] = useState("");

  //para capturas los estados de una varieble como una caja donde nos permite modificarlas con el set
  const { id } = useParams();

  async function actualizar(e) {
    e.preventDefault();
    await fetch(
      `https://skojryaxbquqtwvuyhfv.supabase.co/rest/v1/departamento?id=eq.${id}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          apikey:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNrb2pyeWF4YnF1cXR3dnV5aGZ2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTc1MTQ0MTUsImV4cCI6MjA3MzA5MDQxNX0.nZMSWKNIve_UmSe1KEehy9ocL2FIR25QflnccDRQ998",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNrb2pyeWF4YnF1cXR3dnV5aGZ2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTc1MTQ0MTUsImV4cCI6MjA3MzA5MDQxNX0.nZMSWKNIve_UmSe1KEehy9ocL2FIR25QflnccDRQ998",
        }, //cerp donde se envia la informacion
        body: JSON.stringify({
          nombre: nombre,
          descripcion: descripcion,
          empresa_id: empresa_id,
        }),
      }
    ).then((res) => res.json());
  }

  return (
    <div>
      <h2>Actualizar Departamento</h2>
      <form onSubmit={actualizar}>
        <input
          placeholder="Escriba Nombre"
          type="text"
          onChange={(e) => setNombre(e.target.value)}
        ></input>
        <input
          placeholder="Escriba Descripcion"
          type="text"
          onChange={(e) => setDescripcion(e.target.value)}
        ></input>
        <input
          placeholder="Escriba Empresa Id"
          type="text"
          onChange={(e) => setEmpresaId(e.target.value)}
        ></input>

        <button type="submit">Actualizar</button>
      </form>
      <Link to="/departamentos">Volver</Link>
    </div>
  );
}
export default ActualizarDepartamento;
