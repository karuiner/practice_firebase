import styled from "styled-components";

const Frame = styled.div`
  height: 100px;
  width: 100%;
  display: flex;
`;

function Header() {
  return (
    <Frame>
      <button>로그인</button>
    </Frame>
  );
}

export default Header;
