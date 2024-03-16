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
import { FaCogs } from "react-icons/fa";

const Products: FC = () => {
  const isLoading = useAppSelector(isLoadingSelector);
  const products = useAppSelector(productsSelector);
  const dispatch = useAppDispatch();
  const [showFilter, setShowFilter] = useState(false);

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  const toggleFilter = () => {
    setShowFilter(!showFilter);
  };

  return (
    <section>
      <div className={`container ${styles.product}`}>
        <aside
          className={
            showFilter ? `${styles.filter} ${styles.show}` : `${styles.filter}`
          }
        >
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
        <div className={styles.icon} onClick={toggleFilter}>
          <FaCogs size={20} color="orangered" />
          <p>
            <b>{showFilter ? "Hide Filter" : "Show Filter"}</b>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Products;
