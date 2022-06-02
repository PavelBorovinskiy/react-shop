import React from "react";

const Cart = (props) => {
  const { quantity = 0 , handleBasket=Function.prototype} = props;
  return (
    <div className="cart" onClick={()=>handleBasket()}>
      {quantity ? <span className="cart-quantity">{quantity}</span> : null}
      <i className="material-icons size-icon">shopping_basket</i>
    </div>
  );
};

export default Cart;
