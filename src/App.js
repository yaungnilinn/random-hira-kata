import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
import React from "react";



const Global = createGlobalStyle`
*{
  box-sizing: border-box;
  font-family: 'Raleway', sans-serif;
}
`

const Cointainer = styled.div`
width: 38vw;
height: 75vh;
background: #BAC4CA;
margin: auto;
margin-top: 10vh;
border-radius: 20px;
position: relative;
@media screen and (max-width: 1024px){
  width: 50vw;
};
@media screen and (max-width: 767px){
  width: 60vw;
}
`
const Form = styled.div`
height: 30vh;
width: 38vw;
position: absolute;
background: #ECDBE0;
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
position: absolute;
left: 40%;
font-size: 120px;
font-weight: 900;
`
const Flex = styled.div`
display: flex;
flex-direction: row;
height: 40%;
align-items: center;
justify-content: center;
`

const Icon = styled.div`
width: 20%;
height: 70%;
border-radius: 0 10px 10px 0;
background: ${props => props.bg === '2' ? '#CBB9B5' : props.bg === '0' ? '#5ca904' : '#CC252C'};
font-size: 16px;
font-weight: 700;
letter-spacing: 0.3px;
color: ${props => props.bg === '2' ? '#544C4A' : '#FFFFFF'};
text-align: center;
line-height: 55px;
@media screen and (max-width: 767px){
  width: 30%;
}
`

const Input = styled.input`
border: none;
height: 70%;
width: 25%;
border-radius: 10px 0 0 10px;
background: #BAC4CA;
font-size: 34px;
text-align: center;
color: #9C8F77;
&:focus{
  outline: none;
};
::placeholder{
  opacity: 0.2;
};
@media screen and (max-width: 767px){
  width: 35%;
  font-size: 26px;
}
`

const Flex2 = styled.div`
display: flex;
flex-direction: row;
height: 60%;
align-items: center;
justify-content: right;

`

const RandomBtn = styled.div`
width: 34%;
height: 45%;
background: #9C8F77;
margin-top: 3%;
border-radius: 14px;
text-align: center;
font-size: 14px;
font-weight: 900;
line-height: 54px;
letter-spacing: 1px;
text-transform: uppercase;
color: #fff8ff;
@media screen and (max-width: 1024px){
  width: 30%;
  height: 60%;
  line-height: 70px;
};
@media screen and (max-width: 767px){
  width: 30%;
  height: 65%;
  border-radius: 60%;
  line-height: 80px;
}
`

function App() {
//data  ;
  const charArr = ['あ', 'い', 'う', 'え', 'お', 'か', 'き', 'く', 'け', 'こ', 'さ', 'し', 'す', 'せ', 'そ', 'た', 'ち', 'っ', 'て', 'と', 'な', 'に', 'ぬ', 'ね', 'の', 'は', 'ひ', 'ふ', 'へ', 'ほ', 'ま', 'み', 'む', 'め', 'も', 'や', 'ゆ', 'よ', 'ら', 'り', 'る', 'れ', 'ろ', 'わ', 'を'];
  const nameArr = ['a', 'i', 'u', 'e', 'o', 'ka', 'ki', 'ku', 'ke', 'ko', 'sa', 'shi', 'su', 'se', 'so', 'ta', 'chi', 'tsu', 'te', 'to', 'na', 'ne', 'nu', 'ne', 'no', 'ha', 'hi', 'fu', 'he', 'ho', 'ma', 'mi', 'mu', 'me', 'mo', 'ya', 'yu', 'yo', 'ra', 'ri', 'ru', 're', 'ro', 'wa', 'wo'];
  

//;
  const [form, setForm] = React.useState('');
  const [bool, setBool] = React.useState(true);
  const [bool2, setBool2] = React.useState('2');
  const [arr, setArr] = React.useState('');

//random generate onClick;  
  function randomHandle(event){
     setBool(prevBool => prevBool = false)
     setBool2(prevBool => prevBool = '2')
     let r = charArr[Math.floor(Math.random()*charArr.length)];
     
     if( bool2 === '0'){
        setArr(prevArr => r);
     }
     if(charArr.indexOf(arr) + nameArr.indexOf(form) === -2){
      setArr(prevArr => r);
   }
  }
 
//input field;
  function change(event){
    setForm(event.target.value)
    
  }
  function submit(){
   if(charArr.indexOf(arr) !== nameArr.indexOf(form)){
      setBool2(prevBool2 => prevBool2 = '1')
   } 
   if(charArr.indexOf(arr) === nameArr.indexOf(form)){
      setBool2(prevBool2 => prevBool2 = '0')
   } 
    
  }
  console.log(charArr.indexOf(arr))
  console.log(nameArr.indexOf(form))
  console.log(charArr.indexOf(arr) + nameArr.indexOf(form))
  return (
    <div>
      <Global></Global>
      <Cointainer>
        <Hiragana>{bool ? '' : arr}</Hiragana>
        <Form>
          <Flex>
            <Input placeholder='name' type='text' maxLength={3} onChange={change}></Input>
            <Icon onClick={submit} bg={bool2}>{bool2 === '2' ? 'Submit' : bool2 === '0' ? 'O' : 'X'}</Icon>
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
