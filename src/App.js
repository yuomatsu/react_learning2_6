// import { BrowserRouter } from "react-router-dom";
// import { PrimaryButton } from "./components/atoms/button/PrimaryButton";
// import { SecondaryButton } from "./components/atoms/button/SecondaryButton";
// import { SearchInput } from "./components/molucules/SearchInput";
// import { UserCard } from "./components/organisms/user/UserCard";
// import { HeaderOnly } from "./components/templates/HeaderOnly";
// import { DefaultLayout } from "./components/templates/DefaultLyout";
import React from "react";
import { Router } from "./router/Router";
import "./styles.css";
import { UserProvider } from "./providers/UserProvider";
import { RecoilRoot } from "recoil";

export default function App() {
  return (
    <RecoilRoot>
      <UserProvider>
        <Router />
      </UserProvider>
    </RecoilRoot>
  );
}
