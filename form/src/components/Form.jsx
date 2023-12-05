import { useState } from "react";

const Form = (user) => {
  const [name, setName] = useState(user ? user.name : "Não há dados");
  const [email, setEmail] = useState(user ? user.email :"Não há dados");

  const Name = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("enviando formulário");
  };

  console.log(user.name);
  console.log(user.email);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <div
        style={{
          width: "300px",
          padding: "20px",
          height: "300px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          borderRadius: "8px",
          background: "white",
        }}
      >
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: "20px" }}>
            <label htmlFor="name" style={{ marginRight: "20px" }}>
              Nome
            </label>
            <input
              type="text"
              name="name"
              placeholder="Digite seu nome"
              onChange={Name}
              value={name}
            />
          </div>
          <div style={{ marginBottom: "15px" }}>
            <label>
              <span style={{ marginRight: "15px" }}>E-mail</span>
              <input
                type="email"
                name="email"
                placeholder="Digite seu email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
            </label>
          </div>
          <input
            type="submit"
            value="Enviar"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "40px",
            }}
          />
        </form>
      </div>
    </div>
  );
};

export default Form;
