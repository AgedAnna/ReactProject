const Desafio4 = () => {
  const pessoas = [
    { id: 1, nome: "Anna", idade: 19, prof: "Dev" },
    { id: 2, nome: "Agata", idade: 18, prof: "Medica" },
    { id: 3, nome: "Jorge", idade: 10, prof: "Astronauta" },
  ];
  return (
    <div>
      {pessoas.map((pessoa) => (
        <li key={pessoa.id}>
          {pessoa.nome} -
          {pessoa.idade} -
          {pessoa.prof} -
          {pessoa.idade >= 18 ? "Pode tirar Habilitação" : "Não pode tirar Habilitação"}
        </li>
      ))}
    </div>
  );
};

export default Desafio4
