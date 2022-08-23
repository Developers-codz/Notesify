import {Wrapper,Section,HeroImg,Header,Para,Button} from "./landingComponents"
import landinheroImg from "../../assets/images/Notes-bro.png"
import * as React from "react";
import {Logo} from "../../assets/icons/Logo"
import {useDocumentTitle} from "../../functions"
export const Landing = ():JSX.Element =>{
    useDocumentTitle("Landing")
    return (
        <Wrapper>
            <Section>
                <Section logo>
                <Logo width="5rem" height="5rem" />
                </Section>
              <Header>Notesify</Header>
              <Para>Take and manage notes just for you in a modern way.</Para>
              <Button to="/login">Get Started</Button>
            </Section>
            <Section>
                <HeroImg src={landinheroImg} />
            </Section>
        </Wrapper>
    )
}