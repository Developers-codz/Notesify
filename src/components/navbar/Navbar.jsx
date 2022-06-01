import { useState } from "react";
import { useLocation } from "react-router-dom";
import { Logo, Search, LoginIcon, MoonIcon, SunIcon } from "../../assets/icons";
import {
  Header,
  Heading,
  SearchInput,
  SearchWrapper,
  SearchWrapperIcon,
  IconWrapper,
  DropDownMenu,
  Wrapper,
} from "./navbarComponent";
import { logout } from "../../Redux/Reducers/authSlice";
import { useDispatch } from "react-redux";

export const Navbar = () => {
  const [isMenuOpen, setOpen] = useState(false);
  const dispatch = useDispatch();
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

        <IconWrapper onClick={() => setOpen((open) => !open)}>
          <LoginIcon />
        </IconWrapper>
        {isMenuOpen && (
          <DropDownMenu
            onClick={() => {
              dispatch(logout());
              setOpen(false)
            }}
          >
            Log Out
          </DropDownMenu>
        )}
      </Header>
    </>
  ) : null;
};
