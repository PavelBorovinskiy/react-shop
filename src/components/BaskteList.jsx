import React from "react";
import BasketItem from "./BasketItem";

const BaskteList = (props) => {
  const {
    order = [],
    handleBasket = Function.prototype,
    removeFromBasket = Function.prototype,
    incQuantity = Function.prototype,
    decQuantity = Function.prototype,
    deleteFromBasketAll = Function.prototype,
  } = props;

  const totalPrice = order.reduce((sum, el) => {
    return sum + el.price * el.quantity;
  }, 0);
  return (
    <ul className="collection basket-list">
      <span className="secondary-content" onClick={handleBasket}>
        <i className="material-icons basket-close">close</i>
      </span>
      <li className="collection-item active">Корзина</li>
      {order.length ? (
        order.map((item) => (
          <BasketItem
            key={item.id}
            {...item}
            removeFromBasket={removeFromBasket}
            incQuantity={incQuantity}
            decQuantity={decQuantity}
          />
        ))
      ) : (
        <li className="collection-item">Корзина пуста</li>
      )}
      <li className="collection-item active">Общая стоимость: {totalPrice} <span className="secondary-content basket-delete-all" onClick={
      deleteFromBasketAll}>удалить все товары</span></li>
      <button className="secondary-content  btn btn-design">Оформить</button>
    </ul>
  );
};

export default BaskteList;
