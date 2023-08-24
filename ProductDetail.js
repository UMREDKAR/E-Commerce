import React from "react";
import { useParams } from "react-router-dom";
import Data from "../Data";
import Header from "./Header";


const ProductDetail = ()=>{

    const {products} = Data;
    const params = useParams();
    // console.log(products[0].imageUrl);
    let check = {params};
    let a = check.params.productID;
    //console.log(a);
    return(<>
        <Header/>
        <h3 className='text-center text-6xl font-bold text-green-300'>Products details Page</h3>
        {/* <h3 className='mt-20 text-center text-4xl 
        font-semibold text-gray-800'>{params.productID}</h3> */}
        {a==="1" ? <div className='grid grid-cols-1  place-items-center'>
                <h3 className='mt-16 text-center text-4xl 
                    font-semibold text-gray-800'>{products[0].title}</h3>
                <img className='mt-8 h-96 w-96 rounded-md' src={products[0].imageUrl}/>  
                <h3 className='mt-14 text-2xl font-serif font-semibold text-stone-800'>
                  <span>Review - </span>
                  <span className='pl-3'> Very Good Product, Nice One!</span>
                </h3>
                </div>
        : ''}
        {a==="2" ? <div className='grid grid-cols-1  place-items-center'>
                <h3 className='mt-16 text-center text-4xl 
                    font-semibold text-gray-800'>{products[1].title}</h3>
                <img className='mt-8 h-96 w-96 rounded-md' src={products[1].imageUrl}/>
                <h3 className='mt-14 text-2xl font-serif font-semibold text-stone-800'>
                  <span>Review - </span>
                  <span className='pl-3'> Very Good Product, Nice One!</span>
                </h3>  
                </div>
        : ''}
        {a==="3" ? <div className='grid grid-cols-1  place-items-center'>
                <h3 className='mt-16 text-center text-4xl 
                    font-semibold text-gray-800'>{products[2].title}</h3>
                <img className='mt-8 h-96 w-96 rounded-md' src={products[2].imageUrl}/> 
                <h3 className='mt-14 text-2xl font-serif font-semibold text-stone-800'>
                  <span>Review - </span>
                  <span className='pl-3'> Very Good Product, Nice One!</span>
                </h3> 
                </div>
        : ''}
        {a==="4" ? <div className='grid grid-cols-1  place-items-center'>
                <h3 className='mt-16 text-center text-4xl 
                    font-semibold text-gray-800'>{products[3].title}</h3>
                <img className='mt-8 h-96 w-96 rounded-md' src={products[3].imageUrl}/>  
                <h3 className='mt-14 text-2xl font-serif font-semibold text-stone-800'>
                  <span>Review - </span>
                  <span className='pl-3'> Very Good Product, Nice One!</span>
                </h3>
                </div>
        : ''}
        </>);
}

export default ProductDetail;