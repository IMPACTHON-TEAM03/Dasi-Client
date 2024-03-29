import styled from "styled-components";

export const HeaderContainer = styled.div`
  background-color: transparent;
  box-sizing: border-box;
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 0 75px;
  height: 94px;
  position: absolute;
`;

export const Return = styled.img`
  width: 120px;
  height: 120px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  position: absolute;
  left: 80px;
`;

export const LogoText = styled.div`
  color: var(--primary, #04c974);
  font-family: Pretendard;
  font-size: 30px;
  font-style: normal;
  font-weight: 700;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  position: absolute;
  left: 150px;
  top: 33px;
  text-decoration: none;
`;

export const NavItemUl = styled.ul`
  display: flex;
`;

export const NavItemLi = styled.li`
  color: #04c974;
  font-size: 25px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;

  &:not(:last-child) {
    margin-right: 72px;
  }
`;
