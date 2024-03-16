import React, { FC } from "react";
import styles from "./productList.module.scss";
import ProductItem from "../productItem";
import { Product } from "../../../type";

type ProductListProps = {
  products: Product[] | null;
};

const ProductList: FC<ProductListProps> = ({ products }) => {
  return (
    <div className={styles["product-list"]} id="product">
      <div className={styles.list}>
        {products?.length === 0 ? (
          <p>No product found.</p>
        ) : (
          <>
            {products?.map((product) => {
              return (
                <div key={product.id} className={styles.list}>
                  <ProductItem product={product} />
                </div>
              );
            })}
          </>
        )}
      </div>
    </div>
  );
};

export default ProductList;
