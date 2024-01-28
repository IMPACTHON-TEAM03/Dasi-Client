import styled from "styled-components";
import React, { useState } from "react";

const ModalContainer = styled.form`
  width: 800px;
  height: 500px;
  background-color: white;
  border-radius: 10px;
  position: absolute;
  z-index: 5;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const DropdownContainer = styled.div`
  display: flex;
  align-items: center;
  width: 700px;
  height: 50px;
  border: 2px solid #04c974;
  border-radius: 10px;
  padding: 0 15px;
  justify-content: center;
  position: relative;
  margin-top: 25px;

  &:first-child {
    margin-top: 0;
  }
`;

const DropdownSelect = styled.div`
  position: relative;
  cursor: pointer;
  width: 100%;
`;

const DropdownMenu = styled.div`
  width: 690px;
  max-height: 200px;
  overflow-y: auto;
  border-radius: 10px;
  border: 2px solid #04c974;
  background: #fff;
  position: absolute;
  z-index: 2;
  display: ${({ isOpen }) => (isOpen ? "block" : "none")};
  margin-top: 3px;
`;

const DropdownOption = styled.div`
  padding: 10px;
  cursor: pointer;

  &:hover {
    background-color: #f0f0f0;
  }
`;

const Label = styled.p`
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 46px;
  letter-spacing: -0.6px;
`;

const ArrowIcon = styled.div`
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%) ${({ isOpen }) => (isOpen ? "rotate(180deg)" : "rotate(0deg)")};
  transition: transform 0.3s ease;
`;

const ApplyButton = styled.button`
  margin-top: 20px;
  padding: 10px 20px;
  background-color: #04c974;
  color: white;
  font-size: 18px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #028e58;
  }
`;

const ErrorMessage = styled.p`
  margin-top: 10px;
  color: red;
