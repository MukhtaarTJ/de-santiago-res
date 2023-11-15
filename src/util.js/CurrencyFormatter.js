import React from "react";

export const CurrencyFormatter = ({ amount }) => {
  // Format the amount as currency (USD in this example)
  const formattedAmount = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(amount);

  return <span>{formattedAmount}</span>;
};
