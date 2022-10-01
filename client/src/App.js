import styled from "styled-components";
import Header from "./components/Header";
import { useState } from "react";
import Display from "./components/Display";
import Resister from "./components/Resister";
import Login from "./components/Login";

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
  const [state, setState] = useState("");

  return (
    <Frame>
      <Main>
        <Header setUserData={setUserData} setState={setState}></Header>

        {state === "Resister" ? (
          <Resister setUserData={setUserData} setState={setState}></Resister>
        ) : null}
        {state === "Login" ? (
          <Login setUserData={setUserData} setState={setState}></Login>
        ) : null}
        {state === "Result" ? <Display userData={userData}></Display> : null}
      </Main>
    </Frame>
  );
}

export default App;
