import Empleados from './components/Empleados';
import CrearEmpleado from './components/CrearEmpleado';
import Empresa from './components/Empresa';
import Departamento from './components/Departamento';
import CrearEmpresa from './components/CrearEmpresa';
import CrearDepartamento from './components/CrearDepartamento';

function App() {
  return (
    <div>
      <Empresa />
      <CrearEmpresa />
      <Departamento />
      <CrearDepartamento />
    </div>
  );
}

export default App;