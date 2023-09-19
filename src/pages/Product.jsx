import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import ProductArchive from '../components/ProductArchive'
import { useParams } from 'react-router-dom'

function Product() {

  const {id} = useParams();
  const [singleProduct, setSingleProduct] = useState({});

  useEffect(()=>{
    const fetchProduct =  async () =>{
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);
      const data = await response.json()
     
      setSingleProduct(data);
    }
    fetchProduct()
  })
  return (
    <>
     <Header/>
     <ProductArchive archiveData = {singleProduct}/>
    <Footer/>
    </>
  )
}

export default Product
