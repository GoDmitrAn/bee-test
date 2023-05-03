import styled from "@emotion/styled";
import { NavLink, Link } from "react-router-dom";

export const MainMenu = styled.div``;
export const NavigationLink = styled(NavLink)`
  font-size: 18px;
  line-height: 1.9;
  padding: 5px 10px;

  text-decoration: none;
  color: black;
  font-weight: 500;
  display: flex;
  color: #665822;
  &.active {
  }
  &.logo {
    padding: 0;
    &.active {
      background-color: transparent;
    }
  }
  @media (max-width: 1080px) {
    font-size: 44px;
  }
`;
export const Logo = styled.img``;
export const SubMenuBox = styled.div`
  position: relative;
  @media (max-width: 1080px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;
export const SubMenuBtn = styled.button`
  display: flex;
  align-items: center;
  border: none;
  outline: none;
  font-family: "Roboto";
  font-weight: 400;
  font-size: 18px;
  line-height: 1.9;
  padding: 5px 10px;
  color: #665822;
  background-color: transparent;
  cursor: pointer;
  &:active,
  &:hover,
  &:focus {
    background-color: #fff;
  }
  .mobile {
    display: none;
  }
  .desctop {
    display: block;
  }
  @media (max-width: 1080px) {
    justify-content: center;
    width: auto;
    /* width: 120px; */
    font-size: 44px;

    &:active,
    &:hover,
    &:focus {
      background-color: transparent;
    }
    .desctop {
      display: none;
    }
    .mobile {
      display: block;
    }
  }
`;
export const DropDownMenu = styled.div`
  display: flex;
  position: absolute;
  left: -30px;
  top: 45px;
  background-color: #fff;
  height: 150px;
  width: 600px;
  padding: 18px;

  opacity: 0;
  transform: translateY(-10px);
  transition: opacity 0.3s ease-in-out, transform 0.3s ease-in-out;

  &.open {
    opacity: 1;
    transform: translateY(0px);
  }
  @media (max-width: 1080px) {
    position: static;
    width: auto;
    height: auto;
    flex-direction: column;
    background-color: transparent;
    text-align: center;
  }
`;
export const DropDownMenuItem = styled.div`
  &:not(:last-child) {
    margin-right: 38px;
  }
  ul {
    list-style: none;
    padding: 0;

    li {
      margin-top: 10px;
    }
  }
  @media (max-width: 1080px) {
    &:not(:last-child) {
      margin-right: 0;
    }
  }
`;
export const MenuItemTitle = styled.p`
  font-size: 16px;
  line-height: 1.9;
  color: #665822;
  margin-top: 0;
  margin-bottom: 19px;
  @media (max-width: 1080px) {
    font-size: 24px;
  }
`;
export const SubMenuLink = styled(Link)`
  text-decoration: none;
  color: #665822;
  &:focus,
  &:hover {
    color: rgba(102, 88, 34, 0.5);
  }
  @media (max-width: 1080px) {
    font-size: 20px;
  }
`;
export const RegistrBtn = styled.button`
  border: none;
  outline: none;
  font-family: "Roboto";
  font-weight: 400;
  font-size: 18px;
  line-height: 1.9;
  padding: 5px 10px;
  color: #665822;
  background-color: transparent;
  cursor: pointer;
  @media (max-width: 1080px) {
    font-size: 44px;
  }
`;
