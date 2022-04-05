import * as React from "react";
import styled from "styled-components";

import map from "../assets/map.png";
import Box from "../components/Box";
import Form from "../components/Form";
import Container from "../components/UI/Container";
import Footer from "../components/UI/Footer";
import Layer from "../components/UI/Layer";
import Shape from "../components/UI/Shape";

const BackgroundLayer = styled.section`
  position: relative;
  overflow: hidden;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`;

const StyledImage = styled.img`
  width: 100%;
  height: auto;
`;
const Content = styled.div`
  position: relative;
  z-index: 999;
`;
const Home: React.FC = () => {
  return (
    <React.Fragment>
      <BackgroundLayer>
        <Container>
          <Content>
            <Box
              margin="179px 0 177px 147px"
              sm={{ margin: "179px 0 177px 0" }}
            >
              <Form />
            </Box>
          </Content>
        </Container>
        {/* shapes: sun, clouds, goodies */}
        <Layer
          zIndex={2}
          circle
          top="-6%"
          right="-16%"
          width="976px"
          height="976px"
          sm={{
            top: "-3%",
            right: "-15%",
            width: "350px",
            height: "350px",
            invicible: true,
          }}
          md={{
            top: "-3%",
            right: "-15%",
            width: "500px",
            height: "500px",
          }}
        >
          <StyledImage src={map} alt="map" />
        </Layer>
        <Layer zIndex={1} top="10%" right="33%">
          <Shape variant="cloud" />
        </Layer>
        <Layer zIndex={1} top="44%" left="0%">
          <Shape variant="cloud" opacity={0.5} />
        </Layer>
        <Layer zIndex={1} bottom="14%" left="27%">
          <Shape variant="cloud" opacity={0.5} />
        </Layer>
        <Layer zIndex={1} bottom="14%" left="12%">
          <Shape variant="cloud" width="132px" height="99px" opacity={0.4} />
        </Layer>
        <Layer zIndex={1} bottom="-6%" left="14%">
          <Shape variant="cloud" width="288px" height="216px" opacity={0.3} />
        </Layer>
        <Layer zIndex={1} bottom="5%" left="51%">
          <Shape variant="cloud" width="168px" height="128px" opacity={0.4} />
        </Layer>
        <Layer zIndex={1} top="20%" left="2%">
          <Shape variant="cloud" width="245px" height="184px" opacity={0.3} />
        </Layer>
        <Layer zIndex={1} top="15%" right="48%">
          <Shape variant="cloud" width="138px" height="103px" opacity={0.4} />
        </Layer>
        <Layer zIndex={1} top="28%" right="41%">
          <Shape variant="cloud" width="172px" height="129px" opacity={0.5} />
        </Layer>
        <Layer zIndex={2} top="2%" right="46%">
          <Shape variant="sun" width="87px" height="87px" />
        </Layer>
        <Layer zIndex={4} top="4%" left="8%">
          <Shape variant="three" />
        </Layer>
        <Layer zIndex={4} top="56%" right="39%" md={{ right: "15%" }}>
          <Shape
            variant="two"
            md={{
              width: "65px",
            }}
            sm={{
              opacity: 0,
            }}
          />
        </Layer>
        <Layer
          zIndex={3}
          top="65%"
          right="32%"
          md={{ right: "10%" }}
          sm={{ right: "2%", top: "75%" }}
        >
          <Shape
            variant="one"
            md={{
              width: "118px",
            }}
            sm={{
              width: "56px",
            }}
          />
        </Layer>
      </BackgroundLayer>
      <Footer />
    </React.Fragment>
  );
};

export default Home;

// const [callbacks, setCallbacks] = React.useState([]);
// const clickHandler = async () => {
//   try {
//     const response = await axios.get("/api/callback");
//     const data = await response.data;
//     setCallbacks(data);
//   } catch (error) {
//     console.log(error);
//   }
// };
