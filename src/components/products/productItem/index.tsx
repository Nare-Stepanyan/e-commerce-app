import React, { FC } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./productItem.module.scss";
import Card from "../../card";
import { shortenText } from "../../../helpers";
import Button from "../../button";
import { Product } from "../../../type";
import { useAppDispatch } from "../../app/hook";
import { setProduct } from "../../../store/products/product-slice";

type ProductItemProps = {
  product: Product;
};

const ProductItem: FC<ProductItemProps> = ({ product }) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleClick = () => {
    dispatch(setProduct(product));
    navigate(`/product-details/${product.id}`);
  };
  return (
    <Card cardClass={styles.list}>
      <div className={styles.img} onClick={handleClick}>
        <img src={product.imageUrl} alt={product.title} />
      </div>
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
