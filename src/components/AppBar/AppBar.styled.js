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
    }
  }
`;
