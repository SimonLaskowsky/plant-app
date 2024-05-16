import React, { useState } from "react";

const Collection = ({ children }) => {
  const [collection, setCollection] = useState([]);

  const addToCollection = (plant) => {
    setCollection((prevCollection) => [...prevCollection, plant]);
    console.log("Dodano do kolekcji:", plant);
  };

  return (
    <div>
      <div>{children(collection, addToCollection)}</div>
    </div>
  );
};

export default Collection;
