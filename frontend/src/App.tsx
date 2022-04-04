import React from "react";
import styled from "styled-components";
import axios from "./axios";
import Button from "./components/Button";
import Flex from "./components/Flex";
import Form from "./components/Form";

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
      <Flex justify="center" direction="column">
        <Button type="button" onClick={() => clickHandler()}>
          getAll()
        </Button>
        <div>
          <ul>
            {callbacks.length > 0 &&
              callbacks.map((callback: any, index: any): any => {
                return <li key={index + callback.name}>{callback.name}</li>;
              })}
          </ul>
        </div>
        <Form />
      </Flex>
    </AppWrapper>
  );
}

export default App;

const AppWrapper = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 1rem;
`;
