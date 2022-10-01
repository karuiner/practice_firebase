import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import styled from "styled-components";
import finit from "../FirebaseInit";
const Frame = styled.div`
  height: calc(100% - 100px);
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
`;

const InnerFrame = styled.div`
  height: 500px;
  width: 600px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
`;
const Label = styled.div`
  flex: 1 0 0;
  margin: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Input = styled.input`
  flex: 1 0 0;
  margin: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ButtonLine = styled.div`
  flex: 2 0 0;
  margin: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const auth = getAuth(finit);
function Login({ setUserData, setState }) {
  const [data, setData] = useState({ username: "", email: "", password: "" });
  return (
    <Frame>
      <InnerFrame>
        <Label>E-mail</Label>
        <Input
          value={data.email}
          type="email"
          onChange={(e) => {
            setData({ ...data, email: e.target.value });
          }}
        ></Input>
        <Label>Password</Label>
        <Input
          value={data.password}
          type="password"
          onChange={(e) => setData({ ...data, password: e.target.value })}
        ></Input>
        <ButtonLine>
          <button
            onClick={() => {
              if (data.email.length > 4 && data.password.length > 4) {
                signInWithEmailAndPassword(auth, data.email, data.password)
                  .then((userCredential) => {
                    setUserData(userCredential.user); // user data 설정
                    setState("Result");
                    console.log(userCredential); // console로 들어온 데이터 표시
                  })
                  .catch((err) => {
                    console.log(err);
                  });
              }
            }}
          >
            Login
          </button>
        </ButtonLine>
      </InnerFrame>
    </Frame>
  );
}

export default Login;
