import React from "react";
import Card1 from "./Card1";

const CardList1 = () => {
  const cardData = [
    {
      url: "https://b.zmtcdn.com/webFrontend/e5b8785c257af2a7f354f1addaf37e4e1647364814.jpeg?output-format=webp&fit=around|402:360&crop=402:360;*,*",
      title: "Order Online",
      description: "Stay home and order to your doorstep"
    },
    {
      url: "https://b.zmtcdn.com/webFrontend/d026b357feb0d63c997549f6398da8cc1647364915.jpeg?output-format=webp&fit=around|402:360&crop=402:360;*,*",
      title: "Dining",
      description: "View the city's favourite dining venues"
    },
    {
      url: "https://b.zmtcdn.com/webFrontend/d9d80ef91cb552e3fdfadb3d4f4379761647365057.jpeg?output-format=webp&fit=around|402:360&crop=402:360;*,*",
      title: "Nightlife and Clubs",
      description: " Explore the city’s top nightlife outlets"
    }
  ];
  return (
    <>
    {cardData.map((card, index) => (
      <Card1 key={index} {...card} />
    ))}
  </>
  )
};

export default CardList1;