`;

function FilterModal({ applyFilters }) {
  const [selectedRegion, setSelectedRegion] = useState("");
  const [selectedArea, setSelectedArea] = useState("");
  const [selectedPrice, setSelectedPrice] = useState("");
  const [selectedNumberOfRestroom, setSelectedNumberOfRestroom] = useState("");
  const [selectedNumberOfRoom, setSelectedNumberOfRoom] = useState("");

  const [isRegionMenuOpen, setRegionMenuOpen] = useState(false);
  const [isAreaMenuOpen, setAreaMenuOpen] = useState(false);
  const [isPriceMenuOpen, setPriceMenuOpen] = useState(false);
  const [isNumberOfRestroomMenuOpen, setNumberOfRestroomMenuOpen] = useState(false);
  const [isNumberOfRoomMenuOpen, setNumberOfRoomMenuOpen] = useState(false);

  const [error, setError] = useState("");

  const handleApplyFilters = () => {
    if (!selectedRegion || !selectedArea || !selectedPrice || !selectedNumberOfRestroom || !selectedNumberOfRoom) {
      setError("모든 필수 값을 선택해야 합니다.");
      return;
    }

    const filters = {
      region: selectedRegion.trim() !== "" ? selectedRegion : undefined,
      area: selectedArea.trim() !== "" ? selectedArea : undefined,
      price: selectedPrice.trim() !== "" ? selectedPrice : undefined,
      numberOfRestroom: selectedNumberOfRestroom.trim() !== "" ? selectedNumberOfRestroom : undefined,
      numberOfRoom: selectedNumberOfRoom.trim() !== "" ? selectedNumberOfRoom : undefined,
    };

    applyFilters(filters);
  };

  return (
    <ModalContainer>
      <DropdownContainer>
        <DropdownSelect onClick={() => setRegionMenuOpen(!isRegionMenuOpen)}>
          <Label>{selectedRegion || "원하시는 지역을 선택해주세요"}</Label>
          <ArrowIcon isOpen={isRegionMenuOpen}>▲</ArrowIcon>
          <DropdownMenu isOpen={isRegionMenuOpen}>
            <DropdownOption onClick={() => setSelectedRegion("경기도")}>경기도</DropdownOption>
            <DropdownOption onClick={() => setSelectedRegion("경상남도")}>경상남도</DropdownOption>
            <DropdownOption onClick={() => setSelectedRegion("경상북도")}>경상북도</DropdownOption>
            <DropdownOption onClick={() => setSelectedRegion("강원도")}>강원도</DropdownOption>
            <DropdownOption onClick={() => setSelectedRegion("전라북도")}>전라북도</DropdownOption>
            <DropdownOption onClick={() => setSelectedRegion("충청남도")}>충청남도</DropdownOption>
            <DropdownOption onClick={() => setSelectedRegion("충청북도")}>충청북도</DropdownOption>
          </DropdownMenu>
        </DropdownSelect>
      </DropdownContainer>
      <DropdownContainer>
        <DropdownSelect onClick={() => setAreaMenuOpen(!isAreaMenuOpen)}>
          <Label>{selectedArea || "면적을 선택해주세요."}</Label>
          <ArrowIcon isOpen={isAreaMenuOpen}>▲</ArrowIcon>
          <DropdownMenu isOpen={isAreaMenuOpen}>
            <DropdownOption onClick={() => setSelectedArea("~500")}>
              500m<sup>2</sup> 미만
            </DropdownOption>
            <DropdownOption onClick={() => setSelectedArea("500~700")}>
              500m<sup>2</sup> 이상 700m<sup>2</sup> 미만
            </DropdownOption>
            <DropdownOption onClick={() => setSelectedArea("700~1000")}>
              700m<sup>2</sup> 이상 1000m<sup>2</sup> 미만
            </DropdownOption>
            <DropdownOption onClick={() => setSelectedArea("1000~")}>
              1000m<sup>2</sup> 이상
            </DropdownOption>
          </DropdownMenu>
        </DropdownSelect>
      </DropdownContainer>
      <DropdownContainer>
        <DropdownSelect onClick={() => setPriceMenuOpen(!isPriceMenuOpen)}>
          <Label>{selectedPrice || "가격대를 설정해주세요"}</Label>
          <ArrowIcon isOpen={isPriceMenuOpen}>▲</ArrowIcon>
          <DropdownMenu isOpen={isPriceMenuOpen}>
            <DropdownOption onClick={() => setSelectedPrice("~300000000")}>3억원 미만</DropdownOption>
            <DropdownOption onClick={() => setSelectedPrice("300000000~500000000")}>3억원 이상 5억원 미만</DropdownOption>
            <DropdownOption onClick={() => setSelectedPrice("500000000~700000000")}>5억원 이상 7억원 미만</DropdownOption>
            <DropdownOption onClick={() => setSelectedPrice("700000000~1000000000")}>7억원 이상 10억원 미만</DropdownOption>
            <DropdownOption onClick={() => setSelectedPrice("1000000000~")}>10억원 이상</DropdownOption>
          </DropdownMenu>
        </DropdownSelect>
      </DropdownContainer>
      <DropdownContainer>
        <DropdownSelect onClick={() => setNumberOfRestroomMenuOpen(!isNumberOfRestroomMenuOpen)}>
          <Label>{selectedNumberOfRestroom || "화장실 개수를 선택해주세요"}</Label>
          <ArrowIcon isOpen={isNumberOfRestroomMenuOpen}>▲</ArrowIcon>
          <DropdownMenu isOpen={isNumberOfRestroomMenuOpen}>
            <DropdownOption onClick={() => setSelectedNumberOfRestroom("1")}>1개</DropdownOption>
            <DropdownOption onClick={() => setSelectedNumberOfRestroom("2")}>2개</DropdownOption>
            <DropdownOption onClick={() => setSelectedNumberOfRestroom("3")}>3개</DropdownOption>
            <DropdownOption onClick={() => setSelectedNumberOfRestroom("4~")}>4개 이상</DropdownOption>
          </DropdownMenu>
        </DropdownSelect>
      </DropdownContainer>
      <DropdownContainer>
        <DropdownSelect onClick={() => setNumberOfRoomMenuOpen(!isNumberOfRoomMenuOpen)}>
          <Label>{selectedNumberOfRoom || "방 개수를 선택해주세요"}</Label>
          <ArrowIcon isOpen={isNumberOfRoomMenuOpen}>▲</ArrowIcon>
          <DropdownMenu isOpen={isNumberOfRoomMenuOpen}>
            <DropdownOption onClick={() => setSelectedNumberOfRoom("1")}>1개</DropdownOption>
            <DropdownOption onClick={() => setSelectedNumberOfRoom("2")}>2개</DropdownOption>
            <DropdownOption onClick={() => setSelectedNumberOfRoom("3")}>3개</DropdownOption>
            <DropdownOption onClick={() => setSelectedNumberOfRoom("4")}>4개</DropdownOption>
            <DropdownOption onClick={() => setSelectedNumberOfRoom("5")}>5개</DropdownOption>
            <DropdownOption onClick={() => setSelectedNumberOfRoom("6~")}>6개 이상</DropdownOption>
          </DropdownMenu>
        </DropdownSelect>
      </DropdownContainer>
      <ApplyButton type="button" onClick={handleApplyFilters}>
        필터 적용
      </ApplyButton>

      {error && <ErrorMessage>{error}</ErrorMessage>}
    </ModalContainer>
  );
}

export default FilterModal;
