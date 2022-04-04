import * as React from "react";
import styled from "styled-components";
import Flex from "./Flex";
import Portal from "./Portal";

interface IAlertProps {
  onClose: () => void;
  isOpened: boolean;
}

const Popup = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.8);

  z-index: 1;
`;
const PopupContent = styled.div`
  max-width: 250px;
  background-color: #fff;
  border-radius: 20px;
  padding: 15px;
  font-weight: 400;
  font-size: 18px;
  line-height: 32px;

  color: #2d2d2d;
`;
const Alert: React.FC<IAlertProps> = ({ isOpened, onClose, children }) => {
  if (!isOpened) {
    return null;
  }
  return (
    <Portal>
      <Popup role="dialog" onClick={onClose}>
        <Flex justify="center" align="center" height="100vh">
          <PopupContent>{children}</PopupContent>
        </Flex>
      </Popup>
    </Portal>
  );
};

export default Alert;
