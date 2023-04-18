import { useSelector } from "react-redux";
import { selectAllNews } from "../../redux/news/news-selectors";
import { getID } from "../../redux/news/news-selectors";
import { Link } from "react-router-dom";
import "./details.scss";
import { useNavigate } from "react-router-dom";

export const Details = () => {
  const nav = useNavigate();

  const news = useSelector(selectAllNews);
  const details = useSelector(getID);

  const day = (day) => new Date(day).getDate();
  const month = (month) => new Date(month).getMonth();
  const year = (year) => new Date(year).getFullYear();

  const elements = news.map((item, key) => {
    if (key == details) {
      return (
        <div key={details}>
          <button className="home">
            <Link className="link" onClick={() => nav(-1)}>
              Home Page
            </Link>
          </button>
          <div className="title">{item.title}</div>
          <div className="date">
            {String(day(item.publishedAt)).padStart(2, "0")}.
            {String(month(item.publishedAt) + 1).padStart(2, "0")}.
            {year(item.publishedAt)}
          </div>
          <img
            src={item.urlToImage}
            onError={({ currentTarget }) => {
              currentTarget.onerror = null;
              currentTarget.src =
                "https://oir.mobi/uploads/posts/2022-08/1661441076_1-oir-mobi-p-starie-gazeti-fon-krasivo-1.jpg";
            }}
          ></img>
          <div className="text">{item.content}</div>
        </div>
      );
    }
  });

  return <div key={details}>{elements}</div>;
};
