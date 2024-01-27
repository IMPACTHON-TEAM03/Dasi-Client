import React, { useState } from "react";
import * as s from "../../styles/RegionPageStyle";

const questions = [
  {
    id: 1,
    text: "토지 가격이 낮은 지역을 원하시나요?",
  },
  {
    id: 2,
    text: "전통시장 접근성이 좋은 지역을 원하시나요?",
  },
  {
    id: 3,
    text: "타지 접근성이 좋은 지역을 원하시나요?",
  },
  {
    id: 4,
    text: "초, 중, 고등학교에 재학중 또는 별거하지 않는 교육받는 자녀가 있으신가요?",
  },
  {
    id: 5,
    text: "의원, 약국 등의 의료시설이 인근에 필요하신가요?",
  },
];

const Region = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState(Array(questions.length).fill(null));

  const recommendationMap = {
    "00000": "지역 A",
    "00001": "지역 B",
    "00010": "지역 C",
    "00011": "지역 D",
    "00100": "지역 E",
    "00101": "지역 F",
    "00110": "지역 G",
    "00111": "지역 H",
    "01000": "지역 I",
    "01001": "지역 J",
    "01010": "지역 K",
    "01011": "지역 L",
    "01100": "지역 M",
    "01101": "지역 N",
    "01110": "지역 O",
    "01111": "지역 P",
    10000: "지역 Q",
    10001: "지역 R",
    10010: "지역 S",
    10011: "지역 T",
    10100: "지역 U",
    10101: "지역 V",
    10110: "지역 W",
    10111: "지역 X",
    11000: "지역 Y",
    11001: "지역 Z",
    11010: "지역 AA",
    11011: "지역 AB",
    11100: "지역 AC",
    11101: "지역 AD",
    11110: "지역 AE",
    11111: "지역 AF",
  };

  const handleAnswer = (index, answer) => {
    const newAnswers = [...answers];
    newAnswers[index] = answer;
    setAnswers(newAnswers);
    setCurrentQuestion(currentQuestion + 1);
  };

  const calculateRecommendation = () => {
    const key = answers.map((answer) => (answer ? "1" : "0")).join("");
    return recommendationMap[key] || "일반 추천 지역";
  };

  const renderQuestion = () => {
    if (currentQuestion >= questions.length) return null;

    const question = questions[currentQuestion];
    return (
      <s.QuestionSection key={question.id}>
        <s.TitleText>{`Q${question.id}.`}</s.TitleText>
        <s.QuestionText>{question.text}</s.QuestionText>
        <s.AnswerSection>
          <s.AnswerButton onClick={() => handleAnswer(currentQuestion, true)}>
            예
          </s.AnswerButton>
          <s.AnswerButton onClick={() => handleAnswer(currentQuestion, false)}>
            아니오
          </s.AnswerButton>
        </s.AnswerSection>
      </s.QuestionSection>
    );
  };

  return (
    <>
      <s.MainContainer>{renderQuestion()}</s.MainContainer>
      {currentQuestion >= questions.length && (
        <s.RecommendationSection>
          <s.RecommendationText>
            추천 지역: {calculateRecommendation()}
          </s.RecommendationText>
        </s.RecommendationSection>
      )}
    </>
  );
};

export default Region;
