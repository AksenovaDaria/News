import "./menu.scss";
import { Link } from "react-router-dom";

const Menu = ({ onClick }) => {
  const menuItems = [
    "Business",
    "Entertainment",
    "General",
    "Health",
    "Science",
    "Sports",
    "Technology",
  ];

  const menu = menuItems.map((item) => {
    return (
      <div key={item} className="menu">
        <Link
          key={`${item.toLocaleLowerCase}`}
          className="menu-category"
          data-id={item}
          to={`/category/${item.toLocaleLowerCase()}`}
          onClick={() => {
            onClick(item);
          }}
        >
          {item}
        </Link>
      </div>
    );
  });

  return <div className="menu">{menu}</div>;
};

export default Menu;
