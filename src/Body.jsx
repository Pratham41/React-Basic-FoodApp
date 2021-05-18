import React, { useEffect, useState } from "react";
import bootstrap from "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import "./Body.css";

function Body() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios
      .get("https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood")
      .then((res) => {
        console.log(res.data);
        setItems(res.data.meals);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const itemlist = items.map((obj) => {
    return (
      <div className="col-md-4">
        <p>{obj.strMeal}</p>
        <img src={obj.strMealThumb} className="img-fluid" />
        <p> {obj.idMeal} </p>
      </div>
    );
  });

  return (
    <div className="container">
      <div className="row">{itemlist}</div>
    </div>
  );
}

export default Body;
