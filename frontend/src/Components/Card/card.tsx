import React from "react";
import cute from "./cute.jpg";

type Props = {};

const card = (props: Props) => {
  return (
    <div className="card">
      <img
        src={cute}
        alt="A cute dog sitting on the grass, looking playfully at the camera."
      />

      <div className="details">
        <h2>Cute Dog</h2>
        <p>This is a very cute dog.</p>
      </div>

      <p className="info">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, illo.
      </p>
    </div>
  );
};

export default card;
