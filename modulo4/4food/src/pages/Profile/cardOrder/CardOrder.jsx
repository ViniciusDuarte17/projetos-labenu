import * as React from "react";
import { ContainerHorder, HorderList } from "./styled";

export function CardOrder({ history }) {
  
  const listOrders = history?.orders.map((item) => {
       const newData = item.createdAt
       const data = new Date(newData)
      const novaData = data.toLocaleString()
    return (
      <HorderList key={item.createdAt}>
        <h4>{item.restaurantName}</h4>
        <span> {novaData}</span>
        <p>SUBTOTAL: {item.totalPrice}</p>
      </HorderList>
    );
  });

  return <ContainerHorder>{listOrders && listOrders}</ContainerHorder>;
}
