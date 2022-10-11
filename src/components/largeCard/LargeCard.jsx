import React from "react";
import { Card } from "reactstrap";
import "./largeCard.css";
import { BsCart3, BsArchive } from "react-icons/bs";
import { RiShoppingBag3Line } from "react-icons/ri";
const size = "25px";
const color = "#cc0011";
export default function LargeCard({ name, price, model, link, stock }) {
  console.log(stock);
  return (
    <div>
      <Card className="myLargeCard">
          {stock < 1 &&
        <div className="badgeMain">
             <div className="mybadge">Out of Stock</div>
        </div>
             }
        <div className="LargeCardImage">
          <img alt="Sample" src={link} />
          <div>
            <div>
              <p className="productName">{name}</p>
              <p className="modelNumber">{"Model#:" + model}</p>
              <p className="price">{"PKR " + price}</p>
            </div>

            <div className={`LargeCardButtons`}>
              <div className={`${stock < 1 ? "disabled" : ""}`}>
                <BsCart3 color={color} size={size} />
                <p>Add to cart</p>
              </div>
              <div className={`${stock < 1 ? "disabled" : ""}`}>
                <RiShoppingBag3Line color={color} size={size} />
                <p>Buy Now</p>
              </div>

              <div>
                <BsArchive color={color} size={size} />
                <p>Req Quote</p>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}
