import { Link } from 'react-router-dom';
import './styles/NavBar.css';
import { Building2 } from 'lucide-react';

function NavBar() {
    return (
        <div className="navbar">
            <div className="logo">
                <Building2 style={{ width: '50px', height: '50px' }} /> 
            </div>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/empresa">Empresa</Link></li>
                <li><Link to="/crear-empresa">Crear Empresa</Link></li>
                <li><Link to="/empleados">Empleados</Link></li>
                <li><Link to="/crear-empleado">Crear Empleado</Link></li>
                <li><Link to="/departamento">Departamento</Link></li>
                <li><Link to="/crear-departamento">Crear Departamento</Link></li>
            </ul>
        </div>
    );
}

export default NavBar;