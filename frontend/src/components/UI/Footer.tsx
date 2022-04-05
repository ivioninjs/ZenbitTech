import * as React from "react";
import styled from "styled-components";

import Flex from "../Flex";
import {
  LinkenInIcon,
  TwitterIcon,
  FacebookIcon,
  PinterestIcon,
} from "../Icons";
import Container from "./Container";
import Layer from "./Layer";
import Shape from "./Shape";

const StyledFooter = styled.footer`
  background: #fafafa;
  border: 1px solid #d8d8d8;
  box-sizing: border-box;
  position: relative;
  overflow: hidden;
  padding-top: 80px;
  padding-bottom: 106px;
`;
const PinkGoodie = styled.div`
  position: absolute;
  bottom: -10%;
`;
const GreenGoodie = styled.div`
  position: absolute;
  top: 0;
  right: 10%;
`;

const SocialWrapper = styled.div`
  position: relative;
  z-index: 1;
  max-width: 124px;
  margin-left: 34%;
`;

const Footer: React.FC = () => {
  return (
    <StyledFooter>
      <Container>
        <SocialWrapper>
          <Flex justify="space-between">
            <LinkenInIcon />
            <TwitterIcon />
            <FacebookIcon />
            <PinterestIcon />
          </Flex>
        </SocialWrapper>
      </Container>
      <Layer zIndex={0} top="0" right="14%">
        <Shape />
      </Layer>
      <Layer zIndex={0} top="0" left="9%">
        <Shape variant="one" />
      </Layer>
      <Layer zIndex={0} top="33%" right="6%">
        <Shape variant="three" />
      </Layer>
    </StyledFooter>
  );
};

export default Footer;
