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
`;
export const Logo = styled.img``;
export const SubMenuBox = styled.div`
  position: relative;
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
`;
export const MenuItemTitle = styled.p`
  font-size: 16px;
  line-height: 1.9;
  color: #665822;
  margin-top: 0;
  margin-bottom: 19px;
`;
export const SubMenuLink = styled(Link)`
  text-decoration: none;
  color: #665822;
  &:focus,
  &:hover {
    color: rgba(102, 88, 34, 0.5);
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
`;
