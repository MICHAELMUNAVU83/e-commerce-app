import React from 'react'
import Products from '../components/Products'
import Header from '../components/Header'

function Home({ products }) {
  return (
    <div>
        <Header />
        <Products products={products} />

    </div>
  )
}

export default Home