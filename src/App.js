import Login from "./componentes/Login";
import './App.css'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Listado from "./componentes/Listado";
import Register from "./componentes/Register";

function App() {
  return (
    <div id="App">
      <BrowserRouter>
        <Routes>
          <Route Exact path="/" element={<Login />} />
          <Route Exact path="/register" element={<Register />} />
          <Route Exact path="/listado/*" element={<Listado />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
