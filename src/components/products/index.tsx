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
import ProductFilter from "./productFilter";
import { setProducts } from "../../store/products/product-slice";

const Products: FC = () => {
  const isLoading = useAppSelector(isLoadingSelector);
  const products = useAppSelector(productsSelector);
  const dispatch = useAppDispatch();

  useEffect(() => {
    fetchProducts();
  }, [dispatch]);

  const fetchProducts = async () => {
    try {
      const productList = await dispatch(getProducts());

      dispatch(setProducts(productList.payload));
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  return (
    <section>
      <div className={`container ${styles.product}`}>
        <aside className={`${styles.filter}`}>
          {isLoading ? null : <ProductFilter />}
        </aside>
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
