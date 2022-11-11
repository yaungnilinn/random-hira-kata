import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
import React from "react";



const Global = createGlobalStyle`
*{
  box-sizing: border-box;
  font-family: 'Roboto Slab', serif;
};
body{
  background: #ECECEC;
}
`

const Cointainer = styled.div`
width: 30vw;
height: 80vh;
background: #EEF0F5;
margin: auto;
margin-top: 10vh;
border-radius: 20px;
position: relative;
padding-top: 3.5vh;
overflow: hidden;
box-shadow: 0px 50px 50px -25px #C4B3E6;
@media screen and (max-width: 1024px){
  width: 50vw;
};
@media screen and (max-width: 767px){
  width: 60vw;
}
`
const Form = styled.div`
height: 30vh;
width: 30vw;
position: absolute;
background: #232298;
bottom: 0;
padding: 3%;
border-radius: 0 0 20px 20px;
@media screen and (max-width: 1024px){
  width: 50vw;
};
@media screen and (max-width: 767px){
  width: 60vw;
}
`

const Hiragana = styled.h1`
text-align: center;
font-size: 120px;
font-weight: 900;
color: ${props => props.bg === '2' ? '#695BC0' : props.bg === '0' ? 'green' : 'red'};
`
const Flex = styled.div`
display: flex;
flex-direction: row;
height: 40%;
align-items: center;
justify-content: center;
`

const Icon = styled.button`
width: 20%;
height: 70%;
border-radius: 0 10px 10px 0;
background: #EEC0DF;
font-size: 16px;
font-weight: 600;
letter-spacing: 0.3px;
cursor: pointer;
border: none;
color: #FFF;
letter-spacing: 1px;
text-align: center;
line-height: 55px;
transition: all 1s ease 0s;
&:hover{
  background: #9B8ED9;
  color: #FDFDFD;
};
`

const Input = styled.input`
border: none;
height: 70%;
width: 25%;
border-radius: 10px 0 0 10px;
background: #F5F5F5;
font-size: 24px;
text-align: center;
color: #695BC0;
font-weight: 600;
caret-color: #232298;
&:focus{
  outline: none;
};
::placeholder{
  opacity: 0.26;
  font-size: 18px;
  letter-spacing: 0.5px;
};
`

const Flex2 = styled.div`
display: flex;
flex-direction: row;
height: 60%;
align-items: center;
justify-content: right;

`

const RandomBtn = styled.button`
width: 34%;
height: 45%;
background: #9B8ED9;
margin-top: 3%;
border-radius: 45px;
border: none;
text-align: center;
font-size: 15px;
font-weight: 800;
letter-spacing: 2.5px;
text-transform: uppercase;
color: #FDFDFD;
cursor: pointer;
box-shadow: 0px 8px 15px rgba(219, 219, 219, 0.1);
transition: all 0.3s ease 0s;
&:hover{
  background-color: #EEBDDE;
  box-shadow: 0px 15px 20px rgba(219, 219, 219, 0.3);
  color: #234868;
  transform: translateY(-7px);
};
`
const ChangeCharBtn = styled.button`
width: 34%;
height: 8%;
position: absolute;
border: none;
top: 0;
left: 0;
border-radius: 0 0 20px 0;
text-align: center;
line-height: 33px;
font-weight: 400;
font-size: 16px;
letter-spacing: 1px;
background: ${props => props.bg1 ? '#68C0E0' : '#EEE9EA'};
color: ${props => props.bg1 ? '#F9F9F9' : '#A0A0EF'};
cursor: pointer;
transition: all 1s ease 0s;
&:hover{
  box-shadow: ${props => props.bg1 ? '0px 5px 20px rgb(219, 219, 219)' : '0px 5px 20px rgb(178, 219, 233, 0.7)'};
};
`

function App() {
  //data  ;
  const charArrH = ['あ', 'い', 'う', 'え', 'お', 'か', 'き', 'く', 'け', 'こ', 'さ', 'し', 'す', 'せ', 'そ', 'た', 'ち', 'っ', 'て', 'と', 'な', 'に', 'ぬ', 'ね', 'の', 'は', 'ひ', 'ふ', 'へ', 'ほ', 'ま', 'み', 'む', 'め', 'も', 'や', 'ゆ', 'よ', 'ら', 'り', 'る', 'れ', 'ろ', 'わ', 'を'];
  const charArrK = ['ア', 'イ', 'ウ', 'エ', 'オ', 'カ', 'キ', 'ク', 'ケ', 'コ', 'サ', 'シ', 'ス', 'セ', 'ソ', 'タ', 'チ', 'ツ', 'テ', 'ト', 'ナ', 'ニ', 'ヌ', 'ネ', 'ノ', 'ハ', 'ヒ', 'フ', 'ヘ', 'ホ', 'マ', 'ミ', 'ム', 'メ', 'モ', 'ヤ', 'ユ', 'ヨ', 'ラ', 'リ', 'ル', 'レ', 'ロ', 'ワ', 'ヲ'];
  const nameArr = ['a', 'i', 'u', 'e', 'o', 'ka', 'ki', 'ku', 'ke', 'ko', 'sa', 'shi', 'su', 'se', 'so', 'ta', 'chi', 'tsu', 'te', 'to', 'na', 'ni', 'nu', 'ne', 'no', 'ha', 'hi', 'fu', 'he', 'ho', 'ma', 'mi', 'mu', 'me', 'mo', 'ya', 'yu', 'yo', 'ra', 'ri', 'ru', 're', 'ro', 'wa', 'wo'];


  //;
  const [form, setForm] = React.useState('');
  const [bool, setBool] = React.useState(true);
  const [bool2, setBool2] = React.useState('2');
  const [bool3, setBool3] = React.useState(true);
  const [arr, setArr] = React.useState('');

  //random generate onClick;  
  function randomHandle(event) {
    setBool(prevBool => prevBool = false)
    setBool2(prevBool => prevBool = '2')
    let r = cArr[Math.floor(Math.random() * cArr.length)];

    //  if( bool2 === '0'){
    //     setArr(prevArr => r);
    //  }
    //  if(cArr.indexOf(arr) + nameArr.indexOf(form) === -2){
    setArr(prevArr => r);
    //  }
  }

  //input field;
  function change(event) {
    setForm(event.target.value)

  }
  function submit() {

    if (cArr.indexOf(arr) !== nameArr.indexOf(form)) {
      setBool2(prevBool2 => prevBool2 = '1')
    }
    if (cArr.indexOf(arr) === nameArr.indexOf(form)) {
      setBool2(prevBool2 => prevBool2 = '0')
    }
  }

  //Change Character Set
  let cArr = bool3 ? charArrH : charArrK
  function changeChar(event) {
    event.preventDefault();
    setBool3(prevBool3 => !prevBool3)
    setBool(prevBool => prevBool = true)
  }

  return (
    <div>
      <Global></Global>
      <Cointainer>
        <ChangeCharBtn onClick={changeChar} bg1={bool3}>{bool3 ? 'To Katakana' : 'To Hiragana'} </ChangeCharBtn>
        <Hiragana bg={bool2}>{bool ? '' : arr}</Hiragana>
        <Form>
          <Flex>
            <Input placeholder='NAME' type='text' maxLength={3} onChange={change}></Input>
            <Icon onClick={submit}>Submit</Icon>
          </Flex>
          <Flex2>
            <RandomBtn onClick={randomHandle}>{bool ? 'Start' : 'Next'}</RandomBtn>
          </Flex2>

        </Form>
      </Cointainer>
    </div>
  );
}

export default App;
