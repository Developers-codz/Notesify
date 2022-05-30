import {Wrapper,Section,HeroImg,Header,Para,Button} from "./landingComponents"
import landinheroImg from "../../assets/images/Notes-bro.png"
import {Logo} from "../../assets/icons/Logo"
export const Landing = () =>{
    return (
        <Wrapper>
            <Section>
                <Section logo>
                <Logo width="5rem" height="5rem" />
                </Section>
              <Header>Notesify</Header>
              <Para>Take and manage notes for you</Para>
              <Button to="/login">Get Started</Button>
            </Section>
            <Section>
                <HeroImg src={landinheroImg} />
            </Section>
        </Wrapper>
    )
}