import { useState } from "react";

const Lista = () => {
  const [list] = useState([
    "rick",
    "morty",
    "samer",
    " david",
    "Homem Passaro",
  ]);

  const [users, setUsers] = useState([
    { id: 1, name: "Anna", age: 19 },
    { id: 2, name: "Dode", age: 10 },
    { id: 3, name: "Binca", age: 18 },
  ]);

  const deleteRandom = () => {
    const randomNumber = Math.floor(Math.random() * 4);

    setUsers((prevUsers) => {
      return prevUsers.filter((user) => randomNumber !== user.id);
    });
  };

  return (
    <div>
      <ul>
        {list.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} - {user.age}
          </li>
        ))}
      </ul>
      <button onClick={deleteRandom}>Delete user</button>
    </div>
  );
};

export default Lista;
