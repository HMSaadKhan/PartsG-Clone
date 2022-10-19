import React, { useState } from "react";

import "./form.css";
import { Icons } from "../../common";
import { ImageComponent, StyledCheckBox, StyledInput } from "../form";

const BottomForm = () => {
  const [checkBox, setCheckBox] = useState("");
  const [imageList, setImageList] = React.useState([]);
  const { BS } = Icons;

  const deleteImageList = (index) => {
    setImageList(imageList.filter((data, i) => index !== i));
  };

  return (
    <div className="form-main">
      <div className="form-heading">On Demand Order</div>
      <div className="form-caption">
        Ask for the product you are looking for
      </div>
      <div className="form-inputfield-main">
        <StyledInput name={"Name"} type="input" placeholder={"e.g. 9518-20"} />
        <StyledInput name={"Brand"} type="input" placeholder={"e.g. hammer"} />
        <StyledInput
          name={"Model/PartNumber"}
          type="input"
          placeholder={"Model"}
        />
        <StyledInput
          name={"Model Number"}
          type="input"
          placeholder={"e.g. 30L110"}
        />
        <StyledInput name={"Qty"} type="input" placeholder={"e.g. 3"} />
        <StyledInput
          name={"Description"}
          type="textarea"
          rows={2}
          placeholder={"e.g. short description"}
        />

        <div className="form-inputfield form-getimage">
          <label>Image</label>
          <div>
            <BS.BsImageFill
              size={25}
              onClick={() => {
                setImageList([...imageList, ImageComponent]);
              }}
            />
          </div>
        </div>
        {imageList.map((data, index) => (
          <ImageComponent
            key={index}
            index={index}
            deleteImageList={deleteImageList}
          />
        ))}
      </div>
      <div>
        <div className="form-heading2">Condition Preference</div>
        <div className="form-checkbox-main">
          <div>
            <StyledCheckBox
              name="New"
              checkBox={checkBox}
              setCheckBox={setCheckBox}
            />
            <StyledCheckBox
              name="Used"
              checkBox={checkBox}
              setCheckBox={setCheckBox}
            />
            <StyledCheckBox
              name="Recondition"
              checkBox={checkBox}
              setCheckBox={setCheckBox}
            />
          </div>
          <div>
            <button>submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default BottomForm;
