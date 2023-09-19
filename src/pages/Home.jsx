import React, { useEffect, useState } from 'react'
import Banner from '../components/Banner'
import Products from '../components/Products'
import Features from '../components/Features'
function Home() {
  const [products, setProducts] = useState([]);
  useEffect(()=>{
      const fetchProducts =  async () =>{
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json()
        setProducts(data);
      }
      fetchProducts()
  },[])
  return (
    <>
    
      <Banner/>
      {
        products.length > 0 ? 
        <Products productData={products} />
        : <div>loading...</div>
      }
      
      <Features/>
    </>
  )
}

export default Home
