import styled from "styled-components";

export const Box = styled.div`
  width: 230px;
  height: 440px;
  border-radius: 20px;
  border: 3px solid var(--gray700, #545454);
  position: absolute;
  top: 170px;

  &:hover::before {
    content: "";
    background: #6e6e6e;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 16px;
    cursor: pointer;
  }
`;

export const Box1 = styled.div`
  position: absolute;
  left: 140px;
`;
export const Box2 = styled.div`
  position: absolute;
  left: 390px;
`;
export const Box3 = styled.div`
  position: absolute;
  left: 640px;
`;
export const Box4 = styled.div`
  position: absolute;
  left: 890px;
`;
export const Box5 = styled.div`
  position: absolute;
  top: 170px;
  left: 1140px;
  width: 240px;
  height: 440px;
  border-radius: 20px;
  border: 3px solid var(--gray700, #545454);

  &:hover::before {
    content: "";
    background: #6e6e6e;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 16px;
    cursor: pointer;
  }
`;

export const People = styled.img`
  position: absolute;
  top: 230px;
  left: 210px;
  width: 100px;
  height: 100px;
`;

export const Call = styled.img`
  position: absolute;
  top: 230px;
  left: 470px;
  width: 100px;
  height: 100px;
`;

export const Home = styled.img`
  position: absolute;
  top: 230px;
  left: 710px;
  width: 100px;
  height: 100px;
`;

export const Roller = styled.img`
  position: absolute;
  top: 230px;
  left: 950px;
  width: 100px;
  height: 100px;
`;

export const Chat = styled.img`
  position: absolute;
  top: 230px;
  left: 1205px;
  width: 100px;
  height: 100px;
`;

export const StudyText = styled.div`
  position: absolute;
  top: 400px;
  left: 190px;
`;

export const ServiceText = styled.div`
  position: absolute;
  top: 400px;
  left: 435px;
`;

export const HouseText = styled.div`
  position: absolute;
  top: 400px;
  left: 690px;
`;

export const PainterText = styled.div`
  position: absolute;
  top: 400px;
  left: 905px;
  font-size: 28px;
`;

export const GrassText = styled.div`
  position: absolute;
  top: 400px;
  left: 1155px;
  font-size: 26px;
`;

export const Text = styled.div`
  color: var(--Black, #000);
  font-family: Inter;
  font-size: 28px;
  font-style: normal;
  font-weight: 700;
  line-height: 46px;
  letter-spacing: -0.6px;
`;

export const Price = styled.div`
  color: var(--Black, #000);
  font-family: Inter;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 46px;
  letter-spacing: -0.6px;
`;

export const StudyPrice = styled.div`
  position: absolute;
  top: 490px;
  left: 220px;
`;
export const ServicePrice = styled.div`
  position: absolute;
  top: 490px;
  left: 470px;
`;
export const HousePrice = styled.div`
  position: absolute;
  top: 490px;
  left: 720px;
`;
export const PainterPrice = styled.div`
  position: absolute;
  top: 490px;
  left: 970px;
`;
export const GrassPrice = styled.div`
  position: absolute;
  top: 490px;
  left: 1220px;
`;
