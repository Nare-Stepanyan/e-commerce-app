import React, { useEffect, useState } from "react";
import styles from "./orderHistory.module.scss";
import { useAppDispatch, useAppSelector } from "../../components/app/hook";
import { userSelector } from "../../store/users/user-selector";
import Loader from "../../components/loader";
import { setOrders } from "../../store/orders/order-slice";
import {
  isLoadingSelector,
  orderHistorySelector,
} from "../../store/orders/order-selector";
import { getOrders } from "../../store/orders/actions";
import { Order } from "../../type";

const OrderHistory = () => {
  const dispatch = useAppDispatch();
  const orderHistory = useAppSelector(orderHistorySelector);
  const user = useAppSelector(userSelector);
  const isLoading = useAppSelector(isLoadingSelector);
  const [filteredOrders, setFilteredOrders] = useState<Order[]>([]);

  useEffect(() => {
    fetchOrders();
  }, [filteredOrders]);

  const fetchOrders = async () => {
    try {
      const orderList = await dispatch(getOrders());
      dispatch(setOrders(orderList.payload));
      filterOrders();
    } catch (error) {
      console.error("Error fetching orders:", error);
    }
  };

  const filterOrders = () => {
    if (!user || !orderHistory) return;
    const filtered = orderHistory.filter((order) => order.userId === user.id);
    setFilteredOrders(filtered);
  };

  return (
    <section>
      <div className={`container ${styles.order}`}>
        <h2>Your Order History</h2>

        <>
          {isLoading && <Loader />}
          <div className={styles.table}>
            {filteredOrders.length === 0 ? (
              <p>No order found</p>
            ) : (
              <table>
                <thead>
                  <tr>
                    <th>N</th>
                    <th>Date</th>
                    <th>Order ID</th>
                    <th>Ordered Items</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredOrders.map((order, index) => {
                    const { id, date, items } = order;
                    return (
                      <tr key={id}>
                        <td>{index + 1}</td>
                        <td>{date.split("T")[0]}</td>
                        <td>{id}</td>

                        <td>
                          {items.map((item) => {
                            return <div key={item.id}>{item.title}</div>;
                          })}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            )}
          </div>
        </>
      </div>
    </section>
  );
};

export default OrderHistory;
