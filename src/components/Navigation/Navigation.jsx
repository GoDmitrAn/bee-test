import { useState } from "react";
import { createPortal } from "react-dom";
import { Modal } from "components/Modal/Modal";
import { RxHamburgerMenu } from "react-icons/rx";
import { TfiClose } from "react-icons/tfi";
import { HiMinus, HiPlus } from "react-icons/hi";
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
import { MobileMenuBtn } from "components/AppBar/AppBar.styled";

export const Navigation = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <>
      <MobileMenuBtn onClick={() => setMenuVisible(true)}>
        <RxHamburgerMenu />
      </MobileMenuBtn>
      <NavigationLink to="/" className="logo">
        <Logo src={LogoImg} alt="logo" />
      </NavigationLink>
      <nav className={menuVisible ? "show-menu" : ""}>
        <MobileMenuBtn
          className="close-btn"
          onClick={() => setMenuVisible(false)}
        >
          <TfiClose />
        </MobileMenuBtn>
        <MainMenu className="middle">
          <SubMenuBox>
            <SubMenuBtn type="button" onClick={toggleDropdown}>
              Пчелы
              {isDropdownOpen ? (
                <HiMinus className="mobile" />
              ) : (
                <HiPlus className="mobile" />
              )}
              <IoMdArrowDropup className="desctop" />
            </SubMenuBtn>
            {isDropdownOpen && (
              <DropDownMenu className={isDropdownOpen ? "open" : ""}>
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
