import React, { useState } from "react";
import * as s from "../../styles/RegionPageStyle";
import Header from "../../components/header";

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
          <s.AnswerButton onClick={() => handleAnswer(currentQuestion, true)}>예</s.AnswerButton>
          <s.AnswerButton onClick={() => handleAnswer(currentQuestion, false)}>아니오</s.AnswerButton>
        </s.AnswerSection>
      </s.QuestionSection>
    );
  };

  const redirectto = () => {
    window.location.href = "https://raon880.tistory.com/entry/%EA%B7%80%EB%86%8D%EA%B7%80%EC%B4%8C-%EC%B6%94%EC%B2%9C-%EB%A7%88%EC%9D%84-6%ED%8E%B8-%EA%B2%BD%EC%83%81%EB%B6%81%EB%8F%84-%EC%83%81%EC%A3%BC%EC%8B%9C?category=1018522";
  };

  return (
    <>
      <Header />
      <s.RecommendationSection>
        {renderQuestion()}
        {currentQuestion >= questions.length && (
          <>
            <s.RecommendationTitleText>그렇다면..</s.RecommendationTitleText>
            <s.RecommendationText>경상북도 상주시 모동면 정양리</s.RecommendationText>
            <s.RecommendationSubText>로 귀농하시는 것 어떠세요?</s.RecommendationSubText>
            <s.RecommendationDetailsText>경상북도 상주시는 친환경 농업을 하는 귀농인이 많은 지역입니다. 또한 경부고속도로와 인접하여 다른 지역과의 접근성이 좋아요!</s.RecommendationDetailsText>
            <s.RecommendationButton onClick={redirectto}>자세히 알아보기 {">"}</s.RecommendationButton>
          </>
        )}
      </s.RecommendationSection>
    </>
  );
};

export default Region;
