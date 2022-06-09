import { useState,useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Logo, Search, LoginIcon, FilterIcon } from "assets/icons";
import {
  Header,
  Heading,
  SearchInput,
  SearchWrapper,
  SearchWrapperIcon,
  IconWrapper,
  DropDownMenu,
  Wrapper,
  FilterMenu,
  FilterHead,
  FilterOptions,
  ClearButton,
} from "./navbarComponent";
import { logout } from "Redux/Reducers/authSlice";
import {
  setByPriority,
  setByTags,
  setByDate,
  clearFilters,
} from "Redux/Reducers/notesSlice";

import { useDispatch } from "react-redux";

export const Navbar = () => {
  const [isMenuOpen, setOpen] = useState({ logout: false, filter: false });
  const dispatch = useDispatch();
  const tags = ["Study", "Health", "Office"];
  const [inTag, setInTag] = useState([]);
  const { pathname } = useLocation();

  const priorityHandler = (e) => {
    dispatch(setByPriority(e.target.value));
  };
  const dateHandler = (e) =>{
    dispatch(setByDate(e.target.value))
  }

  const tagsHandler = (e) => {
    const currentTag = e.target.value;
    const include = e.target.checked
    if(include)
    setInTag([...inTag,currentTag])
    else{
      setInTag([...inTag.filter(tag => tag != currentTag)])
    }
    
  };
  useEffect(()=>{
    dispatch(setByTags(inTag))
  },[inTag])
  

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
          <div
            onClick={() =>
              setOpen((prev) => ({ ...prev, filter: !prev.filter }))
            }
          >
            <FilterIcon />
          </div>
          <div
            onClick={() =>
              setOpen((prev) => ({ ...prev, logout: !prev.logout }))
            }
          >
            <LoginIcon />
          </div>
        </IconWrapper>
        {isMenuOpen.filter && (
          <FilterMenu>
            <FilterHead>
              <h3>Filter By tags</h3>
            </FilterHead>
            <FilterOptions>
              {tags.map((tag,i) => {
                return (
                  <>
                    <input
                      type="checkbox"
                      key={i}
                      id={tag}
                      checked={inTag.some((t) => t === tag)}
                      value={tag}
                      onClick={tagsHandler}
                    />
                    <label htmlFor={tag}>{tag}</label>
                  </>
                );
              })}
            </FilterOptions>
            <FilterHead>
              <h3>Filter by Priority</h3>
            </FilterHead>
            <FilterOptions>
              <input
                type="radio"
                id="low"
                name="priority"
                value="Low"
                onClick={priorityHandler}
              />
              <label htmlFor="low">Low</label>
              <input
                type="radio"
                id="high"
                name="priority"
                value="High"
                onClick={priorityHandler}
              />
              <label htmlFor="high">High</label>
              <input
                type="radio"
                id="medium"
                name="priority"
                value="Medium"
                onClick={priorityHandler}
              />
              <label htmlFor="medium">Medium</label>
            </FilterOptions>
            <FilterHead>
              <h3>Filter by Date</h3>
            </FilterHead>
            <FilterOptions>
              <input type="radio" id="old" name="date" value="old" onClick={dateHandler} />
              <label htmlFor="old">Oldest First</label>
              <input type="radio" id="new" name="date" value="new" onClick={dateHandler} />
              <label htmlFor="new">Newest First</label>
            </FilterOptions>
            <ClearButton onClick={() => dispatch(clearFilters())}>
              Clear All
            </ClearButton>
          </FilterMenu>
        )}
        {isMenuOpen.logout && (
          <DropDownMenu
            onClick={() => {
              dispatch(logout());
              setOpen(false);
            }}
          >
            Log Out
          </DropDownMenu>
        )}
      </Header>
    </>
  ) : null;
};
