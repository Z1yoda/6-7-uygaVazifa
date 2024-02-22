import styled, { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
  
  body {
    font-family: 'Poppins', sans-serif; 
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background-color: rgb(247, 247, 249);
  }

  button, ul li, .Button {
    cursor: pointer;
  }

  ul li {
    font-weight: 500;
  }
  h1{
    font-weight: 700;
  }

  .vector1, .vector2 {
   position: absolute;
   left: 139px;
   top: 29px;
  }

.logo {
  position: absolute;
  top: 180.37px;
  left: 346.43px;
  transform: rotate(32.15deg);
  margin: 10px;
  } 

`;

const Container = styled.div`
  width: 1110px;
  display: flex;
  margin: 0 auto;
  justify-content: space-between;
`;

const Header = styled.header`
  max-width: 100%;
  margin-top: 30px;
`;

const Ul = styled.ul`
  font-size: 14px;
  font-weight: 500;
  text-decoration: none;
  list-style: none;
  display: flex;
  gap: 24px;
  color: #1e255e;
`;

const Button = styled.button`
  width: 130px;
  height: 42px;
  border-radius: 100px;
  background: #3c4ef3;
  font-weight: 500;
  border: none;
  color: white;
`;

const Div = styled.div`
  display: flex;
  gap: 50px;
`;

const Content = styled.div`
  display: flex;
  margin-top: 88px;
`;

const H1 = styled.h1`
  width: 490px;
  font-size: 64px;
  line-height: 96px;
  color: rgb(30, 37, 94);
  font-weight: 700;
  margin-bottom: 10px;
`;

const P = styled.p`
  width: 400px;
  color: rgba(30, 37, 94, 0.7);
  margin-bottom: 50px;
`;

const SaveButton = styled.div`
  padding: 19px 33px;
  border-radius: 100px;
  background: rgb(229, 229, 229);
  color: #3c4ef3;
  border: none;
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Buttons = styled.div`
  display: flex;
  gap: 20px;
`;
const Right = styled.div`
position: relative;
`;

const Left = styled.div``;

const H2 = styled.h2`
position: absolute;
top: 253.01px;
left: 278.39px;
color: rgba(30, 37, 94, 0.7);
font-size: 14px;
font-weight: 700;
line-height: 21px;
text-align: center;
transform: rotate(33.53deg);
width: 144px;
margin-left: 10px;
`

export {
  Container,
  GlobalStyles,
  Header,
  Ul,
  Button,
  Div,
  Content,
  H1,
  P,
  SaveButton,
  Buttons,
  Right,
  Left,
  H2
};
