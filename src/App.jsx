import Empleados from "./components/Empleados";
import CrearEmpleado from "./components/CrearEmpleado";
import Empresa from "./components/Empresa";
import CrearEmpresa from "./components/CrearEmpresa";
import Departamento from "./components/Departamento";
import CrearDepartamento from "./components/CrearDepartamento";
import ActualizarEmpleado from "./components/ActualizarEmpleado";
import ActualizarEmpresa from "./components/ActualizarEmpresa";
import ActualizarDepartamento from "./components/ActualizarDepartamento";
import Home from "./components/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/empresa" element={<Empresa />} />
          <Route path="/crear-empresa" element={<CrearEmpresa />} />
          <Route path="/empleados" element={<Empleados />} />
          <Route path="/crear-empleado" element={<CrearEmpleado />} />
          <Route path="/departamento" element={<Departamento />} />
          <Route path="/crear-departamento" element={<CrearDepartamento />} />
          <Route
            path="/actualizar-empleado/:id"
            element={<ActualizarEmpleado />}
          />
          <Route
            path="/actualizar-empresa/:id"
            element={<ActualizarEmpresa />}
          />
          <Route
            path="/actualizar-departamento/:id"
            element={<ActualizarDepartamento />}
          />
        </Routes>
      </Router>
    </div>
  );
}
export default App;
