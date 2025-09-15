import { useState } from 'react';
import NavBar from './NavBar';

function CrearDepartamento() {

    const [departamento, setDepartamento] = useState({
        nombre: '',
        descripcion: '',
        empresa_id: ''
    });

    async function handleSubmit(e) {
        e.preventDefault();
        await fetch('https://skojryaxbquqtwvuyhfv.supabase.co/rest/v1/departamento', {
            method: 'POST',
            headers: {
                "content-type": "application/json",
                apiKey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNrb2pyeWF4YnF1cXR3dnV5aGZ2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTc1MTQ0MTUsImV4cCI6MjA3MzA5MDQxNX0.nZMSWKNIve_UmSe1KEehy9ocL2FIR25QflnccDRQ998',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNrb2pyeWF4YnF1cXR3dnV5aGZ2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTc1MTQ0MTUsImV4cCI6MjA3MzA5MDQxNX0.nZMSWKNIve_UmSe1KEehy9ocL2FIR25QflnccDRQ998'
            },
            body: JSON.stringify({ nombre: departamento.nombre, descripcion: departamento.descripcion, empresa_id: departamento.empresa_id })
        })
    }

    return (
        <div className="container-crear-empleado">
            <NavBar />
            <h1>CREAR DEPARTAMENTO</h1>
            <form onSubmit={handleSubmit} className="form-crear-empleado">
                <label htmlFor="nombre">Nombre</label>
                <input type="text" id="nombre" name="nombre" onChange={(e) => setDepartamento({ ...departamento, nombre: e.target.value })} />
                <label htmlFor="descripcion">Descripcion</label>
                <input type="text" id="descripcion" name="descripcion" onChange={(e) => setDepartamento({ ...departamento, descripcion: e.target.value })} />
                <label htmlFor="empresa_id">Empresa_id</label>
                <input type="text" id="empresa_id" name="empresa_id" onChange={(e) => setDepartamento({ ...departamento, empresa_id: e.target.value })} />
                <button type="submit">Crear</button>
            </form>
        </div>
    );
}

export default CrearDepartamento;