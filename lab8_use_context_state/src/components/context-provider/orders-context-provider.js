import React, { useState } from "react";
import { Orders } from "../orders/orders";

export const OrdersContext = React.createContext();

// eslint-disable-next-line import/no-anonymous-default-export
export default ({ children }) => {
  const [ordersData, setOrdersData] = useState(Orders);
  return (
    <OrdersContext.Provider value={[ordersData, setOrdersData]}>
      {children}
    </OrdersContext.Provider>
  );
};
