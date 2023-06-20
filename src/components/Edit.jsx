import React from "react";
import TheData from "./Data";

function Edit() {
  let itemid = +window.location.href.slice(29, window.location.href.length);
  console.log(window.location.href);
  const dataOfEdit = TheData.map((data) => {
    return data.id === itemid ? (
      <div className="editPage">
        <div className="contentOfEditPage">
          <h1>Name:</h1>
          <input type="text" placeholder={TheData[data.id].title} />
          <h1>Description:</h1>
          <input type="text" placeholder={TheData[data.id].description} />
          <div className="priceAndRate">
            <h2>Price:</h2>
            <input type="number" placeholder={TheData[data.id].price} />
            <h2>Rate:</h2>
            <input type="number" placeholder={TheData[data.id].rating.rate} />
          </div>
          <input className="submit" type="submit" />
        </div>
      </div>
    ) : null;
  });

  return { dataOfEdit };
}

export default Edit;
