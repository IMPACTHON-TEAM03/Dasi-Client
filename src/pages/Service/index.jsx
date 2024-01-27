import React from "react";
import * as S from "../../styles/Service";
import group from "../../images/group.svg";
import service from "../../images/service.svg";
import house from "../../images/house.svg";
import painter from "../../images/painter.svg";
import grass from "../../images/grass.svg";

const index = () => {
  return (
    <div>
      <S.Study src={group}></S.Study>
      <S.Service src={service}></S.Service>
      <S.House src={house}></S.House>
      <S.Painter src={painter}></S.Painter>
      <S.Grass src={grass}></S.Grass>
      <S.Text>
        <S.StudyText>귀농 스터디 모임 1기</S.StudyText>
        <S.ServiceText>농업 전문가 상담 서비스</S.ServiceText>
        <S.HouseText>시골집 매매 가이드</S.HouseText>
        <S.PainterText>시골집 리모델링 플랜</S.PainterText>
        <S.GrassText>시골집 건축 전문가 상담 서비스</S.GrassText>
      </S.Text>
      <S.Price>
        <S.StudyPrice>10,000원</S.StudyPrice>
        <S.ServicePrice>20,000원</S.ServicePrice>
        <S.HousePrice>30,000원</S.HousePrice>
        <S.PainterPrice>20,000원</S.PainterPrice>
        <S.GrassPrice>30,000원</S.GrassPrice>
      </S.Price>
    </div>
  );
};

export default index;
