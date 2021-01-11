import React from "react";
import "./preview-colection.style.scss";
import "../collection-item/colection-item.component"
import CollectionItem from "../collection-item/colection-item.component.js";

const ColectionPreview = ({ title, items }) => {
  return (
    <div className="collection-preview">
      <h1 className="title">{title.toUpperCase()}</h1>
      <div className="preview">
        {items.filter((item, idx)=> idx < 4).map(({id, ...itemProps}) => (
          <CollectionItem key={id} {...itemProps} />
        ))}
      </div>
    </div>
  );
};

export default ColectionPreview;
