import React from 'react'
import Product from './Product'


function Products({ products }) {
  return (
    <div className="d-flex flex-wrap container justify-content-center">
        {products.map((product) => (
            <Product key={product.id} product={product} />
        ))}
    </div>
    )
}

export default Products;