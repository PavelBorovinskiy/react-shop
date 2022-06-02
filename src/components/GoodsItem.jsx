import React from "react";

const GoodsItem = (props) => {
  const {
    id,
    name,
    description,
    price,
    full_background,
    addToBasket = Function.prototype,
  } = props;
  return (
    <div className="card" id={id}>
      <div className="card-image waves-effect waves-block waves-light cart-grow">
        <img className="activator" src={full_background} alt={name} />
      </div>
      <div className="card-content">
        <span className="card-title activator grey-text text-darken-4">
          {name}
          <i className="material-icons right">more_vert</i>
        </span>
        <p>
          <button
            className="btn"
            onClick={() =>
              addToBasket({
                id,
                name,
                price,
              })
            }
          >
            Купить
          </button>
          <span className="right">{price} руб.</span>
        </p>
      </div>
      <div className="card-reveal">
        <span className="card-title grey-text text-darken-4">
          {name}
          <i className="material-icons right">close</i>
        </span>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default GoodsItem;
