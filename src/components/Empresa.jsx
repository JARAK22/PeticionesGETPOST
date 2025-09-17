import { useState, useEffect } from 'react';
import NavBar from './NavBar';

function Empresa() {

    const [empresa, setEmpresa] = useState([]);

    useEffect(() => {
        fetch('https://skojryaxbquqtwvuyhfv.supabase.co/rest/v1/empresa?select=*', {
            headers: {
                apiKey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNrb2pyeWF4YnF1cXR3dnV5aGZ2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTc1MTQ0MTUsImV4cCI6MjA3MzA5MDQxNX0.nZMSWKNIve_UmSe1KEehy9ocL2FIR25QflnccDRQ998',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNrb2pyeWF4YnF1cXR3dnV5aGZ2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTc1MTQ0MTUsImV4cCI6MjA3MzA5MDQxNX0.nZMSWKNIve_UmSe1KEehy9ocL2FIR25QflnccDRQ998'
            }
        }).then(res => res.json()).then(data => setEmpresa(data));
    }, []);

    const editarEmpleado = (id) => {
        console.log(id);
    }

    const eliminarEmpresa = (id) => {
        fetch(`https://skojryaxbquqtwvuyhfv.supabase.co/rest/v1/empresa?id=eq.${id}`, {
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
                <h1>EMPPRESA</h1>
                <table>
                    <thead>
                        <tr>
                            <th>Nombre</th>
                            <th>Nit</th>
                            <th>Direccion</th>
                            <th>Telefono</th>
                            <th>Fecha creacion</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {empresa.map(empre => (
                            <tr key={empre.id}>
                                <td>{empre.nombre}</td>
                                <td>{empre.nit}</td>
                                <td>{empre.direccion}</td>
                                <td>{empre.telefono}</td>
                                <td>{empre.fecha_creacion}</td>
                                <td>
                                    <button onClick={() => editarEmpleado(empre.id)} className='btn-editar'>Editar</button>
                                    <button onClick={() => eliminarEmpresa(empre.id)} className='btn-eliminar'>Eliminar</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
    );
}

export default Empresa;