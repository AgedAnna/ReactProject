import "./App.css";
import Rick from "./assets/img3.jpg";
import ManageData from "./components/ManageData";

function App() {
  return (
    <div>
      <h1>Olá Mundo</h1>

      {/*Imagem em public*/}
      <div>
        <img src="/img1.jpg" alt="Rick" width={"500px"} />
      </div>

      {/*Imagem em assent*/}
      <div>
        <img src={Rick} alt="Rick" width={"500px"} />
      </div>
      <ManageData />
    </div>
  );
}

export default App;
