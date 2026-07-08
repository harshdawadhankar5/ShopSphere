function calculateTotal(cart) {
  return cart.reduce(
    (total, product) =>
      total + product.price * product.quantity,
    0
  );
}

export default calculateTotal;