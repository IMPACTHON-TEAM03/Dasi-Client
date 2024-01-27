import styled from "styled-components";

export const HeaderContainer = styled.div`
  background-color: transparent;
  box-sizing: border-box;
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 0 61px;
  height: 94px;
  position: absolute;
`;

export const NavItemUl = styled.div`
  display: flex;
`;

export const NavItemLi = styled.a`
  color: #fff;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;

  &:not(:last-child) {
    margin-right: 72px;
  }
`;
