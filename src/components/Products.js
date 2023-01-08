import React from 'react'
import Product from './Product'


function Products({ products }) {
  return (
    <div className="products-div">
        {products.map((product) => (
            <Product key={product.id} product={product} />
        ))}
    </div>
    )
}

export default Products;