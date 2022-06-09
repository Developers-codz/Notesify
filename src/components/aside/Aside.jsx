import { useLocation } from "react-router-dom";
import { NavMenu, NavItem, NavLinks, IconWrapper } from "./asideComponent";
import { HomeIcon ,TrashIcon,ArchiveIcon,SettingsIcon} from "../../assets/icons/navigationIcon";

export const Aside = () => {
  const { pathname } = useLocation();
  return pathname !== "/landing" &&
    pathname !== "/login" &&
    pathname !== "/signup" &&
    pathname !== "/mockman" ? (
    <aside className="aside">
      <NavMenu>
        <NavLinks to="/" className={navData=> navData.isActive ? "active" :""}>
          <IconWrapper><HomeIcon height="2rem" width="2rem" /></IconWrapper>
          <NavItem>Home</NavItem>
        </NavLinks>
        <NavLinks to="/archive" >
          <IconWrapper><ArchiveIcon height="2rem" width="2rem" /></IconWrapper>
          <NavItem>Archive</NavItem>
        </NavLinks>
        <NavLinks to="/trash" >
          <IconWrapper><TrashIcon height="2rem" width="2rem" /></IconWrapper>
          <NavItem>Trash</NavItem>
        </NavLinks>
      </NavMenu>
    </aside>
  ) : null;
};
