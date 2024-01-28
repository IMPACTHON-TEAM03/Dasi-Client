import styled from "styled-components";
import theme from "../styles/theme/theme";
import font from "../styles/theme/font";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
`;

export const Contents = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  padding: 50px 70px;
  box-sizing: border-box;
  gap: 20px;
`;

export const Thumbnail = styled.div`
  width: 100%;
  height: 400px;
  border-radius: 10px;
  background-color: ${theme.gray[500]};
  margin-bottom: 20px;
`;

export const Line = styled.div`
  width: 1px;
  height: 100%;
  background-color: #000;
`;

export const Wrapper = styled.div`
  width: 50%;
`;

export const Subtitle = styled.h2`
  ${font.$Body3};
`;

export const Description = styled.p`
  ${font.$p1};
`;

export const Title = styled.h1`
  ${font.$H1};
`;

export const Horizon = styled.div`
  width: 100%;
  height: 1px;
  background-color: ${theme.gray[400]};
`;

export const Tags = styled.div`
  display: flex;
  gap: 12px;
`;

export const Tag = styled.div`
  padding: 9px 12px;
  box-sizing: border-box;
  border: 2px solid ${theme.primary};
  border-radius: 25px;
  ${font.$p2};
  color: ${theme.primary};
  font-weight: 600;
`;

export const Price = styled.h1`
  ${font.$Body1};
  color: ${theme.gray[600]};
  margin-top: 10px;
`;

export const Detail = styled.div`
  color: ${theme.gray[600]};
  ${font.$p1};
  line-height: 36px;
`;

export const Button = styled.button`
  width: 100%;
  height: 60px;
  background-color: ${theme.primary};
  border-radius: 10px;
  ${font.$Button1};
  font-weight: 600;
  color: ${theme.white};
`;
