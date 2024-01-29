import styled from 'styled-components';
import './App.css';

const Header = () =>
{
  return (<h1 style={{
    backgroundColor: 'yellow'
  }}>제목</h1>);
}
const Header2 = styled.h1`
background-color: yellow;
&:hover {
  background-color: cyan;
}`;

const Wrapper = styled.div`
padding: 1em;
background: grey;
`;
const Title = styled.h1`
font-size: 1.5em;
color: white;
text-align: center;
`;
const Button = styled.button`
color; grey;
border 2px solid palevioletred;
`;
const RoundedButton = styled(Button)`
border-radius: 16px;
`;


function App()
{
  return (
    <div className="App">
      <Button color="red" black={-1}>버튼</Button>
      <RoundedButton>버튼</RoundedButton>
      <Wrapper>
        <Title>안녕</Title>
      </Wrapper>
      <Header />
      <Header2>제목</Header2>
    </div>
  );
}


export default App;
