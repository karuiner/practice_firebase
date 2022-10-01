import styled from "styled-components";

const Frame = styled.div`
  height: calc(100% - 100px);
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function Display({ userData }) {
  return <Frame>{userData ? userData.displayName : null}</Frame>;
}

export default Display;
