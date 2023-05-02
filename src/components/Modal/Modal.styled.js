import styled from "@emotion/styled";
export const BackDrop = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  z-index: 200;
  top: 0;
  background-color: rgba(102, 88, 34, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const ModalBox = styled.div`
  position: relative;
  box-sizing: border-box;
  width: 350px;
  min-height: 558px;
  background-color: #fff;
  border-radius: 16px;
  padding-top: 45px;
  padding-bottom: 20px;
`;
export const TitleModal = styled.p`
  font-size: 24px;
  line-height: 1.4;
  color: #665822;
  text-align: center;
  margin-top: 0;
  margin-bottom: 30px;
`;
export const CloseBtn = styled.button`
  display: block;
  position: absolute;
  top: 16px;
  right: 12px;
  border: none;
  outline: none;
  background: transparent;
  font-size: 16px;
  cursor: pointer;
  &:hover {
    color: red;
  }
`;
export const Submit = styled.button`
  cursor: pointer;
  display: block;
  width: 290px;
  box-sizing: border-box;
  border: 2px solid #665822;

  margin: 30px auto 0;

  font-family: "Roboto";
  color: #665822;
  background-color: transparent;
  font-size: 18px;
  line-height: 1.8;
  padding: 5px;
  transition: color 250ms ease-in-out, background-color 250ms ease-in-out;
  &:hover,
  &:focus {
    background-color: #665822;
    color: #ffdc55;
  }
`;
