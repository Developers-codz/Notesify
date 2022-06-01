import styled from "styled-components"
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
