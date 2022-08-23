import styled from "styled-components";

export const Header = styled.div`
  width: 100vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  z-index: 3;
`;
export const Heading = styled.span`
  font-size: 2rem;
  padding-left: 1rem;
`;
export const Wrapper = styled.div`
display:flex;
justify-content: space-between;
align-items: center;
`
export const SearchInput = styled.input`
  width: 30vw;
  height: 3rem;
  border: none;
  background-color: var(--color-primary);
  border-radius: 20px;
  font-size: 1rem;
  padding: 0rem 3rem 0 1rem;
  &:focus {
    outline: none;
  }
  @media only screen and (max-width:768px){
    width:40vw
  }
`;
export const SearchWrapper = styled.div`
  position: relative;
`;
export const SearchWrapperIcon = styled.div`
  position: absolute;
  top: 10px;
  right: 15px;
`;
export const IconWrapper = styled.div`
  margin: 0.1rem 2rem ;
  display: flex;
  justify-content: space-around;
  width: 7vw;
  > * {
    cursor: pointer;
  }
  @media only screen and (max-width:768px){
    justify-content: space-between;
    width:10vw;
    margin:.1rem 1rem;
  }
`;

export const FilterMenu = styled.div`
  z-index:4;
  right:7rem;
  top:80px;
  position:absolute;
  width:20rem;
  height:20rem;
  border:1px solid black;
  background-color: var(--bg-primary);
  @media only screen and (max-width:768px){
    height:25rem;
  }
`

export  const DropDownMenu = styled.button`
  cursor: pointer;
  position:absolute;
  right:2px;
  top:50px;
  padding: 0.3rem .5rem;
  background-color:var(--color-primary);
  border:none;
  &:hover{
    transform:scale(1.04,1.04)
  }
`
export const FilterHead = styled.div`
  display:flex;
  justify-content: space-around;
  align-items: center;
  min-height:15%;

  `
export const FilterOptions = styled.div`
margin:.5rem 0 1rem 0;
  & > label {
    margin:1rem 1rem 0 0.2rem;
    
  }
`
export const ClearButton = styled.button`
z-index:1;
background-color: var(--color-primary);
border:none;
padding:.5rem 1rem;

cursor:pointer;

&:hover{
  transform:scale(1.03,1.03)
}
`
