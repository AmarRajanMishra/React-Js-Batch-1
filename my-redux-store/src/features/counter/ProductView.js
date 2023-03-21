import React from 'react'
import { useSelector, useDispatch } from 'react-redux';

function ProductView() {
    const product = useSelector(selectCount);
  return (
    <div>ProductView

        <h1>{product.id}</h1>
        <h2>{product.Title}</h2>
        <h2>{product.imgSrc}</h2>
        
    </div>
  )
}

export default ProductView;