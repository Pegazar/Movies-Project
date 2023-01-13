import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { removeToList } from "../../redux/actions/actions";
import "./Favorites.css";

function Favorites() {
  const { list } = useSelector((state) => state);

  const dispatch = useDispatch()

  const handleRemove = (item) => {
    dispatch(removeToList(item))
    console.log(item)
  }

 
  return (
    <div className="favorites">
      <input value="New list" className="favorites__name" />
      <ul className="favorites__list">
        {list?.map((item) => (
          <li className="list-item" key={item?.imdbID}>
            <Link to="#!">
              {item?.Title} ({item?.Year})
            </Link>
            <button onClick={() => handleRemove(item)}>X</button>
          </li>
        ))}
      </ul>
      <button type="button" className="favorites__save">
        Save List
      </button>
    </div>
  );
}

export default Favorites;
