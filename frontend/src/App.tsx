import React from "react";
import styled from "styled-components";
import axios from "./axios";

function App() {
  const [callbacks, setCallbacks] = React.useState([]);
  const clickHandler = async () => {
    try {
      const response = await axios.get("/api/callback");
      const data = await response.data;
      setCallbacks(data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <AppWrapper>
      <h1>Hello world!!</h1>
      <button onClick={() => clickHandler()}>get all</button>
      <div>
        <ul>
          {callbacks.length > 0 &&
            callbacks.map((callback: any, index: any): any => {
              return <li key={index + callback.name}>{callback.name}</li>;
            })}
        </ul>
      </div>
    </AppWrapper>
  );
}

export default App;

const AppWrapper = styled.div`
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 1rem;
`;
