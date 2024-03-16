import React, { FC } from "react";
import { Link } from "react-router-dom";
import styles from "./productItem.module.scss";
import Card from "../../card";
import { shortenText } from "../../../helpers";
import Button from "../../button";
import { Product } from "../../../type";

type ProductItemProps = {
  product: Product;
};

const ProductItem: FC<ProductItemProps> = ({ product }) => {
  return (
    <Card cardClass={styles.list}>
      <Link to={`/product-details/${product.id}`}>
        <div className={styles.img}>
          <img src={product.imageUrl} alt={product.title} />
        </div>
      </Link>
      <div className={styles.content}>
        <div className={styles.details}>
          <p>{`$${product.price}`}</p>
          <h4>{shortenText(product.title, 40)}</h4>
        </div>

        <Button
          label="Add To Cart"
          className="--btn --btn-danger"
          onClick={() => {
            console.log("clicked");
          }}
        />
      </div>
    </Card>
  );
};

export default ProductItem;
