import styled from "styled-components";

export const NoteCard = styled.div`
    width:30rem;
    min-height:10rem;
    background-color: var(--color-light);
    margin:1rem;
    padding:1rem;
    border-radius: 20px;
    position: relative;
`

export const Title = styled.h2`

`
export const NoteText = styled.p`
    margin:.7rem 0;

`
export const CreationTime = styled.p`
    
`
export const Priority = styled.button`
padding:.4rem 1rem;
background-color: var(--color-primary);
border: none;
border-radius:10px;
`
export const Footer = styled.div`
    display:flex;
    justify-content: space-between;
    position: absolute;
    bottom:10px;
`
export const IconContainer = styled.div`
    position:absolute;
    bottom:0;
    left:300px;
    display:flex;
    
`

export const IconWrapper = styled.span`
margin:0 .5rem;
padding:.5rem;
cursor: pointer;
& :hover{
border-radius:50%;
background-color: var(--color-primary);
transform: scale(1.06,1.06);
}
    
`