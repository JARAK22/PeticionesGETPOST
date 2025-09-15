import './styles/Home.css';
import NavBar from './NavBar';

function Home() {
    return (
        <div className="container-home">
            <NavBar />
            <h1>BIENVENIDO AL SISTEMA</h1>
            <p>Bienvenido a nuestro sistema de gestión de empleados, donde podrá gestionar todos los empleados de su empresa.</p>
        </div>
    );
}

export default Home;