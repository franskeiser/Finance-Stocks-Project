import React from "react";
import cute from "./cute.jpg";

type Props = {
  companyName?: string;
  ticker: string;
  price: number;
};

const Card: React.FC<Props> = ({ companyName, ticker, price }: Props) => {
  return (
    <div className="card">
      <img
        src={cute}
        alt="A cute dog sitting on the grass, looking playfully at the camera."
      />

      <div className="details">
        <h2>
          {companyName} ({ticker})
        </h2>
        <p>{price}</p>
      </div>

      <p className="info">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, illo.
      </p>
    </div>
  );
};

export default Card;
