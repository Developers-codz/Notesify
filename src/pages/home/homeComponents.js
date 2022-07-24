import styled from "styled-components";

export const HomeWrapper = styled.div``;

export const EditorWrapper = styled.div`
  width: 40rem;
  height: 23rem;
  border-radius: 20px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: 2px solid black;
  z-index: 2;

  @media only screen and (max-width: 768px) {
    width: 300px;
    height: 35rem;
  }
`;

export const TitleBox = styled.input`
  width: 98%;
  font-size: 1.4rem;
  padding: 0.5rem 0.8rem;
  outline: none;
  border: none;
  margin-top: 1rem;
`;

export const CloseButton = styled.div`
  cursor: pointer;
  position: absolute;
  top: -15px;
  right: -15px;
  padding: 0.4rem 0.5rem;
  border: 2px solid var(--color-secondary-dark);
  border-radius: 50%;
  z-index: 3;
  &:hover {
    color: var(--color-light);
    transform: scale(1.02, 1.02);
    background-color: var(--color-secondary-dark);
    font-weight: 600;
  }
`;

export const CheckBoxInput = styled.input`
  margin: 0 0.3rem;
`;

export const Checkboxlabel = styled.label`
  margin: 0.2rem;
`;
export const ButtonToNote = styled.button`
  margin: 0 1rem;
  border: none;
  background: ${(props) => (props.addNotes ? "#d6806a" : "transparent")};
  padding: ${(props) => (props.addNotes ? ".5rem 1rem" : "")};
  border-radius: ${(props) => (props.addNotes ? "10px" : "")};
  cursor: pointer;
  font-size: 1.1rem;
  position: ${(props) => (props.addNotes ? "fixed" : "")};
  bottom: ${(props) => (props.addNotes ? "40px" : "")};
  right: ${(props) => (props.addNotes ? "30px" : "")};
  &:hover {
    transform: scale(1.03, 1.03); 
  }
`;

export const ButtonToNoteNow = styled(ButtonToNote)`
  background-color: var(--color-secondary-dark);
  position: static;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  margin: 1rem 0;
  color: var(--color-primary) !important;
  &:hover {
    color: var(--color-light);
    transform: scale(1.04, 1.04);
  }
`;

export const EditorFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media only screen and (max-width: 768px) {
    flex-direction: column;
    align-items: flex-end;
  }
`;

export const NotesWrapper = styled.div`
  padding: 1rem;
  text-align: ${(props) => (props.noNote ? "center" : "start")};
  @media only screen and (max-width:768px){
    padding:0;
  
  }
`;

export const NoNotesMsg = styled.h1`
  padding: 1rem 0;
`;
