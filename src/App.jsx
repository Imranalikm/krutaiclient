import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import Contact from "./components/Contact/Contact";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Contact />} /> 
      </Routes>
    </>
  );
}

export default App;
