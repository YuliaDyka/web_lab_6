import React, { useState, useEffect } from "react";
import { Order } from "../orders/order";
import{ getAllOrders } from "../../api/orders-api"
// import { Orders } from "../orders/orders";

export const OrdersContext = React.createContext();

// eslint-disable-next-line import/no-anonymous-default-export
export default ({ children }) => {
  let Orders = [];
  const [ordersData, setOrdersData] = useState(Orders);
  useEffect(() => {
    getAllOrders()
      .then((result) => {
        setOrdersData(
          result.map(
            (order) =>
              new Order(
                order.id,
                order.full_name,
                order.destination,
                order.car_brand,
                order.price
              )
          )
        );  
      })
      .catch((error) => {
        console.log("no server response ", error);
        setOrdersData(-1);
      });
  },
 []);
  return (
    <OrdersContext.Provider value={[ordersData, setOrdersData]}>
      {children}
    </OrdersContext.Provider>
  );
};
