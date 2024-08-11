import React, { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({ data, showItems, setShowIndex }) => {
  function handleAccordian() {
    setShowIndex();
  }
  return (
    <>
      <section className="Category-section">
        <div className="accordian-header" onClick={handleAccordian}>
          <h3>
            {data.title} ({data.itemCards.length}){" "}
          </h3>
          {showItems ? (
            <div className="arrow-img">
              <img
                src="https://cdn-icons-png.flaticon.com/128/130/130906.png"
                width={20}
              />
            </div>
          ) : (
            <div className="arrow-img">
              <img
                src="https://cdn-icons-png.flaticon.com/128/2985/2985150.png"
                width={30}
              />
            </div>
          )}
        </div>
        <div className="acordian-content">
          {showItems && <ItemList items={data.itemCards} />}
        </div>
      </section>
    </>
  );
};

export default RestaurantCategory;
