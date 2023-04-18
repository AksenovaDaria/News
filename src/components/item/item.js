import "./item.scss";
import { Link } from "react-router-dom";
import { setID } from "../../redux/news/news-actions";
import { useDispatch } from "react-redux";

const Item = (props) => {
  const dispatch = useDispatch();

  const onClick = (e) => {
    let id = e.target.getAttribute("data");
    dispatch(setID(id));
  };

  let day = new Date(props.date).getDate();
  let month = new Date(props.date).getMonth();
  let year = new Date(props.date).getFullYear();

  return (
    <>
      <div className="firsttitle" onClick={onClick}>
        <Link
          className="title"
          to={`${props.id}`}
          data={props.id}
          key={props.id}
        >
          {props.name}
        </Link>
      </div>
      <div className="date">
        {String(day).padStart(2, "0")}.{String(month + 1).padStart(2, "0")}.
        {year}
      </div>
      <div className="forflex">
        <img
          src={props.img}
          onError={({ currentTarget }) => {
            currentTarget.onerror = null;
            currentTarget.src =
              "https://oir.mobi/uploads/posts/2022-08/1661441076_1-oir-mobi-p-starie-gazeti-fon-krasivo-1.jpg";
          }}
        ></img>
        <div className="text">{props.text}</div>
      </div>
      <hr></hr>
    </>
  );
};

export default Item;
