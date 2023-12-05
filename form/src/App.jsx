import "./App.css";
import Form from "./components/Form";

function App() {
  return (
    <div className="App">
      <h2>Form</h2>
      <Form user={{name: "Dode", email: "dode@gmail.com"}}/>
    </div>
  );
}

export default App;
