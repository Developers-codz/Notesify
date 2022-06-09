import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const NavMenu = styled.ul`
  list-style: none;
`;

export const NavLinks = styled(NavLink)`
  margin: 0.7rem .3rem .7rem 0;
  text-decoration: none;
  display: flex;
  justify-content: start;
  align-items: center;
  border-radius: 0 10px 10px 0;
  color: ${props => props.exact ? "red" : "black"};
  &:hover {
    background-color: #f1e9e7; 
  }
  &.active{
    background: var(--color-secondary-dark);
    color:var(--color-light);
  }
`;

export const NavItem = styled.li`
  cursor: pointer;
  font-size: 1.4rem;
  padding: 1rem 1rem 1rem 0.4rem;
`;

export const IconWrapper = styled.span`
  padding-top: 1rem !important;
  padding: 1rem;
`;
