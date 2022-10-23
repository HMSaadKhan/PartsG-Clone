import React from "react";
import { Card } from "reactstrap";

import "./largecardls.css";
import { addToCart } from "../../redux/cart";
import { useDispatch } from "react-redux";
import { StyledButton } from "../StyledButtons/StyledButton";

const LargeCardLandscape = ({ data }) => {
  const dispatch = useDispatch();
  return (
    <div>
      <Card className="largecard-ls-main">
        <div className="largecard-ls-content">
          <div>
            {data.stock < 1 && (
              <div className="largecard-ls-badge-main">
                <div className="largecard-ls-badge">Out of Stock</div>
              </div>
            )}
            <div className="largecard-ls-image">
              <img alt="Sample" src={data.link} />
            </div>
          </div>
          <div>
            <div>
              <p className="largecard-product-name">{data.name}</p>
              <p className="largecard-product-model-number">
                {"Model#:" + data.model}
              </p>
              <p className="largecard-product-price">{"PKR " + data.price}</p>
              <div className="largecard-product-buttons">
                <StyledButton
                  disabled={data.stock < 1 ? true : false}
                  onClick={() => {
                    dispatch(addToCart(data));
                  }}
                >
                  Add to cart
                </StyledButton>
                <StyledButton disabled={data.stock < 1 ? true : false}>
                  Buy Now
                </StyledButton>
                <StyledButton className="largecard-product-request-buttons">
                  Request for Quote
                </StyledButton>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default LargeCardLandscape;
