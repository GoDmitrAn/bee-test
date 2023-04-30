import styled from "@emotion/styled";
export const StarBoxContainer = styled.ul`
  display: flex;
  width: 470px;
  margin-right: 85px;
`;
export const StarBox = styled.li`
  font-size: 28px;
  color: #ddd;
  cursor: pointer;
  svg {
    color: #e1c34b;
  }
  &.filled svg {
    font-size: 28px;
    color: #665822;
  }
  &:hover svg {
    color: #665822;
  }
`;
