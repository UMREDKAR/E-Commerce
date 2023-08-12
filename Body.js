import React from "react";


const Body = () =>{

const data =  [
    {
    title: 'Colors',
    price: 100,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
    },
    
    {
    title: 'Black and white Colors',
    price: 50,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
    },
    
    {
    title: 'Yellow and Black Colors',
    price: 70,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
    },
    
    {
    title: 'Blue Color',
    price: 100,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
    }];
    

    
    return(
    <div>
        <div>
           <div className='flex justify-center text-4xl pt-6 font-bold '>Music</div>
           {/* <div className='grid grid-cols-2 gap-4 place-content-center h-20'>
            */}
            <div className='flex items-center justify-center space-x-72 font-bold text-2xl h-32 mt-20'>
                <div>
                    <div className='pt-60'>
                      <h3 className='text-center font-semibold'>Album 1</h3>
                      <img className='h-60 w-64 rounded-lg cursor-pointer mt-8' src={data[0].imageUrl}/>
                    </div>

                      <text className='font-normal text-lg pr-24 mt-7'>${data[0].price}</text>
                      <button className='text-xl bg-cyan-400 text-white  rounded-md mt-7 p-1'>ADD TO CART</button>
                </div>

                <div>
                    <div className='pt-60'>
                      <h3 className='text-center font-semibold'>Album 2</h3>
                      <img className='h-60 w-64 rounded-lg cursor-pointer mt-8' src={data[1].imageUrl}/>
                    </div>

                      <text className='font-normal text-lg pr-24 mt-7'>${data[1].price}</text>
                      <button className='text-xl bg-cyan-400 text-white  rounded-md mt-7 p-1'>ADD TO CART</button>
                </div>
           </div>

           <div className='flex items-center justify-center space-x-72 font-bold text-2xl h-32 mt-80'>
                <div>
                    <div className='pt-60'>
                      <h3 className='text-center font-semibold'>Album 3</h3>
                      <img className='h-60 w-64 rounded-lg cursor-pointer mt-8' src={data[2].imageUrl}/>
                    </div>

                      <text className='font-normal text-lg pr-24 mt-7'>${data[2].price}</text>
                      <button className='text-xl bg-cyan-400 text-white  rounded-md mt-7 p-1'>ADD TO CART</button>
                </div>

                <div>
                    <div className='pt-60'>
                      <h3 className='text-center font-semibold'>Album 4</h3>
                      <img className='h-60 w-64 rounded-lg cursor-pointer mt-8' src={data[3].imageUrl}/>
                    </div>

                      <text className='font-normal text-lg pr-24 mt-7'>${data[3].price}</text>
                      <button className='text-xl bg-cyan-400 text-white  rounded-md mt-7 p-1'>ADD TO CART</button>
                </div>
           </div>



           <div className='flex items-center justify-center space-x-72 font-bold text-2xl h-32 mt-40'>
                    <div className='pt-60'>
                       <button className='text-center font-semibold bg-neutral-500 p-2 rounded-md text-lg text-cyan-400'>
                        See The Cart</button>  
                    </div>
           </div>

           <div className='mt-32 pt-7 bg-cyan-400 text-white text-5xl font-semibold py-8'>
                     <text className='ml-64'>The Generics</text>
                        
           </div>



        </div>
        
       
            
    </div>);
}

export default Body;