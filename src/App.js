import Login from "./componentes/Login";
import './App.css'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Listado from "./componentes/Listado";
import Background from './componentes/Background';
import Register from "./componentes/Register";

function App() {
  return (
    <div id="App">
      <Background />
      <BrowserRouter>
        <Routes>
          <Route Exact path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/listado" element={<Listado />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
