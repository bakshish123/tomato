import React from "react";
import Card3 from "../cards/Card3";

const CardList3 = () => {
  const arr = [
    {
      name: "Agra Restaurants >",
      sub:'221 places'
    },
    {
      name: "Delhi NCR Restaurants >",
      sub:'149 places'
    },
    {
      name: "Dehradun Restaurants >",
      sub:'171 places'
    },
    {
      name: "Jabalpur Restaurants >",
      sub:'302 places'
    },
    {
      name: "Ludhiana Restaurants >",
      sub:'281 places'
    },
    {
      name: "Patiala Restaurants >",
      sub:'250 places'
    },
    {
        name: "Patiala Restaurants >",
        sub:'250 places'
      },
      {
        name: "Patiala Restaurants >",
        sub:'250 places'
      },
      {
        name: "Patiala Restaurants >",
        sub:'250 places'
      }
  ];
  
  return (
    <div className="flex flex-row flex-wrap ml-[4rem] mt-12">
      {arr.map((card, index) => (
        <Card3 key={index} {...card} />
      ))}
    </div>
  );
};

export default CardList3;
