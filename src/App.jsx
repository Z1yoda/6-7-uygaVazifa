import React from 'react';
import { Container, GlobalStyles, Header, Ul, Button, Div, Content, H1, P, SaveButton, Buttons, Right, Left, H2 } from './styles';
import logo from './assets/logo.svg'
import apple from './assets/apple.svg'
import googlePlay from './assets/google-play.svg'
import vector1 from './assets/Vector 1.svg'
import phonebg from './assets/phonebg.svg'
import vector2 from './assets/Vector 2.svg'

function App() {
  return (
    <>
      <GlobalStyles />
      <Header>
        <Container>
          <img src={logo} alt="" />
          <Div>
            <Ul>
              <li>Home</li>
              <li>About us</li>
              <li>How it works</li>
              <li>Services</li>
              <li>Contact</li>
            </Ul>
            <Button>Get Started</Button>
          </Div>
        </Container>
      </Header>
      <Container>
        <Content>
          <Left>
            <H1>Connecting all your banking needs </H1>
            <P>A smart mobile application you can control your business needs</P>
            <Buttons>
              <SaveButton className='Button'><img src={apple} alt="" />Download App</SaveButton>
              <SaveButton className='Button'><img src={googlePlay} alt="" />Download App</SaveButton>
            </Buttons>
          </Left>
          <Right><img src={phonebg} alt="" />
            <img className='vector1' src={vector1} alt="" />
            <img className='vector2' src={vector2} alt="" />
            <img className='logo' src={logo} alt="" />
            <H2>A smart mobile application</H2>
          </Right>
        </Content>
      </Container>

    </>
  );
}

export default App;

