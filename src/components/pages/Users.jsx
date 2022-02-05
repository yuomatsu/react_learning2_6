import styled from "styled-components";
import { SearchInput } from "../molucules/SearchInput";
import { UserCard } from "../organisms/user/UserCard";
import React from "react";
// import { UserContext } from "../../providers/UserProvider";
import { SecondaryButton } from "../atoms/button/SecondaryButton";
import { useRecoilState } from "recoil";
import { userState } from "../../store/userState";

const users = [...Array(10).keys()].map((val) => {
  return {
    id: val,
    name: `ゆう-${val}`,
    image: "https://source.unsplash.com/2l0CWTpcChI",
    email: "12345@xxx.com",
    phone: "000-0000-1000",
    company: {
      name: "テスト株式会社"
    },
    website: "fgerthyjhrgefwwgrhtjyhrge"
  };
});

export const Users = () => {
  // const { userInfo, setUserInfo } = useContext(UserContext);
  // console.log(userInfo);
  const [userInfo, setUserInfo] = useRecoilState(userState);

  const onClickSwitch = () => setUserInfo({ isAdmin: !userInfo.isAdmin });

  return (
    <SContainer>
      <h2>ユーザー一覧</h2>
      <SearchInput />
      <br />
      <SecondaryButton onClick={onClickSwitch}>切り替え</SecondaryButton>
      <SUserArea>
        {users.map((obj) => (
          <UserCard key={obj.id} user={obj}></UserCard>
        ))}
      </SUserArea>
    </SContainer>
  );
};

const SContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px;
`;

const SUserArea = styled.div`
  padding-top: 40px;
  display: grid;
  width: 100%;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 20px;
`;
