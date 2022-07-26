import { Route, Routes } from "react-router-dom";
import "./App.css";
import DisplayTemplate from "./components/data/DisplayTemplate";
import LandingTemplate from "./components/data/LandingTemplate";
import Templates from "./components/data/templates";
// import { Form } from "./components/Form";

function App() {
  return (
    <div className="container">
      <Routes>
        <Route path="/" element={ <DisplayTemplate/>} />
        <Route path="/edit/:id"  element={ <LandingTemplate />} />
        <Route path="/add" element={<Templates />} />
        {/* <Route path="/form" element={<Form />} /> */}
      </Routes>
    </div>
  );
}

export default App;
