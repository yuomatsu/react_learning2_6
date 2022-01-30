import styled from "styled-components";
import { SearchInput } from "../molucules/SearchInput";
import { UserCard } from "../organisms/user/UserCard";
import { useLocation } from "react-router-dom";
import React from "react";

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
  const { state } = useLocation();
  console.log(state);
  const isAdmin = state ? state.isAdmin : false;
  return (
    <SContainer>
      <SUserArea>
        <h2>ユーザー一覧</h2>
        <SearchInput />
        {users.map((obj) => (
          <UserCard key={obj.id} user={obj} isAdmin={isAdmin}></UserCard>
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
