import React, { useState } from "react";

import { Icons } from "../../../common";
import "./categories.css";
import { Categories as AllCategories } from "../../../common";
import SmallCard from "../../../components/smallcard/SmallCard";
import CreateCategory from "../../../components/modals/createcategory/CreateCategory";
const { IO } = Icons;
const Categories = () => {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);
  return (
    <div className="seller-admin-container">
      <CreateCategory modal={modal} toggle={toggle} />
      <div className="add-icon-button" onClick={toggle}>
        <IO.IoIosAddCircle size={50} />
      </div>
      <div className="categories-container">
        {AllCategories.map((Category) => {
          return (
            <div className="maindiv" key={Category.id}>
              <SmallCard Category={Category} Action />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Categories;
