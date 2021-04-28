const toBrazilianReal = (amount) => {
  return amount.toFixed(2).replace(".", ",");
};

export default toBrazilianReal;
