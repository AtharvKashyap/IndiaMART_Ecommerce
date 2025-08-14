import React from 'react'
import { ShopContext } from '../context/ShopContext';
import { useContext, useState, useEffect } from 'react'
import Title from './Title';
import ProductItem from './ProductItem';

const LatestCollection = () => {
    const { products } = useContext(ShopContext);
    const [latestProducts, setLatestProducts] = useState([]);

    useEffect(() => {
        setLatestProducts(products.slice(0, 10));
    },[])

    return (
    <div className='my-10'>
        <div className='text-center py-8 text-3xl'>
            <Title text1={'RECENTLY'} text2={'ADDED'} />
            <p className='w-3/5 m-auto text-xs sm:text-sm md:text-base text-gray-600'>
            Discover the freshest additions to our store—handpicked treats, snacks, and essentials that have just landed. From indulgent sweets to savory bites, there’s always something new to explore.
            </p>
        </div>

        {/* Rendering Products */}
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
            {
                latestProducts.map((item,index) => (
                    <ProductItem key={index} id={item.id} image={item.image} name={item.name} price={item.price} /> 
                ))
            }
        </div>
    </div>
  )
}

export default LatestCollection