import React from "react";

interface FormatCurrencyProps {
  value: number;
  currency: string;
}

const FormatCurrency: React.FC<FormatCurrencyProps> = ({ value, currency }) => {
  return <>{value.toLocaleString("pt-br", { style: "currency", currency })}</>;
};

export default FormatCurrency;
