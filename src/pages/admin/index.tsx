import React, { useState } from "react";
import styles from "./admin.module.scss";
import { Product } from "../../type";
import Button from "../../components/button";
import { useAppDispatch } from "../../components/app/hook";
import { createProduct } from "../../store/products/actions";
import { useNavigate } from "react-router-dom";

const Admin = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [error, setError] = useState("");
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
  const addNewProduct = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = await dispatch(createProduct(product));
    if (data) {
      setProduct({
        title: "",
        count: 0,
        description: "",
        imageUrl: "",
        price: 0,
      });
      navigate("/");
    } else {
      setError("Something went wrong");
    }
  };

  return (
    <div className={styles.container}>
      <h2>Add New Product</h2>
      <form onSubmit={addNewProduct}>
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
            name="imageUrl"
            required
            value={product.imageUrl}
            onChange={handleValues}
          />
        </label>
        <Button label="Add" />
        {error && error}
      </form>
    </div>
  );
};

export default Admin;
