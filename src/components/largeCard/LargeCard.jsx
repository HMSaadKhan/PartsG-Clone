import React from "react";
import { Card } from "reactstrap";

import "./largeCard.css";
import { Icons } from "../../common";

const size = "25px";
const color = "#cc0011";

const LargeCard = ({ name, price, model, link, stock }) => {
  const { BS, RI } = Icons;
  return (
    <div>
      <Card className="myLargeCard">
        {stock < 1 && (
          <div className="badgeMain">
            <div className="mybadge">Out of Stock</div>
          </div>
        )}
        <div className="LargeCardImage">
          <div className="ImageDiv">
            <img alt="Sample" src={link} />
          </div>
          <div>
            <div>
              <p className="productName">{name}</p>
              <p className="modelNumber">{"Model#:" + model}</p>
              <p className="price">{"PKR " + price}</p>
            </div>

            <div className={`LargeCardButtons`}>
              <button disabled={stock < 1 ? true : false}>
                <BS.BsCart3 color={color} size={size} />
                <p>Add to cart</p>
              </button>
              <button disabled={stock < 1 ? true : false}>
                <RI.RiShoppingBag3Line color={color} size={size} />
                <p>Buy Now</p>
              </button>

              <button>
                <BS.BsArchive color={color} size={size} />
                <p>Req Quote</p>
              </button>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default LargeCard;
