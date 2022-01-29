import { PrimaryButton } from "./components/atoms/button/PrimaryButton";
import { SecondaryButton } from "./components/atoms/button/SecondaryButton";
import { SearchInput } from "./components/molucules/SearchInput";
import { UserCard } from "./components/organisms/user/UserCard";
import "./styles.css";

const user = {
  name: "ゆう",
  image: "https://source.unsplash.com/2l0CWTpcChI",
  email: "12345@xxx.com",
  phone: "000-0000-1000",
  company: {
    name: "テスト株式会社"
  },
  website: "fgerthyjhrgefwwgrhtjyhrge"
};

export default function App() {
  return (
    <div className="App">
      <PrimaryButton>テスト</PrimaryButton>
      <SecondaryButton>検索</SecondaryButton>
      <SearchInput></SearchInput>
      <UserCard user={user}></UserCard>
    </div>
  );
}
