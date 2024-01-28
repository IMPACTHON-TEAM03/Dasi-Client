import styled from "styled-components";
import GearsPNG from "../images/gears.png";

export const MapContainer = styled.div`
  width: 100%;
  height: calc(100vh - 94px);
  background-color: #fff;
  padding: 0 61px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  z-index: 0;
`;

export const FilterButton = styled.button`
  width: 577px;
  height: 81px;
  background-color: white;
  border-radius: 60px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 0 30px;
  position: absolute;
  cursor: pointer;
  margin-top: 51px;
  z-index: 2;
  left: 50%;
  transform: translateX(-50%);

  &:hover {
    opacity: 0.85;
    cursor: pointer;
  }
`;

export const GearIcon = styled.img.attrs({
  src: GearsPNG,
})`
  width: 30px;
  height: 30px;
`;

export const FilterText = styled.p`
  font-size: 27px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -0.6px;
`;
