import "./buttons.scss";
import { useDispatch, useSelector } from "react-redux";
import { getPage } from "../../redux/news/news-selectors";
import { setPage, setCall } from "../../redux/news/news-actions";

export const Buttons = () => {
  const dispatch = useDispatch();
  const page = useSelector(getPage);

  const showButton = () => {
    if (page > 1) {
      return true;
    } else {
      return false;
    }
  };

  const loadNextPage = () => {
    const nextPage = page + 1;
    dispatch(setPage(nextPage));
    dispatch(setCall(true));
  };

  const loadPastPage = () => {
    const nextPage = page - 1;
    dispatch(setPage(nextPage));
    dispatch(setCall(true));
  };

  return (
    <div className="but">
      <button
        style={{
          display: showButton() === true ? "block" : "none",
        }}
        onClick={loadPastPage}
        className="previous"
      >
        Previous
      </button>
      <button onClick={loadNextPage} className="next">
        Next
      </button>
    </div>
  );
};
