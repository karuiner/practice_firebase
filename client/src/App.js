import styled from "styled-components";
import Header from "./components/Header";

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
  border: solid 1px red;
`;

function App() {
  return (
    <Frame>
      <Main>
        <Header></Header>
      </Main>
    </Frame>
  );
}

export default App;
