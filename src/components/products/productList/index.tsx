import React, { FC, useEffect, useState } from "react";
import styles from "./productList.module.scss";
import ProductItem from "../productItem";
import { Product } from "../../../type";
import Search from "../../search";
import { useAppDispatch, useAppSelector } from "../../app/hook";
import {
  setFilterBySearch,
  setFilterBySort,
} from "../../../store/filtered-products/filtered-products-slice";
import { BsFillGridFill } from "react-icons/bs";
import { FaListAlt } from "react-icons/fa";
import { filteredProductsSelector } from "../../../store/filtered-products/filtered-products-selector";

type ProductListProps = {
  products: Product[] | null;
};

const ProductList: FC<ProductListProps> = ({ products }) => {
  const [grid, setGrid] = useState(true);
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("latest");
  const dispatch = useAppDispatch();
  const filteredProducts = useAppSelector(filteredProductsSelector);

  useEffect(() => {
    dispatch(setFilterBySort({ products, sort }));
  }, [dispatch, products, sort]);

  useEffect(() => {
    dispatch(setFilterBySearch({ products, search }));
  }, [dispatch, products, search]);

  return (
    <div className={styles["product-list"]} id="product">
      <div className={styles.top}>
        <div className={styles.icons}>
          <BsFillGridFill
            size={22}
            color="orangered"
            onClick={() => setGrid(true)}
          />

          <FaListAlt size={24} color="#0066d4" onClick={() => setGrid(false)} />

          <p>
            <b>{filteredProducts.length}</b> Products found.
          </p>
        </div>
        <div>
          <Search value={search} onChange={(e) => setSearch(e.target.value)} />
        </div>
        <div className={styles.sort}>
          <label>Sort by:</label>
          <select value={sort} onChange={(e) => setSort(e.target.value)}>
            <option value="latest">Latest</option>
            <option value="lowest-price">Lowest Price</option>
            <option value="highest-price">Highest Price</option>
            <option value="a-z">A - Z</option>
            <option value="z-a">Z - A</option>
          </select>
        </div>
      </div>
      <div className={grid ? `${styles.grid}` : `${styles.list}`}>
        {products?.length === 0 ? (
          <p>No product found.</p>
        ) : (
          <>
            {filteredProducts.length > 0
              ? filteredProducts.map((product) => (
                  <div key={product.id} className={styles.list}>
                    <ProductItem product={product} />
                  </div>
                ))
              : products?.map((product) => (
                  <div key={product.id} className={styles.list}>
                    <ProductItem product={product} />
                  </div>
                ))}
          </>
        )}
      </div>
    </div>
  );
};

export default ProductList;
