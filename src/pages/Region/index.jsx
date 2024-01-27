import React, { useState, useEffect } from "react";
import * as s from "../../styles/RegionPageStyle";

const Region = () => {
  const [questionNumber, setQuestionNumber] = useState(1);

  const [answers, setAnswers] = useState({
    q1answer: "",
    q2answer: "",
    q3answer: "",
    q4answer: "",
    q5answer: "",
  });

  const handleAnswer = (answer) => {
    setAnswers({ ...answers, [`q${questionNumber}answer`]: answer });
    setQuestionNumber(questionNumber + 1);
  };

  useEffect(() => {
    console.log(answers);
  }, [answers]);

  const renderQuestion = () => {
    switch (questionNumber) {
      case 1:
        return (
          <s.QuestionSection>
            <s.TitleText>Q.</s.TitleText>
            <s.QuestionText>자녀가 있으신가요?</s.QuestionText>
            <s.AnswerSection>
              <s.AnswerButton onClick={() => handleAnswer(true)}>예</s.AnswerButton>
              <s.AnswerButton onClick={() => handleAnswer(false)}>아니오</s.AnswerButton>
            </s.AnswerSection>
          </s.QuestionSection>
        );
      case 2:
        return (
          <s.QuestionSection>
            <s.TitleText>Q.</s.TitleText>
            <s.QuestionText>자녀가 거주중인 지역과 가까웠으면 좋겠나요?</s.QuestionText>
            <s.AnswerSection>
              <s.AnswerButton onClick={() => handleAnswer(true)}>예</s.AnswerButton>
              <s.AnswerButton onClick={() => handleAnswer(false)}>아니오</s.AnswerButton>
            </s.AnswerSection>
          </s.QuestionSection>
        );

      case 3:
        return (
          <s.QuestionSection>
            <s.TitleText>Q.</s.TitleText>
            <s.QuestionText>자녀는 어디에 사나요?</s.QuestionText>
            <s.AnswerSection>
              <s.AnswerButton onClick={() => handleAnswer("서울/경기")}>서울/경기</s.AnswerButton>
              <s.AnswerButton onClick={() => handleAnswer("지방")}>지방</s.AnswerButton>
              <s.AnswerButton onClick={() => handleAnswer("도서산간")}>도서산간</s.AnswerButton>
            </s.AnswerSection>
          </s.QuestionSection>
        );
      default:
        return null;
    }
  };

  return (
    <>
      <s.HeaderContainer>
        <s.NavItemUl>
          <s.NavItemLi>지역</s.NavItemLi>
          <s.NavItemLi>부동산</s.NavItemLi>
          <s.NavItemLi>귀농 모임</s.NavItemLi>
          <s.NavItemLi>전문가 연계</s.NavItemLi>
        </s.NavItemUl>
      </s.HeaderContainer>
      <s.MainContainer>{renderQuestion()}</s.MainContainer>
    </>
  );
};

export default Region;
