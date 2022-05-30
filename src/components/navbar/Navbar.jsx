import { useLocation } from "react-router-dom";
import { Logo, Search, LoginIcon, MoonIcon, SunIcon } from "../../assets/icons";
import {
  Header,
  Heading,
  SearchInput,
  SearchWrapper,
  SearchWrapperIcon,
  IconWrapper,
  Wrapper
} from "./navbarComponent";

export const Navbar = () => {
  const { pathname } = useLocation();
  return pathname !== "/landing" &&
    pathname !== "/login" &&
    pathname !== "/signup" &&
    pathname !== "/mockman" ? (
    <>
      <Header className="header-wrapper">
        <Wrapper>
          <Logo width="2.4rem" height="2.4rem" />
          <Heading>Notesify</Heading>
        </Wrapper>
        <SearchWrapper>
          <SearchInput placeholder="Search..." />

          <SearchWrapperIcon>
            <Search />
          </SearchWrapperIcon>
        </SearchWrapper>

        <IconWrapper>
          <LoginIcon />
        </IconWrapper>
      </Header>
    </>
  ) : null;
};
