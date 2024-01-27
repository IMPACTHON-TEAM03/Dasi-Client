import styled from "styled-components";
import theme from "../../styles/theme/theme";

export const HeaderContainer = styled.div`
  background-color: ${theme.gray[200]};
  box-sizing: border-box;
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 0 61px;
  height: 94px;
`;

export const NavItemUl = styled.div`
  display: flex;
`;

export const NavItemLi = styled.a`
  color: ${theme.gray[800]};
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  &:not(:last-child) {
    margin-right: 72px;
  }
`;
