import { useState } from "react";

const Conditional = () => {
  const [gif, setGif] = useState(false);
  const [button, setButton] = useState(false);

  return (
    <div>
      <button onClick={() => setGif(true)}>Selecione para ver um gif</button>
      <br />
      <div>
        {gif && (
          <img
            src="/giphy.gif"
            alt="rick"
            width="150px"
            style={{ marginTop: "10px" }}
          />
        )}
      </div>

      <div>
        <button onClick={() => setButton(true)}>Morty</button>
        <button
          onClick={() => setButton(false)}
          style={{ marginLeft: "10px", marginTop: "10px" }}
        >
          Sr. Calça Cagada
        </button>
      </div>
      <div>
        {button ? (
          <img src="/morty.gif" width="150px" style={{ marginTop: "10px" }} />
        ) : (
          <img
            src="/calcacagada.gif"
            width="150px"
            style={{ marginTop: "10px" }}
          />
        )}
      </div>
    </div>
  );
};

export default Conditional;
