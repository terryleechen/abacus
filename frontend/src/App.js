import './App.css';
import { Routes, Route } from "react-router";
import Dashboard from "./components/Landing.js";
import Analytics from "./components/dashboard/Dashboard.js";

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/Analytics" element={<Analytics />} />
      </Routes>
    </div>
  );
}

export default App;
