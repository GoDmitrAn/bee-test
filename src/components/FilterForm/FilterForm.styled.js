import styled from "@emotion/styled";
import { BsCheck } from "react-icons/bs";
import ReactSlider from "react-slider";

export const FormMain = styled.ul``;
export const FormMainItem = styled.li`
  display: flex;
`;
export const TypesBee = styled.ul`
  width: 250px;
  li {
  }
`;
export const CheckInput = styled.input`
  appearance: none;
  background-color: transparent;
  border: 2px solid #e1c34b;

  width: 22px;
  height: 22px;
  display: inline-block;
  vertical-align: middle;
  margin-right: 8px;
  position: relative;

  &:checked {
    border: none;
  }
  &:checked::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 18px;
    height: 18px;
    background-color: #fff;
  }
  &:checked + svg {
    display: block;
    color: #333333;
  }
  &:checked ~ span {
    color: #665822;
  }
  &.producer {
    border-radius: 50%;
    &:checked::before {
      border-radius: 50%;
    }
    &:checked + svg {
      display: block;
      top: 12px;
    }
  }
`;
export const CheckIcon = styled(BsCheck)`
  font-size: 30px;
  position: absolute;
  top: 50%;
  left: 5px;
  transform: translateY(-50%) scale(2);
  width: 16px;
  height: 16px;
  display: none;
`;
export const Label = styled.label`
  cursor: pointer;
  position: relative;
  display: flex;
  align-items: center;
  span {
    font-size: 16px;
    line-height: 1.9;
    color: #e1c34b;
  }
`;
export const PriceBox = styled.div`
  min-width: 200px;
  margin-right: 85px;
`;
export const StyledSlider = styled(ReactSlider)`
  width: 100%;
  height: 2px;
  border-radius: 5px;
  background-color: #efefef;
  margin: 20px 0;

  .thumb {
    width: 40px;
    height: 40px;
    border: 2px solid #675822;
    border-radius: 50%;
    background-color: #ffdc55;
    cursor: pointer;
    outline: none;
    transform: translateX(0%) translateY(-50%);
    font-size: 0px;
    &::after {
      content: "";
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      display: block;
      height: 1px;
      width: 16px;
      background-color: #675822;
      box-shadow: 0 5px #675822, 0 -5px #675822;
    }

    &.thumb-1 {
      transform: translateX(0%) translateY(-50%);
    }
  }

  .track {
    height: 2px;
    background-color: #e1c34b;
    &.track-1 {
      background-color: #675822;
    }
  }
`;
export const PriceValue = styled.ul`
  display: flex;
  width: 470px;
  justify-content: space-between;
`;
export const PriceValueItem = styled.li`
  display: flex;
  align-items: center;
  font-family: "Roboto";
  font-size: 16px;
  line-height: 1.9;
  color: #665822;
  p {
    margin-left: 24px;
    display: flex;
    justify-content: space-between;
    width: 150px;
    background-color: #fff;
    padding: 0 15px;
    color: #333333;
    line-height: 2.4;
  }
  span {
  }
`;
export const Producer = styled.ul``;
export const ProducerItem = styled.li``;
