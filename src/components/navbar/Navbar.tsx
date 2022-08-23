import * as React from "react"
import { useState, useEffect,ChangeEvent } from "react";
import { useLocation } from "react-router-dom";
import { Logo, Search, LoginIcon, FilterIcon } from "../../assets/icons";
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
import { logout } from "../../Redux/Reducers/authSlice";
import {
  setByPriority,
  setByTags,
  setByDate,
  clearFilters,
  setBySearch,
} from "../../Redux/Reducers/notesSlice";
import { debounce } from "../../functions";

// import { useDispatch, useSelector } from "react-redux";
import { useAppDispatch,useAppSelector } from "../../Redux/hooks";

export const Navbar = ()=> {
  const [isMenuOpen, setOpen] = useState({ logout: false, filter: false });
  const dispatch = useAppDispatch();
  const tags = ["Study", "Health", "Office"];
  const { byPriority, byTags, byDate } = useAppSelector((store) => store.notes);
  const { pathname } = useLocation();
  const [searchText, setSearchText] = useState("");

  const priorityHandler = (e:ChangeEvent<HTMLInputElement>) => {
    dispatch(setByPriority(e.target.value));
  };
  const dateHandler = (e:ChangeEvent<HTMLInputElement>) => {
    dispatch(setByDate(e.target.value));
  };

  const changeHandler =() => {
    dispatch(setBySearch(searchText.toLowerCase()))
  }

  const getOptimisedVersion = debounce(changeHandler,1000)
 
  useEffect(()=>{
   getOptimisedVersion()
  },[searchText])

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
          <SearchInput
            placeholder="Search..."
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />

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
              {tags.map((tag, i) => {
                return (
                  <>
                    <input
                      type="checkbox"
                      key={i}
                      id={tag}
                      checked={byTags.some((t) => t === tag)}
                      value={tag}
                      onChange={(e) => dispatch(setByTags(e.target.value))}
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
                onChange={priorityHandler}
                checked={byPriority === "Low"}
              />
              <label htmlFor="low">Low</label>
              <input
                type="radio"
                id="high"
                name="priority"
                value="High"
                onChange={priorityHandler}
                checked={byPriority === "High"}
              />
              <label htmlFor="high">High</label>
              <input
                type="radio"
                id="medium"
                name="priority"
                value="Medium"
                onChange={priorityHandler}
                checked={byPriority === "Medium"}
              />
              <label htmlFor="medium">Medium</label>
            </FilterOptions>
            <FilterHead>
              <h3>Filter by Date</h3>
            </FilterHead>
            <FilterOptions>
              <input
                type="radio"
                id="old"
                name="date"
                value="old"
                onChange={dateHandler}
                checked={byDate === "old"}
              />
              <label htmlFor="old">Oldest First</label>
              <input
                type="radio"
                id="new"
                name="date"
                value="new"
                onChange={dateHandler}
                checked={byDate === "new"}
              />
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
              setOpen(prev => ({...prev,logout:!prev.logout}));
            }}
          >
            Log Out
          </DropDownMenu>
        )}
      </Header>
    </>
  ) : null;
};
