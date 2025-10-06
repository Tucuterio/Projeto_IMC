import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Pages/Home";
import Calculadora from "./Pages/Calculadora";
import Sobrenos from "./Pages/SobreNós";
import Login from "./Pages/Login";
import Navbar from "./Pages/Navbar";
import styles from "./App.css";

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/calculadora" element={<Calculadora />} />
          <Route path="/sobrenos" element={<Sobrenos />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
