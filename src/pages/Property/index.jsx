import React, { useEffect } from "react";
import Header from "../../components/header";
import * as s from "../../styles/PropertyPageStyle";
import FilterModal from "./FilterModal";

const Property = () => {
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
      let response = await fetch("https://impacton-api.gdre.dev/getLands/");
      let json = await response.json();

      if (json["header"]["result"] !== "success") {
        alert(json["header"]["message"]);
        return;
      }

      json["body"]["items"].forEach((item) => {
        let button = document.createElement("button");
        button.classList.add("btn");
        button.classList.add("btn-primary");
        button.classList.add("m-2");
        button.textContent = `${item["location"]} (${Number(item["price"]).toLocaleString()}원)`;

        let marker = new kakao.maps.Marker({
          map: map,
          position: new kakao.maps.LatLng(item["latitude"], item["longitude"]),
        });

        button.addEventListener("click", (e) => {
          map.setLevel(3);
          map.setCenter(new kakao.maps.LatLng(item["latitude"], item["longitude"]));
        });

        document.getElementById("fetchResult").appendChild(button);
      });
    }

    if (map) {
      getLands();
    }
  }, []);

  return (
    <>
      <Header />
      <s.FilterButton>
        <s.GearIcon />
        <s.FilterText>조건을 설정하려면 여기를 클릭하세요</s.FilterText>
      </s.FilterButton>
      <s.MapContainer id="map"></s.MapContainer>
      <div id="fetchResult"></div>
      <FilterModal>dd</FilterModal>
    </>
  );
};

export default Property;
