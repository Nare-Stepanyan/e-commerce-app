import React, { useState } from "react";
import styles from "./admin.module.scss";
import { Product } from "../../type";
import Button from "../../components/button";

const Admin = () => {
  const [product, setProduct] = useState<Product>({
    title: "",
    count: 0,
    description: "",
    imageUrl: "",
    price: 0,
  });

  const handleValues = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setProduct((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const addNewProduct = () => {
    console.log("add");
  };

  return (
    <div className={styles.container}>
      <h2>Add New Product</h2>
      <label>
        Title:
        <input
          type="text"
          name="title"
          required
          value={product.title}
          onChange={handleValues}
        />
      </label>
      <label>
        Description:
        <input
          type="text"
          name="description"
          required
          value={product.description}
          onChange={handleValues}
        />
      </label>
      <label>
        Count:
        <input
          type="number"
          name="count"
          placeholder="Count"
          required
          value={product.count}
          onChange={handleValues}
        />
      </label>
      <label>
        Price:
        <input
          type="number"
          name="price"
          placeholder="Price"
          required
          value={product.price}
          onChange={handleValues}
        />
      </label>
      <label>
        Image url:
        <input
          type="imageUrl"
          name="title"
          required
          value={product.imageUrl}
          onChange={handleValues}
        />
      </label>
      <Button label="Add" onClick={addNewProduct} />
    </div>
  );
};

export default Admin;
