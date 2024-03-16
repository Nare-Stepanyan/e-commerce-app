import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hook";
import {
  maxPriceSelector,
  minPriceSelector,
  productsSelector,
} from "../../../store/products/product-selector";
import Button from "../../button";
import styles from "./productFilter.module.scss";
import { setFilterByPrice } from "../../../store/filtered-products/filtered-products-slice";
import { getPriceRange } from "../../../store/products/product-slice";

const ProductFilter = () => {
  const [price, setPrice] = useState(3000);
  const products = useAppSelector(productsSelector);
  const minPrice = useAppSelector(minPriceSelector);
  const maxPrice = useAppSelector(maxPriceSelector);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setFilterByPrice({ products, price }));
    dispatch(getPriceRange({ products }));
  }, [dispatch, products, price]);

  const clearFilters = () => {
    setPrice(maxPrice as number);
  };

  return (
    <div className={styles.filter}>
      <div className={styles.brand}>
        <h4>Price</h4>
        <p>{`$${price}`}</p>
        <div className={styles.price}>
          <input
            type="range"
            value={price}
            onChange={(e) => setPrice(+e.target.value)}
            min={minPrice as number}
            max={maxPrice as number}
          />
        </div>
        <br />
        <Button
          label="Clear Filter"
          className="--btn --btn-danger"
          onClick={clearFilters}
        />
      </div>
    </div>
  );
};

export default ProductFilter;
