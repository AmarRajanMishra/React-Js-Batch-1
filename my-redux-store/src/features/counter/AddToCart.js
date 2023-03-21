import React from 'react'
import { useSelector, useDispatch } from 'react-redux';

function AddToCart() {
    const product = useSelector(selectCount);
  return (
    <div>AddToCart
        <h1>{product.Title}</h1>
        <h2>{product.Price}</h2>
    </div>
  )
}

export default AddToCart;