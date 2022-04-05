import * as React from "react";
import styled from "styled-components";

import Flex from "../Flex";
import {
  LinkenInIcon,
  TwitterIcon,
  FacebookIcon,
  PinterestIcon,
} from "../Icons";
import Link from "../Link";
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
          <Flex justify="space-between" align="center">
            <Link path="https://www.linkedin.com">
              <LinkenInIcon />
            </Link>
            <Link path="https://twitter.com/">
              <TwitterIcon />
            </Link>
            <Link path="https://www.facebook.com/">
              <FacebookIcon />
            </Link>
            <Link path="https://www.pinterest.jp/">
              <PinterestIcon />
            </Link>
          </Flex>
        </SocialWrapper>
      </Container>
      <Layer zIndex={0} top="0" right="14%">
        <Shape sm={{ width: "58px" }} />
      </Layer>
      <Layer zIndex={0} top="0" left="9%" sm={{ top: "15%" }}>
        <Shape variant="one" sm={{ width: "100px" }} />
      </Layer>
      <Layer zIndex={0} top="33%" right="6%">
        <Shape variant="three" sm={{ width: "44px" }} />
      </Layer>
    </StyledFooter>
  );
};

export default Footer;
