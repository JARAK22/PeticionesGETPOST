import { useState, useEffect } from 'react';

function Empleados() {

    const [empleados, setEmpleados] = useState([]);

    useEffect(() => {
        fetch('https://skojryaxbquqtwvuyhfv.supabase.co/rest/v1/empleados?select=*', {
            headers: {
                apiKey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNrb2pyeWF4YnF1cXR3dnV5aGZ2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTc1MTQ0MTUsImV4cCI6MjA3MzA5MDQxNX0.nZMSWKNIve_UmSe1KEehy9ocL2FIR25QflnccDRQ998',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNrb2pyeWF4YnF1cXR3dnV5aGZ2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTc1MTQ0MTUsImV4cCI6MjA3MzA5MDQxNX0.nZMSWKNIve_UmSe1KEehy9ocL2FIR25QflnccDRQ998'
            }
        }).then(res => res.json()).then(data => setEmpleados(data));
    }, []);

    const editarEmpleado = (id) => {
        console.log(id);
    }

    const eliminarEmpleado = (id) => {
        console.log(id);
    }
    return (
        <div className="container-empleados">
            <h1>EMPLEADOS</h1>
            <table>
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Cargo</th>
                        <th>Salario</th>
                        <th>Fecha Ingreso</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {empleados.map(empleado => (
                        <tr key={empleado.id}>
                            <td>{empleado.nombre}</td>
                            <td>{empleado.cargo}</td>
                            <td>{empleado.salario}</td>
                            <td>{empleado.fecha_ingreso}</td>
                            <td>
                                <button onClick={() => editarEmpleado(empleado.id)} className='btn-editar'>Editar</button>
                                <button onClick={() => eliminarEmpleado(empleado.id)} className='btn-eliminar'>Eliminar</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Empleados;