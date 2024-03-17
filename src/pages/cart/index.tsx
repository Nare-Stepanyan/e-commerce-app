import React, { useEffect } from "react";
import styles from "./cart.module.scss";
import { FaTrashAlt } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import Button from "../../components/button";
import { useAppDispatch, useAppSelector } from "../../components/app/hook";
import {
  cartItemsSelector,
  cartTotalAmountSelector,
  cartTotalQuantitySelector,
} from "../../store/cart/cart-selectors";
import Card from "../../components/card";
import {
  calculateSubtotal,
  calculateTotalQuantity,
  saveUrl,
  updateCart,
} from "../../store/cart/cart-slice";
import { UPDATE_CART_TYPES } from "../../constants";
import { Product } from "../../type";

const Cart = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const cartItems = useAppSelector(cartItemsSelector);
  const cartTotalAmount = useAppSelector(cartTotalAmountSelector);
  const cartTotalQuantity = useAppSelector(cartTotalQuantitySelector);

  const increaseCart = (product: Product) => {
    dispatch(updateCart({ type: UPDATE_CART_TYPES.ADD_TO_CART, product }));
  };
  const decreaseCart = (product: Product) => {
    dispatch(updateCart({ type: UPDATE_CART_TYPES.DECREASE_CART, product }));
  };
  const removeFromCart = (product: Product) => {
    dispatch(updateCart({ type: UPDATE_CART_TYPES.REMOVE_FROM_CART, product }));
  };

  const clearCart = () => {
    dispatch(updateCart({ type: UPDATE_CART_TYPES.CLEAR_CART }));
  };

  useEffect(() => {
    dispatch(calculateSubtotal());
    dispatch(calculateTotalQuantity());
    dispatch(saveUrl(""));
  }, [cartItems, dispatch]);

  const url = window.location.href;

  const checkout = () => {
    console.log("checkout");
  };

  return (
    <section>
      <div className={`container ${styles.table}`}>
        <h2>Shopping Cart</h2>
        {cartItems.length === 0 ? (
          <>
            <p>Your cart is currently empty.</p>
            <br />
            <div>
              <Link to="/#products">&larr; Continue shopping</Link>
            </div>
          </>
        ) : (
          <>
            <table>
              <thead>
                <tr>
                  <th>N</th>
                  <th>Product</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Total</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map((cart, index) => {
                  const { id, title, price, imageUrl, cartQuantity } = cart;
                  return (
                    <tr key={id}>
                      <td>{index + 1}</td>
                      <td>
                        <p>
                          <b>{title}</b>
                        </p>
                        <img
                          src={imageUrl}
                          alt={title}
                          style={{ width: "100px" }}
                        />
                      </td>
                      <td>{price}</td>
                      <td>
                        <div className={styles.count}>
                          <Button
                            label="-"
                            className="--btn"
                            onClick={() => decreaseCart(cart)}
                          />

                          <p>
                            <b>{cartQuantity}</b>
                          </p>
                          <Button
                            label="+"
                            className="--btn"
                            onClick={() => increaseCart(cart)}
                          />
                        </div>
                      </td>
                      <td>{(price * (cartQuantity as number)).toFixed(2)}</td>
                      <td className={styles.icons}>
                        <FaTrashAlt
                          size={19}
                          color="red"
                          onClick={() => removeFromCart(cart)}
                        />
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
            <div className={styles.summary}>
              <Button
                label="Clear Cart"
                className="--btn --btn-danger"
                onClick={clearCart}
              />

              <div className={styles.checkout}>
                <div>
                  <Link to="/#products">&larr; Continue shopping</Link>
                </div>
                <br />
                <Card cardClass={styles.card}>
                  <p>
                    <b> {`Cart item(s): ${cartTotalQuantity}`}</b>
                  </p>
                  <div className={styles.text}>
                    <h4>Subtotal:</h4>
                    <h3>{`$${cartTotalAmount.toFixed(2)}`}</h3>
                  </div>
                  <Button
                    label="Checkout"
                    className="--btn --btn-primary --btn-block"
                    onClick={checkout}
                  />
                </Card>
              </div>
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default Cart;
