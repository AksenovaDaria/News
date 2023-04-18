import "./logo.scss";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {
  setPage,
  setCall,
  setAPI,
  setWord,
} from "../../redux/news/news-actions";

export const Logo = () => {
  const dispatch = useDispatch();

  const onClick = () => {
    dispatch(setAPI("all"));
    dispatch(setPage(1));
    dispatch(setWord(""));
    dispatch(setCall(true));
  };

  return (
    <Link className="logo" onClick={onClick} to="/">
      Current News
    </Link>
  );
};
