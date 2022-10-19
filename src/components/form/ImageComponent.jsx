import React from "react";

import { Icons } from "../../common";

export default function ImageComponent({ index, deleteImageList }) {
  const { AI, BS } = Icons;
  return (
    <div>
      <div className="form-inputfields">
        <label>Image</label>
        <div className="form-image-getter">
          <div>
            <span>
              <BS.BsImageFill size={25} />
            </span>
            <span>Upload your image here</span>
          </div>
          <span>
            <AI.AiFillMinusCircle
              className="minusIcon"
              size={25}
              onClick={() => {
                deleteImageList(index);
              }}
            />
          </span>
        </div>
      </div>
    </div>
  );
}
