import React, { FC, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./productItem.module.scss";
import Card from "../../card";
import { shortenText } from "../../../helpers";
import Button from "../../button";
import { Product } from "../../../type";
import { useAppDispatch, useAppSelector } from "../../app/hook";
import { setProduct } from "../../../store/products/product-slice";
import {
  calculateTotalQuantity,
  updateCart,
} from "../../../store/cart/cart-slice";
import { UPDATE_CART_TYPES } from "../../../constants";
import { cartItemsSelector } from "../../../store/cart/cart-selectors";

type ProductItemProps = {
  product: Product;
};

const ProductItem: FC<ProductItemProps> = ({ product }) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const cartItems = useAppSelector(cartItemsSelector);

  const addToCart = () => {
    dispatch(updateCart({ type: UPDATE_CART_TYPES.ADD_TO_CART, product }));
    dispatch(calculateTotalQuantity());
  };

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
          onClick={addToCart}
        />
      </div>
    </Card>
  );
};

export default ProductItem;
