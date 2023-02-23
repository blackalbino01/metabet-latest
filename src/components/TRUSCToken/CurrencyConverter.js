import React, { useState, useEffect } from "react";

const CurrencyConverter = () => {
  const [selectedCurrency, setSelectedCurrency] = useState("USD");
  const [amount, setAmount] = useState(1);
  const [exchangeRate, setExchangeRate] = useState({});

  useEffect(() => {
    fetch("https://api.exchangeratesapi.io/latest?base=EUR")
      .then((res) => res.json())
      .then((data) => {
        setExchangeRate(data.rates);
      });
  }, []);

  const handleCurrencyChange = (event) => {
    setSelectedCurrency(event.target.value);
  };

  const handleAmountChange = (event) => {
    setAmount(event.target.value);
  };

  return (
    <div>
      <h1>
        {amount} EUR is equivalent to{" "}
        {(amount * exchangeRate[selectedCurrency]).toFixed(2)}{" "}
        {selectedCurrency}
      </h1>
      <select value={selectedCurrency} onChange={handleCurrencyChange}>
        <option value="USD">USD</option>
        <option value="GBP">GBP</option>
        <option value="INR">INR</option>
      </select>
      <input type="text" value={amount} onChange={handleAmountChange} />
    </div>
  );
};

export default CurrencyConverter;
