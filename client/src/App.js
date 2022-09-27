import styled from "styled-components";
import Header from "./components/Header";
import finit from "./FirebaseInit";
import { getAuth } from "firebase/auth";
import { useState } from "react";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
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
const auth = getAuth(finit);

function App() {
  const [userData, setUserData] = useState(null);

  function handleGoogleLogin() {
    const provider = new GoogleAuthProvider(); // provider를 구글로 설정
    signInWithPopup(auth, provider) // popup을 이용한 signup
      .then((data) => {
        setUserData(data.user); // user data 설정
        console.log(data); // console로 들어온 데이터 표시
      })
      .catch((err) => {
        console.log(err);
      });
  }
  return (
    <Frame>
      <Main>
        <Header></Header>
        <button onClick={handleGoogleLogin}>Login</button>
        {userData ? userData.displayName : null}
      </Main>
    </Frame>
  );
}

export default App;
