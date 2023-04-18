import "./header.scss";
import Search from "../search/search";
import { useDispatch } from "react-redux";
import {
  setCall,
  setPage,
  setAPI,
  setWord,
} from "../../redux/news/news-actions";
import { useNavigate } from "react-router-dom";

import { Logo } from "../logo/logo";

export const Header = () => {
  const dispatch = useDispatch();
  const nav = useNavigate();

  const goInStore = (searchString) => {
    dispatch(setWord(searchString));
    dispatch(setPage(1));
    dispatch(setCall(true));
    dispatch(setAPI("word"));
    nav("/search");
  };

  return (
    <div className="header">
      <Logo />
      {/* <div className="logo">Current News</div> */}
      <Search search={goInStore}></Search>
    </div>
  );
};
