import React from "react";
import { API_KEY, API_URL } from "../config";
import { useState, useEffect } from "react";
import Preloading from "./Preloading";
import GoodsList from "./GoodsList";
import Cart from "./Cart";
import BaskteList from "./BaskteList";
import Alert from "./Alert";

const Shop = () => {
  const [goods, setGoods] = useState([]);
  const [loading, setLoading] = useState(true);
  const [order, setOrder] = useState([]);
  const [isBasketShow, setBasketShow] = useState(false);
  const [alertName, setAlertName] = useState("");

  /**
   *
   * @param {*} item  // Добавление  в корзину
   */
  const addToBasket = (item) => {
    //Проверям есть товар в корзине
    const indexItem = order.findIndex((orderItem) => orderItem.id === item.id);
    //Если не найден добавляем первый раз
    if (indexItem < 0) {
      const newItem = {
        ...item,
        quantity: 1,
      };
      setOrder([...order, newItem]);
    } else {
      //Если ранее был добавлен товар ищим точечно позицию и меням количесто +1
      const newOrder = order.map((orderItem, index) => {
        if (index === indexItem) {
          return {
            ...orderItem,
            quantity: orderItem.quantity + 1,
          };
        } else {
          return orderItem;
        }
      });
      setOrder(newOrder);
    }
    setAlertName(item.name);
  };
  /**
   *
   * @param {*} id //Удаление из корзины
   */
  const removeFromBasket = (itemId) => {
    const newOrder = order.filter((el) => el.id !== itemId);
    setOrder(newOrder);
  };
  const deleteFromBasketAll = (item) => {
    const deleted = order.splice(item, 0);
    setOrder(deleted);
    handleBasket()
  };
  /**
   * Показывать или скрывать корзину
   */
  const handleBasket = () => {
    setBasketShow(!isBasketShow);
  };
  /**
   *
   * @param {*} itemId
   * Добавление товара на кнопку +
   */
  const incQuantity = (itemId) => {
    const newOrder = order.map((el) => {
      if (el.id === itemId) {
        const newQuantity = el.quantity + 1;
        return {
          ...el,
          quantity: newQuantity,
        };
      } else {
        return el;
      }
    });
    setOrder(newOrder);
  };
  /**
   *
   * @param {*} itemId
   * Удаление товара на кнопку -
   */
  const decQuantity = (itemId) => {
    const newOrder = order.map((el) => {
      if (el.id === itemId) {
        const newQuantity = el.quantity - 1;
        return {
          ...el,
          quantity: newQuantity >= 0 ? newQuantity : 0,
        };
      } else {
        return el;
      }
    });
    setOrder(newOrder);
  };
  /**
   * Закрытие подсказки о дабовление товара в корзину
   */
  const closeAlert = () => {
    setAlertName("");
  };
  /**
   * вывод товаров через  API
   */
  useEffect(function getGoods() {
    fetch(API_URL, {
      headers: {
        Authorization: API_KEY,
      },
    })
      .then((response) => response.json())
      .then((data) => data.featured && setGoods(data.featured));
    setLoading(false);
  }, []);

  return (
    <main className="container content">
      <Cart quantity={order.length} handleBasket={handleBasket} />
      { !goods.length || loading? (
        <Preloading />
      ) : (
        <GoodsList goods={goods} addToBasket={addToBasket} />
      )}
      {isBasketShow && (
        <BaskteList
          order={order}
          handleBasket={handleBasket}
          removeFromBasket={removeFromBasket}
          deleteFromBasketAll={deleteFromBasketAll}
          incQuantity={incQuantity}
          decQuantity={decQuantity}
        />
      )}
      {alertName && <Alert name={alertName} closeAlert={closeAlert} />}
    </main>
  );
};

export default Shop;
