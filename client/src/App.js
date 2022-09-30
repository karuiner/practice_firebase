import styled from "styled-components";
import Header from "./components/Header";
import { useState } from "react";

const Frame = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
`;

const Main = styled.div`
  height: 100%;
  width: ${() => (window.innerWidth > 1200 ? "1200px" : "100%")};
  display: flex;
  flex-direction: column;
  border: solid 1px red;
`;
function App() {
  const [userData, setUserData] = useState(null);

  return (
    <Frame>
      <Main>
        <Header setUserData={setUserData}></Header>

        {userData ? userData.displayName : null}
      </Main>
    </Frame>
  );
}

export default App;
