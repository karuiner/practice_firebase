import {
  createUserWithEmailAndPassword,
  getAuth,
  updateProfile,
} from "firebase/auth";
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
function Resister({ setUserData, setState }) {
  const [data, setData] = useState({ username: "", email: "", password: "" });
  return (
    <Frame>
      <InnerFrame>
        <Label>username</Label>
        <Input
          value={data.username}
          type="text"
          onChange={(e) => {
            setData({ ...data, username: e.target.value });
          }}
        ></Input>
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
              if (
                data.username.length > 4 &&
                data.email.length > 4 &&
                data.password.length > 4
              ) {
                createUserWithEmailAndPassword(auth, data.email, data.password)
                  .then((userCredential) => {
                    updateProfile(userCredential.user, {
                      displayName: data.username,
                    }).then((e) => {
                      setUserData(userCredential.user); // user data 설정
                      console.log(e); // console로 들어온 데이터 표시
                      setState("Result");
                    });
                  })
                  .catch((err) => {
                    console.log(err);
                  });
              }
            }}
          >
            회원 가입
          </button>
        </ButtonLine>
      </InnerFrame>
    </Frame>
  );
}

export default Resister;
