import React, { useEffect, useState } from "react";
import Header from "../../components/header";
import * as s from "../../styles/PropertyPageStyle";
import FilterModal from "./FilterModal";

const Property = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [filterParams, setFilterParams] = useState({});

  useEffect(() => {
    let kakao = window.kakao;
    let map;

    if (kakao) {
      const container = document.getElementById("map");

      if (container) {
        const options = {
          center: new kakao.maps.LatLng(36.8, 127.8),
          level: 13,
        };
        map = new kakao.maps.Map(container, options);

        var zoomControl = new kakao.maps.ZoomControl();
        map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);
      }
    }

    async function getLands() {
      let url = "https://impacton-api.gdre.dev/getLands/";

      if (Object.keys(filterParams).length > 0) {
        url += "?";
        for (let key in filterParams) {
          url += `${key}=${filterParams[key]}&`;
        }
        url = url.slice(0, -1);
      }

      let response = await fetch(url);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      let json = await response.json();

      if (json["header"]["result"] !== "success") {
        alert(json["header"]["message"]);
        return;
      }

      json["body"]["items"].forEach((item) => {
        const markerPosition = new kakao.maps.LatLng(item["latitude"], item["longitude"]);
        const marker = new kakao.maps.Marker({
          position: markerPosition,
        });
        marker.setMap(map);
      });
    }

    if (map) {
      getLands();
    }

    return () => {};
  }, [filterParams]);

  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };

  const applyFilters = (filters) => {
    setFilterParams(filters);
    setModalVisible(false);
  };

  return (
    <>
      <Header />
      <s.FilterButton onClick={toggleModal}>
        <s.GearIcon />
        <s.FilterText>{modalVisible ? "조건 창을 다시 닫으려면 여기를 클릭하세요" : "조건을 설정하려면 여기를 클릭하세요"}</s.FilterText>
      </s.FilterButton>
      <s.MapContainer id="map">{modalVisible && <FilterModal applyFilters={applyFilters} />}</s.MapContainer>
      <div id="fetchResult"></div>
    </>
  );
};

export default Property;
