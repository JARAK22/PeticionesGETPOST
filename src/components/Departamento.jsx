import { useState, useEffect } from 'react';
import NavBar from './NavBar';

function Departamento() {

    const [departamento, setDepartamento] = useState([]);

    useEffect(() => {
        fetch('https://skojryaxbquqtwvuyhfv.supabase.co/rest/v1/departamento?select=*', {
            headers: {
                apiKey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNrb2pyeWF4YnF1cXR3dnV5aGZ2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTc1MTQ0MTUsImV4cCI6MjA3MzA5MDQxNX0.nZMSWKNIve_UmSe1KEehy9ocL2FIR25QflnccDRQ998',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNrb2pyeWF4YnF1cXR3dnV5aGZ2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTc1MTQ0MTUsImV4cCI6MjA3MzA5MDQxNX0.nZMSWKNIve_UmSe1KEehy9ocL2FIR25QflnccDRQ998'
            }
        }).then(res => res.json()).then(data => setDepartamento(data));
    }, []);

    const editarEmpleado = (id) => {
        console.log(id);
    }

    const eliminarEmpleado = (id) => {
        fetch(`https://skojryaxbquqtwvuyhfv.supabase.co/rest/v1/departamento?id=eq.${id}`, {
            method: 'DELETE',
            headers: {
                apiKey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNrb2pyeWF4YnF1cXR3dnV5aGZ2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTc1MTQ0MTUsImV4cCI6MjA3MzA5MDQxNX0.nZMSWKNIve_UmSe1KEehy9ocL2FIR25QflnccDRQ998',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNrb2pyeWF4YnF1cXR3dnV5aGZ2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTc1MTQ0MTUsImV4cCI6MjA3MzA5MDQxNX0.nZMSWKNIve_UmSe1KEehy9ocL2FIR25QflnccDRQ998'
            }
        })
    }
    return (
            <div className="container-empleados">
            <NavBar />
                <h1>DEPARTAMENTO</h1>
                <table>
                    <thead>
                        <tr>
                            <th>Nombre</th>
                            <th>Descripcion</th>
                            <th>Empresa_id</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {departamento.map(dep => (
                            <tr key={dep.id}>
                                <td>{dep.nombre}</td>
                                <td>{dep.descripcion}</td>
                                <td>{dep.empresa_id}</td>
                                <td>
                                    <button onClick={() => editarEmpleado(dep.id)} className='btn-editar'>Editar</button>
                                    <button onClick={() => eliminarEmpleado(dep.id)} className='btn-eliminar'>Eliminar</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
    );
}

export default Departamento;