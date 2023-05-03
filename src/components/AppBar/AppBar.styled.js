import styled from "@emotion/styled";

export const Header = styled.header`
  font-family: "Roboto";
  font-weight: 400;
  background-color: #e1c34b;
  width: 100%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 17px 0;
  position: relative;

  .header-content {
    max-width: 1020px;
    width: 100%;
    display: flex;
    margin: 0 auto;

    > nav {
      width: 745px;
      margin-left: auto;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .middle {
        display: flex;
        align-items: center;
      }
      @media (max-width: 1080px) {
        transform: translateX(-100%);
        transition: transform 500ms ease-in-out;
        top: 0;
        left: 0;
        width: 100%;
        z-index: 100;
        position: absolute;
        flex-direction: column;
        justify-content: flex-start;
        padding-top: 100px;
        background-color: #e1c34b;
        padding-bottom: 480px;
        .middle {
          flex-direction: column;
        }
        &.show-menu {
          transform: translateX(0);
        }
      }
    }
    @media (max-width: 1080px) {
      justify-content: center;
      background-color: transparent;
    }
  }
  @media (max-width: 1080px) {
    background-color: transparent;
    padding: 10px 0;
  }
`;
export const MobileMenuBtn = styled.button`
  display: none;
  width: 60px;
  height: 60px;
  cursor: pointer;
  border: none;
  outline: none;
  background-color: #e1c34b;
  font-size: 2rem;
  color: #665822;
  @media (max-width: 1080px) {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0;
    position: absolute;
    top: 0;
    left: 0;
  }
`;
