import React from "react";

export default function ImageComponent({ data, setnext, setprev }) {
  return (
    <>
      <div>
        <div className="content">
          <div>
            <div className="FirstLine">
              {data.text1}
              <b>&nbsp;{data.text2}</b>
            </div>
            <div className="SecondLine">
              {data.text3}
              <br />
              {data.text4}
            </div>
          </div>
          <div>
            <button className="shopNow">Shop Now</button>
          </div>
          <div className="buttonBg">
            <button
              onClick={() => {
                setnext(1);
                setprev(0);
              }}
              className="SelectionButton"
            >
              1
            </button>
            <button
              onClick={() => {
                setnext(2);
                setprev(1);
              }}
              className="SelectionButton"
            >
              2
            </button>
            <button
              onClick={() => {
                setnext(3);
                setprev(2);
              }}
              className="SelectionButton"
            >
              3
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
