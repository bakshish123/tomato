import React from "react";
import Card2 from "./Card2";

const CardList2 = () => {
  const arr = [
    {
      url: "https://b.zmtcdn.com/data/collections/4a7d1f124c42cb9f512473ea963c93dd_1699266658.png?output-format=webp",
      text1: "6 Dazzling Diwali Parties",
      text2: "6 Places"
    },
    {
      url: "https://b.zmtcdn.com/data/collections/5c77806df6a409480f954bf0a67173d4_1696839236.jpg?output-format=webp",
      text1: "38 Live Cricket Screenings",
      text2: "43 Places"
    },
    {
      url: "https://b.zmtcdn.com/data/collections/8868e7345d624a79d5900711eb5f8d00_1696923139.png?output-format=webp",
      text1: "13 Newly opened places",
      text2: "11 Places"
    },
    {
        url: "https://b.zmtcdn.com/data/collections/2deab8e9f06ff125e80f5cc09f11e4d7_1674569132.jpg?output-format=webp",
        text1: "10 Unique Dining experience",
        text2: "10 Places"
    }
  ];

  return (
    <>
      {arr.map((card, index) => (
        <Card2 key={index} {...card} />
      ))}
    </>
  );
};

export default CardList2;
