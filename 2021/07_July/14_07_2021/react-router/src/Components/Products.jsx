import React, { useState } from 'react'
import { useParams } from 'react-router-dom'

function Products() {
  const product = useParams()
  const [products, setProducts] = useState({
    one: "tea",
    two: "coffee",
    three: "chocolate"
  })
  console.log(product);
  return (
    <div>
      <h1>This is the products page</h1>
      {product.productName ? <img src={`https://source.unsplash.com/200x200/?${product.productName}`} alt={product.productName}/> : ""}
    </div>
  )
}

export default Products

{/* <img src={`https://source.unsplash.com/199x200/?${products.one}`} alt={products.one}/> */}