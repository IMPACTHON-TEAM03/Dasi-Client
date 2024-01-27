import React, { useEffect, useState } from "react";
import * as S from "./style";
import Header from "../../components/Header/index";
import { instance } from "../../apis/instance";

const Locate = () => {
  const [dummy, setDummy] = useState({});
  useEffect(() => {
    (async () => {
      const { data } = await instance.get(`getLandImages/?land_idx=${1}`);
      setDummy(data);
    })();
  }, []);
  return (
    <S.Container>
      <Header />
      <button onClick={() => console.log(dummy)}>asdfsad</button>
    </S.Container>
  );
};

export default Locate;
