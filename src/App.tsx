import "./App.css";
import { Form } from "./components/Form";

function App() {
  return (
    <div className="App row" style={{ width: "100%" }}>
      <div className="col-md-3 border" style={{height:"100vh"}}> sidebar</div>
        <div className="col-md-8 border  rounded-3 p-4 " style={{ margin: "auto", marginTop: "30px" }}>
          <div style={{ textAlign: "center" }}>
            <h4 className="mb-4">Send Email using this...</h4>
          </div>
          <Form />
        </div>
    </div>
  );
}

export default App;
