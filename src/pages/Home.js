import React from 'react'
import Products from '../components/Products'
import Header from '../components/Header'

function Home({ products , filterQuery, setFilterQuery}) {
  return (
    <div>
        <Header filterQuery={filterQuery} setFilterQuery={setFilterQuery} />
        <Products products={products} />

    </div>
  )
}

export default Home