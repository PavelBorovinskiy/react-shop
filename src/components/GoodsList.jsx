import React from 'react'
import GoodsItem from './GoodsItem';

const GoodsList = (props) => {
    const {goods = [], addToBasket = Function.prototype} = props;
  return (
    <div className='goods'>
        {
            goods.map(item => (
                <GoodsItem key={item.id} {...item}  addToBasket={addToBasket}/>
            ))
        }
    </div>
  )
}

export default GoodsList