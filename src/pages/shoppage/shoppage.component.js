import React from "react";
import SHOP_DATA from "./shop.data";
import "./shoppage.style.scss";
import ColectionPreview from "../../components/ShopPageComponent/preview-colection/preview-colection.component";

class ShopPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collections: SHOP_DATA,
    };
  }
  render() {
    const { collections } = this.state;
    return (
      <div className="shop-page">
        {collections.map(({id, ...otherCollectionProps}) => (
          <ColectionPreview key={id} {...otherCollectionProps} />
        ))}
      </div>
    );
  }
}

export default ShopPage;
