import styled from "styled-components";
import BackgroundJPEG from "../images/background.jpeg";
import ScrollDownPNG from "../images/scrolldown.png";

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

export const NavItemUl = styled.ul`
  display: flex;
`;

export const NavItemLi = styled.li`
  color: #fff;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;

  &:not(:last-child) {
    margin-right: 72px;
  }
`;

export const MainSection = styled.section`
  width: 100%;
  height: 100vh;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${BackgroundJPEG});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  padding: 0 61px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const MainSectionTitle = styled.p`
  font-size: 66px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  color: #fff;
  text-shadow: 0px 30px 30px rgba(0, 0, 0, 0.8);
`;

export const ScrollDown = styled.div`
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 96px;
  height: 96px;
  background: url(${ScrollDownPNG});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  animation: scrollDown 1s infinite;

  @keyframes scrollDown {
    0% {
      bottom: 0;
    }
    50% {
      bottom: 20px;
    }
    100% {
      bottom: 0;
    }
  }
`;
