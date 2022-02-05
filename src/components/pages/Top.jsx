import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { SecondaryButton } from "../atoms/button/SecondaryButton";
import { useSetRecoilState } from "recoil";
import { userState } from "../../store/userState";

export const Top = () => {
  const history = useHistory();
  // const { setUserInfo } = useContext(UserContext);
  const setUserInfo = useSetRecoilState(userState);

  const onClickAdmin = () => {
    setUserInfo({ isAdmin: true });
    history.push("/users");
  };
  const onClickGeneral = () => {
    setUserInfo({ isAdmin: false });
    history.push("/users");
  };
  return (
    <SContainer>
      <h2>トップページ</h2>
      <SecondaryButton onClick={onClickAdmin}>管理者</SecondaryButton>
      <br />
      <br />
      <SecondaryButton onClick={onClickGeneral}>一般</SecondaryButton>
    </SContainer>
  );
};

const SContainer = styled.div`
  text-align: center;
`;
