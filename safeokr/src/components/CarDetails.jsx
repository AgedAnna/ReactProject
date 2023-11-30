const CarDetails = ({ brand, KM, color, newCar }) => {
  return (
    <div>
      <h2>Carro:</h2>
      <ul>
        <li>Marca: {brand}</li>
        <li>KM: {KM}</li>
        <li>Cor: {color}</li>
        <li>{newCar ? "Carro novo" : "Carro velho"}</li>
      </ul>
    </div>
  );
};

export default CarDetails;
