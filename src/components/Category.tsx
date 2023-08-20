import React from 'react';
import UseFetch from './UseFetch';
import { Link } from 'react-router-dom';

const Category = ({ Category, title }:{Category:string,title:string}) => {
    const { assets, loading, error } = UseFetch(`https://fakestoreapi.com/products/category/${Category}`);
    
    if (loading) {
        return <div className='flex absolute z-20 left-1/2 top-1/2'>
            <svg className="animate-spin h-5 w-5 mr-3 bg-blue-500 rounded-xl border-2 border-dashed" viewBox="0 0 24 24"></svg>Loading...
        </div>;
    }

    if (error) {
        return <p>Error: {error}</p>;
    }

    return (
        <div className='relative p-20'>
            <h2 className='text-3xl p-4 capitalize'>{title}</h2>
            <div className='lg:flex md:grid md:grid-cols-4 sm:block gap-3 justify-center items-center relative border-t-2 border-t-gray-500 p-4'>
                {assets.map((product: any) => (
                    <div key={product.id} className='block text-center mb-10 p-1 antialiased'>
                        <img src={product.image} loading='lazy' alt='electronic' className='w-32 m-auto' />
                        <h3 className='text-md pt-3'>{product.title}</h3>
                        <span className='text-md text-red-600 pt-3'>Price: <sup>$</sup>{product.price}</span>
                        <br />
                        <Link to={`/product/${product.id}`}>
                            <button className='text-md text-blue-800 pt-4'>View Product</button>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Category;
