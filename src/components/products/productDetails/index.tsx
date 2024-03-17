import React, { FC, useEffect, useState } from "react";
import styles from "./productDetails.module.scss";
import spinnerImg from "../../../assets/spinner.jpg";
import { useAppDispatch, useAppSelector } from "../../app/hook";
import { productsSelector } from "../../../store/products/product-selector";
import Button from "../../button";
import { useParams } from "react-router-dom";
import { Product } from "../../../type";
import {
  calculateTotalQuantity,
  updateCart,
} from "../../../store/cart/cart-slice";
import { UPDATE_CART_TYPES } from "../../../constants";

const ProductDetails: FC = () => {
  const { id } = useParams();
  const products = useAppSelector(productsSelector);
  const [product, setProduct] = useState<Product>();
  const dispatch = useAppDispatch();

  useEffect(() => {
    const productById = getProduct();
    setProduct(productById);
  }, [products]);

  const addToCart = () => {
    dispatch(updateCart({ type: UPDATE_CART_TYPES.ADD_TO_CART, product }));
    dispatch(calculateTotalQuantity());
  };

  const getProduct = () => {
    return products.find((product) => id === product.id);
  };
  return (
    <section>
      <div className={`container ${styles.product}`}>
        <h2>Product Details</h2>
        {product === null ? (
          <img src={spinnerImg} alt="Loading" style={{ width: "50px" }} />
        ) : (
          <>
            <div className={styles.details}>
              <div className={styles.img}>
                <img src={product?.imageUrl} alt={product?.title} />
              </div>
              <div className={styles.content}>
                <h3>{product?.title}</h3>
                <p className={styles.price}>{`$${product?.price}`}</p>
                <p>{product?.description}</p>
                <div className={styles.count}>{product?.count}</div>
                <Button
                  label="ADD TO CART"
                  className="--btn --btn-danger"
                  onClick={addToCart}
                />
              </div>
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default ProductDetails;
