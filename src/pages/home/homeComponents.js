import styled from "styled-components";

export const HomeWrapper = styled.div`

`

export const EditorWrapper = styled.div`
width:40rem;
height:20rem;
border: 1px solid black;

`

export const TitleBox = styled.input`
width:inherit;
font-size:1.4rem;
padding:.5rem 1rem;
outline: none;
border-top:none;
border-left:none
`

export const Pallatte = styled.div`

display:flex;
padding-left:1rem;

`
export const PinkButton = styled.button`
width:20px;
height:20px;
border-radius: 50%;
background-color: pink;
cursor:pointer;
margin:.3rem;
border:1px solid black;
`

export const BlueButton = styled(PinkButton)`
background-color:lightblue
`

export const YellowButton = styled(PinkButton)`
background-color:yellow
`
export const GreenButton = styled(PinkButton)`
background-color:green
`

export const ButtonToNote = styled.button`
margin: 0 1rem;
  border: none;
  background: ${(props) => props.addNotes ? "#d6806a":"transparent"};
  padding:${(props) => props.addNotes ? ".5rem 1rem":""};
  border-radius:${(props) => props.addNotes ? "10px":""};
  cursor: pointer;
  font-size: 1.1rem;
  position:${(props) => props.addNotes ? "fixed":""};
  bottom:${(props) => props.addNotes ? "20px":""};
  right:${(props) => props.addNotes ? "20px":""};
  &:hover {
    transform: scale(1.03, 1.03);
    color:var( --primary-cta) !important;
  }
`