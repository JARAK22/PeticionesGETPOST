import { useState } from "react";
import { useParams } from "react-router-dom";
import NavBar from "./NavBar"; 

function ActulizarEmpleado() {

    const [empleado, setEmpleado] = useState({
        nombre: '',
        cargo: '',
        salario: 0,
        fecha_ingreso: ''
    });
    const { id } = useParams();

    async function actualizar(e) {
        e.preventDefault();
        await fetch(`https://skojryaxbquqtwvuyhfv.supabase.co/rest/v1/empleados?id=eq.${id}`, {
            method: 'PATCH',
            headers: {
                "content-type": "application/json",
                apiKey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNrb2pyeWF4YnF1cXR3dnV5aGZ2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTc1MTQ0MTUsImV4cCI6MjA3MzA5MDQxNX0.nZMSWKNIve_UmSe1KEehy9ocL2FIR25QflnccDRQ998',                
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNrb2pyeWF4YnF1cXR3dnV5aGZ2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTc1MTQ0MTUsImV4cCI6MjA3MzA5MDQxNX0.nZMSWKNIve_UmSe1KEehy9ocL2FIR25QflnccDRQ998'
            },
            body: JSON.stringify({ nombre: empleado.nombre, cargo: empleado.cargo, salario: empleado.salario, fecha_ingreso: empleado.fecha_ingreso })
        }).then(res => res.json());
    }


  return (
    <div className="container-crear-empleado">
      <NavBar />
      <h1>ACTUALIZAR EMPLEADO</h1>
      <form onSubmit={actualizar} className="form-crear-empleado">
        <label htmlFor="nombre">Nombre</label>
        <input
          type="text"
          id="nombre"
          name="nombre"
          onChange={(e) => setEmpleado({ ...empleado, nombre: e.target.value })}
        />
        <label htmlFor="cargo">Cargo</label>
        <input
          type="text"
          id="cargo"
          name="cargo"
          onChange={(e) => setEmpleado({ ...empleado, cargo: e.target.value })}
        />
        <label htmlFor="salario">Salario</label>
        <input
          type="text"
          id="salario"
          name="salario"
          onChange={(e) =>
            setEmpleado({ ...empleado, salario: parseInt(e.target.value) })
          }
        />
        <label htmlFor="fecha_ingreso">Fecha Ingreso</label>
        <input
          type="date"
          id="fecha_ingreso"
          name="fecha_ingreso"
          onChange={(e) =>
            setEmpleado({ ...empleado, fecha_ingreso: e.target.value })
          }
        />
        <button type="submit">ACTUALIZAR</button>
      </form>
    </div>
  );
}

export default ActulizarEmpleado;
