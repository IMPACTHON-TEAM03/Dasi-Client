import React from "react";
import * as S from "../../styles/Service";
import people from "../../images/people.svg";
import call from "../../images/call.svg";
import home from "../../images/home.svg";
import roller from "../../images/roller.svg";
import chat from "../../images/chat.svg";

const index = () => {
  return (
    <>
      <S.Box1>
        <S.Box />
      </S.Box1>
      <S.Box2>
        <S.Box />
      </S.Box2>
      <S.Box3>
        <S.Box />
      </S.Box3>
      <S.Box4>
        <S.Box />
      </S.Box4>
      <S.Box5 />

      <S.People src={people}></S.People>
      <S.Call src={call}></S.Call>
      <S.Home src={home}></S.Home>
      <S.Roller src={roller}></S.Roller>
      <S.Chat src={chat}></S.Chat>
      <S.Text>
        <S.StudyText>
          귀농 스터디 <br />
          모임 1기
        </S.StudyText>
        <S.ServiceText>
          농업 전문가 <br />
          상담 서비스
        </S.ServiceText>
        <S.HouseText>
          시골집 매매 <br />
          가이드
        </S.HouseText>
        <S.PainterText>
          시골집 리모델링 <br />
          플랜
        </S.PainterText>
        <S.GrassText>
          시골집 건축 <br />
          전문가 상담 서비스
        </S.GrassText>
      </S.Text>
      <S.Price>
        <S.StudyPrice>10,000원</S.StudyPrice>
        <S.ServicePrice>20,000원</S.ServicePrice>
        <S.HousePrice>30,000원</S.HousePrice>
        <S.PainterPrice>20,000원</S.PainterPrice>
        <S.GrassPrice>30,000원</S.GrassPrice>
      </S.Price>
    </>
  );
};

export default index;
