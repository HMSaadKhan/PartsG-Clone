import React from "react";
import { Card } from "reactstrap";

import "./largeCard.css";
import { Icons } from "../../common";
import { addToCart } from "../../redux/cart";
import { useDispatch } from "react-redux";

const size = "25px";
const color = "#cc0011";

const LargeCard = ({ data }) => {
  const { BS, RI } = Icons;
  const dispatch = useDispatch();
  return (
    <div>
      <Card className="myLargeCard">
        {data.stock < 1 && (
          <div className="badgeMain">
            <div className="mybadge">Out of Stock</div>
          </div>
        )}
        <div className="LargeCardImage">
          <div className="ImageDiv">
            <img alt="Sample" src={data.link} />
          </div>
          <div>
            <div>
              <p className="productName">{data.name}</p>
              <p className="modelNumber">{"Model#:" + data.model}</p>
              <p className="price">{"PKR " + data.price}</p>
            </div>
            <div className={`LargeCardButtons`}>
              <button
                disabled={data.stock < 1 ? true : false}
                onClick={() => {
                  dispatch(addToCart(data));
                }}
              >
                <BS.BsCart3 color={color} size={size} />
                <p>Add to cart</p>
              </button>
              <button disabled={data.stock < 1 ? true : false}>
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
