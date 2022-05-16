import React from "react";
import {AiOutlineGithub} from 'react-icons/ai'

function ProductCard({data}) {
  return (
    <a className="product-card" href={data.link}>
      <div className="card-top">
        <img src={data.img} alt="" />
      </div>
      <div className="card-desc">
          <h3>{data.name}</h3>
        <p>
          {data.desc}
        </p>
      </div>
    </a>
  );
}

export default ProductCard;
