import { useState } from "react";
import { createPortal } from "react-dom";
import { Modal } from "components/Modal/Modal";
import {
  DropDownMenu,
  DropDownMenuItem,
  NavigationLink,
  Logo,
  MenuItemTitle,
  SubMenuBox,
  SubMenuBtn,
  SubMenuLink,
  RegistrBtn,
  MainMenu,
} from "./Navigation.styled";
import LogoImg from "../../assets/image/Logo.png";
import { IoMdArrowDropup } from "react-icons/io";

export const Navigation = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  return (
    <>
      <NavigationLink to="/" className="logo">
        <Logo src={LogoImg} alt="logo" />
      </NavigationLink>
      <nav>
        <MainMenu className="middle">
          <SubMenuBox>
            <SubMenuBtn type="button" onClick={toggleDropdown}>
              Пчелы
              <IoMdArrowDropup size="1.2em" />
            </SubMenuBtn>
            {isDropdownOpen && (
              <DropDownMenu>
                <DropDownMenuItem>
                  <MenuItemTitle>Индийская пчела</MenuItemTitle>
                  <ul>
                    <li>
                      <SubMenuLink>Красная</SubMenuLink>
                    </li>
                    <li>
                      <SubMenuLink>Розовая</SubMenuLink>
                    </li>
                    <li>
                      <SubMenuLink>Черная</SubMenuLink>
                    </li>
                  </ul>
                </DropDownMenuItem>
                <DropDownMenuItem>
                  <MenuItemTitle>Арликовая пчела</MenuItemTitle>
                  <ul>
                    <li>
                      <SubMenuLink>Красная</SubMenuLink>
                    </li>
                    <li>
                      <SubMenuLink>Розовая</SubMenuLink>
                    </li>
                    <li>
                      <SubMenuLink>Черная</SubMenuLink>
                    </li>
                  </ul>
                </DropDownMenuItem>
              </DropDownMenu>
            )}
          </SubMenuBox>
          <NavigationLink to="housebee">Дом пчелы</NavigationLink>
          <NavigationLink to="honeycomb">Соты</NavigationLink>
          <NavigationLink to="honey">Мёд</NavigationLink>
          <NavigationLink to="table">Таблица данных</NavigationLink>
        </MainMenu>
        <RegistrBtn type="button" onClick={() => setIsModalOpen(true)}>
          Регистрация
        </RegistrBtn>
      </nav>
      {isModalOpen &&
        createPortal(
          <Modal onClose={() => setIsModalOpen(false)} />,
          document.body
        )}
    </>
  );
};
