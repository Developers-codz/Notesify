import styled from "styled-components";

export const HomeWrapper = styled.div`

`

export const EditorWrapper = styled.div`
width:40rem;
height:22rem;
border-radius: 20px;
position: relative;
`

export const TitleBox = styled.input`
width:inherit;
font-size:1.4rem;
padding:.5rem 1rem;
outline: none;
border:none;
margin-top:1rem;
`

export const CloseButton = styled.div`
cursor:pointer;
position:absolute;
top:-15px;
right:-15px;
padding:.4rem .5rem;
border:2px solid var(--color-secondary-dark);
border-radius:50%;
&:hover{
  color:var(--color-light);
  transform: scale(1.02,1.02);
  background-color: var(--color-secondary-dark);
  font-weight: 600;
}
`

export const Pallette = styled.div`
display:flex;
justify-content:start;
align-items:center;
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
export const WhiteButton = styled(PinkButton)`
background-color:white;
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

export const EditorFooter = styled.div`
display:flex;
justify-content:space-between;
align-items:center;
`