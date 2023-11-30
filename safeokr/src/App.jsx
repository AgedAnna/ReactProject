import "./App.css";
import Rick from "./assets/img3.jpg";
import CarDetails from "./components/CarDetails";
import Conditional from "./components/Conditional";
import Container from "./components/Container";
import ExecuteFuction from "./components/ExecuteFuction";
import Lista from "./components/Lista";
import ManageData from "./components/ManageData";
import ShowName from "./components/ShowUser";
import Desafio4 from "./components/Desafio4"

function App() {
  const cars = [
    { id: 1, brand: "Ferrari", color: "Vermelha", newCar: false, km: 500 },
    { id: 2, brand: "Audi", color: "Branco", newCar: true, km: 300 },
    { id: 3, brand: "BMW", color: "Azul", newCar: false, km: 900 },
    { id: 4, brand: "Mustang", color: "Preto", newCar: true, km: 1500 },
  ];

  function showMessage() {
    console.log("Evento componente pai");
  }
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
      <div>
        <ManageData />
      </div>
      <div>
        <Lista />
      </div>
      <br />{" "}
      <div>
        <Conditional />
      </div>
      {/*props*/}
      <div>
        <ShowName name="Rick" />
      </div>
      {/*destructuring*/}
      <div>
        <CarDetails brand="BMW" KM={500} color="black" newCar={true} />
        <CarDetails brand="Audi" KM={600} color="black" newCar={false} />
        <CarDetails brand="Mustang" KM={1000} color="black" newCar={false} />
      </div>
      {/*lopp array de obejetos*/}
      <div>
        {cars.map((car) => (
          <CarDetails
            key={car.id}
            brand={car.brand}
            color={car.color}
            KM={car.km}
            newCar={car.newCar}
          />
        ))}
      </div>
      <Container>
        <p>Teste</p>
      </Container>
      <ExecuteFuction myFunction={showMessage} />
      <Desafio4 />
    </div>
  );
}

export default App;
