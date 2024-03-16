import React, { FC, useEffect, useState } from "react";
import styles from "./product.module.scss";
import spinnerImg from "../../assets/spinner.jpg";
import { useAppDispatch, useAppSelector } from "../app/hook";
import {
  isLoadingSelector,
  productsSelector,
} from "../../store/products/product-selector";
import ProductList from "./productList";
import { getProducts } from "../../store/products/actions";

const Products: FC = () => {
  const isLoading = useAppSelector(isLoadingSelector);
  const products = useAppSelector(productsSelector);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  return (
    <section>
      <div className={`container ${styles.product}`}>
        <div className={styles.content}>
          {isLoading ? (
            <img
              src={spinnerImg}
              alt="Loading.."
              style={{ width: "50px" }}
              className="--center-all"
            />
          ) : (
            <ProductList products={products} />
          )}
        </div>
      </div>
    </section>
  );
};

export default Products;
