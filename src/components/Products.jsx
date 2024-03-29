import React from 'react'
import { Link } from 'react-router-dom';

function Products({ productData = [] }) {
  return (
    <section className="text-gray-600 body-font">
      <h1 className='text-2xl text-black text-center'>Featured Products</h1>
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -m-4">
          {
            productData.map((product) => {
             
              const {id,title,price,category,image } =product;
              return (
                <Link to={`product/${id}`} className="lg:w-1/4 md:w-1/2 p-4 w-full cursor-pointer">
                  <a className="block relative h-48 rounded overflow-hidden">
                    <img alt="ecommerce" className="object-contain object-center w-full h-full block" src={image} />
                  </a>
                  <div className="mt-4">
                    <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">{category}</h3>
                    <h2 className="text-gray-900 title-font text-lg font-medium">{title}</h2>
                    <p className="mt-1">$ {price}</p>
                  </div>
                </Link>
                
              );
            })
          }
          


        </div>
      </div>
    </section>
  )
}

export default Products
