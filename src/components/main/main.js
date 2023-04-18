import "./main.scss";
import Menu from "../menu/menu";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { selectAllNews } from "../../redux/news/news-selectors";
import {
  loadNews,
  loadNewsWorld,
  loadNewsCategory,
  setCall,
  setPage,
  setAPI,
  setWord,
} from "../../redux/news/news-actions";
import {
  selectNewsInfo,
  getCall,
  getApi,
  getPage,
  getWord,
} from "../../redux/news/news-selectors";
import Item from "../item/item";
import { Buttons } from "../buttons/buttons";

export const Main = () => {
  const dispatch = useDispatch();

  const call = useSelector(getCall);
  const news = useSelector(selectAllNews);
  const API = useSelector(getApi);
  const page = useSelector(getPage);
  const wword = useSelector(getWord);

  const { status, error } = useSelector(selectNewsInfo);

  const handleClick = (item) => {
    dispatch(setPage(1));
    dispatch(setAPI("category"));
    dispatch(setCall(true));
    dispatch(setWord(item));
  };

  useEffect(() => {
    if (call) {
      if (API === "all") {
        dispatch(loadNews(page));
      } else if (API === "category") {
        dispatch(loadNewsCategory(wword, page));
      } else if (API === "word") {
        dispatch(loadNewsWorld(wword, page));
      }
    } else {
    }
  }, [call]);

  function mapArrNews() {
    const elements = news.map((item, key) => {
      const num = key;
      return (
        <Item
          key={num}
          id={num}
          name={item.title}
          date={item.publishedAt}
          img={
            item.urlToImage
              ? item.urlToImage
              : "https://oir.mobi/uploads/posts/2022-08/1661441076_1-oir-mobi-p-starie-gazeti-fon-krasivo-1.jpg"
          }
          text={item.description}
          content={item.content}
        />
      );
    });
    return elements;
  }

  return (
    <>
      <Menu onClick={handleClick} />
      <Buttons />
      {error && <h2>Can't fetch data</h2>}
      {status === "loading" && <h2>Loading...</h2>}
      {status === "received" && <>{mapArrNews()}</>}
    </>
  );
};
