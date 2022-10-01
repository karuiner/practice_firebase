import styled from "styled-components";
import finit from "../FirebaseInit";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
const auth = getAuth(finit);
const Frame = styled.div`
  height: 100px;
  width: 100%;
  display: flex;
  align-items: center;
  padding-left: 20px;
  padding-right: 20px;
`;

const Button = styled.button`
  height: 60px;
  width: 150px;
  padding: 10px;
  margin-left: 20px;
`;

const email = "test@email.com";
const password = "test_password";
function Header({ setUserData, setState }) {
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
      <Button
        onClick={() => {
          setState("Resister");
        }}
      >
        회원 가입
      </Button>
      <Button
        onClick={() => {
          setState("Login");
        }}
      >
        일반 로그인
      </Button>
      <Button onClick={handleGoogleLogin}>구글 계정 로그인</Button>
    </Frame>
  );
}

export default Header;
