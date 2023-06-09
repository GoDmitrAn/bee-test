import styled from "@emotion/styled";
import { BsCheck } from "react-icons/bs";
import ReactSlider from "react-slider";
import { SiSony } from "react-icons/si";

export const FormMain = styled.ul`
  padding-bottom: 12px;
  border-bottom: 1px solid #e1c34b;
  margin-bottom: 55px;
  @media (max-width: 1080px) {
    padding-bottom: 40px;
  }
`;
export const FormMainItem = styled.li`
  display: flex;
  border-top: 1px solid #e1c34b;
  &:first-of-type {
    padding: 45px 0;
  }
  &:nth-of-type(2) {
    padding: 30px 0;
  }
  &:last-child {
    padding-top: 35px;
  }
  @media (max-width: 1080px) {
    display: block;
    &:first-of-type {
      padding: 27px 0 37px;
    }
    &:nth-of-type(2) {
      padding-top: 20px;
    }
    &:last-child {
      padding-top: 30px;
    }
  }
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
      top: 45%;
    }
    span {
      line-height: 0;
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
    transition: color 250ms ease-in-out;
  }
  &:hover span {
    color: #665822;
  }
`;
export const PriceBox = styled.div`
  min-width: 200px;
  margin-right: 85px;
  @media (max-width: 1080px) {
    width: 100%;
    margin-right: 0;
    padding-bottom: 50px;
    border-bottom: 1px solid #e1c34b;
  }
`;
export const TypesBeeWrapper = styled.div`
  @media (max-width: 1080px) {
    padding-top: 28px;
  }
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
  @media (max-width: 1080px) {
    width: 100%;
    margin-bottom: 36px;
  }
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
export const StarWrapper = styled.div`
  @media (max-width: 1080px) {
    padding-bottom: 24px;
    border-bottom: 1px solid #e1c34b;
    h2 {
      margin-bottom: 15px;
    }
  }
`;
export const Producer = styled.ul`
  @media (max-width: 1080px) {
    padding-top: 24px;
  }
`;
export const ProducerItem = styled.li``;
export const SonyIcon = styled(SiSony)`
  display: block;
  width: 8rem;
  height: 3rem;
`;
export const TitleBox = styled.h2`
  font-size: 24px;
  line-height: 1.4;
  font-weight: 400;
  margin-top: 0;
  margin-bottom: 24px;
`;
export const BeesHairlessWrap = styled.div`
  margin-right: 85px;
  @media (max-width: 1080px) {
    margin-right: 0;
    padding-bottom: 40px;
    border-bottom: 1px solid #e1c34b;
  }
`;
export const SelectWrapper = styled.div`
  position: relative;
`;
export const ToggleButtonSelectBee = styled.button`
  position: absolute;
  padding: 0;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  display: flex;
  background-color: transparent;
  outline: none;
  border: none;
  cursor: pointer;
  align-items: center;
`;
export const DeleteFromSelected = styled.button`
  display: flex;
  padding: 0;
  width: 12px;
  height: 12px;
  border: none;
  outline: none;
  font-size: 1.5rem;
  z-index: 100;
  cursor: pointer;
  margin-right: 10px;
  background-color: transparent;
`;
export const SelectedList = styled.ul`
  box-sizing: border-box;
  width: 470px;
  height: 30px;
  background: #fff;
  display: flex;
  padding: 0 16px;
  li {
    span {
      font-size: 14px;
      line-height: 1.7;
    }
  }
  @media (max-width: 1080px) {
    width: 100%;
  }
`;
export const Select = styled.select`
  display: block;
  width: 100%;
  height: 120px;
  position: absolute;
  overflow: hidden;
  padding: 16px;
  font-family: "Roboto";
  font-size: 14px;
  background-color: #fff;
  z-index: 10;
`;
export const ClothWrapper = styled.div`
  @media (max-width: 1080px) {
    padding-top: 28px;
  }
`;
export const ClothesType = styled.div`
  display: flex;
  .cloth {
    appearance: none;

    &:hover + .cloth-icon,
    &:checked + .cloth-icon {
      color: #333333;
      background-color: #feeda9;
    }
  }
  .cloth-icon {
    font-size: 80px;
    transition: background-color 250ms ease-in-out, color 250ms ease-in-out;
  }
`;
export const BottomBox = styled.div`
  display: flex;
  width: 100%;
  padding-bottom: 100px;
`;
export const SubmitResetBtn = styled.button`
  cursor: pointer;
  font-family: "Roboto";
  display: flex;
  width: 180px;
  height: 50px;
  border: 2px solid #665822;
  color: #665822;
  line-height: 1.4;
  font-size: 24px;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  transition: background-color 250ms ease-in-out, color 250ms ease-in-out;
  &:hover {
    background-color: #665822;
    color: #ffdc55;
  }
  &:disabled {
    opacity: 0.3;
  }
  &:disabled:hover {
    background-color: transparent;
    color: #665822;
    cursor: not-allowed;
  }
`;
