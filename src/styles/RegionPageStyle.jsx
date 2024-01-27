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
`;

export const NavItemUl = styled.ul`
  display: flex;
`;

export const NavItemLi = styled.li`
  color: #04c974;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;

  &:not(:last-child) {
    margin-right: 72px;
  }
`;

export const MainContainer = styled.div`
  width: 100%;
  height: calc(100vh - 94px);
  background-color: #fff;
  padding: 0 61px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
`;

export const QuestionSection = styled.section`
  width: 1189px;
  height: 532px;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const TitleText = styled.p`
  font-size: 45px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  color: #04c974;
`;

export const QuestionText = styled.p`
  font-size: 50px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-top: 7px;
`;

export const AnswerSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 20px;
  margin-top: 20px;
`;

export const AnswerButton = styled.button`
  width: 500px;
  height: 70px;
  background: #04c974;
  border-radius: 60px;
  color: white;
  font-size: 36px;
  font-weight: 600;

  &:hover {
    background-color: #04c974;
    opacity: 0.8;
    cursor: pointer;
  }
`;
