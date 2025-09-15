import { useState } from 'react';
import NavBar from './NavBar';

function CrearEmpleado() {

    const [empleado, setEmpleado] = useState({
        nombre: '',
        cargo: '',
        salario: 0,
        fecha_ingreso: ''
    });

    async function handleSubmit(e) {
        e.preventDefault();
        await fetch('https://skojryaxbquqtwvuyhfv.supabase.co/rest/v1/empleados', {
            method: 'POST',
            headers: {
                "content-type": "application/json",
                apiKey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNrb2pyeWF4YnF1cXR3dnV5aGZ2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTc1MTQ0MTUsImV4cCI6MjA3MzA5MDQxNX0.nZMSWKNIve_UmSe1KEehy9ocL2FIR25QflnccDRQ998',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNrb2pyeWF4YnF1cXR3dnV5aGZ2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTc1MTQ0MTUsImV4cCI6MjA3MzA5MDQxNX0.nZMSWKNIve_UmSe1KEehy9ocL2FIR25QflnccDRQ998'
            },
            body: JSON.stringify({ nombre: empleado.nombre, cargo: empleado.cargo, salario: empleado.salario, fecha_ingreso: empleado.fecha_ingreso })
        })
    }

    return (
        <div className="container-crear-empleado">
            <NavBar />
            <h1>CREAR EMPLEADO</h1>
            <form onSubmit={handleSubmit} className="form-crear-empleado">
                <label htmlFor="nombre">Nombre</label>
                <input type="text" id="nombre" name="nombre" onChange={(e) => setEmpleado({ ...empleado, nombre: e.target.value })} />
                <label htmlFor="cargo">Cargo</label>
                <input type="text" id="cargo" name="cargo" onChange={(e) => setEmpleado({ ...empleado, cargo: e.target.value })} />
                <label htmlFor="salario">Salario</label>
                <input type="text" id="salario" name="salario" onChange={(e) => setEmpleado({ ...empleado, salario: parseInt(e.target.value) })} />
                <label htmlFor="fecha_ingreso">Fecha Ingreso</label>
                <input type="date" id="fecha_ingreso" name="fecha_ingreso" onChange={(e) => setEmpleado({ ...empleado, fecha_ingreso: e.target.value })} />
                <button type="submit">Crear</button>
            </form>
        </div>
    );
}

export default CrearEmpleado;