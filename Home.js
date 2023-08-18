import React from "react";
import Header from "./Header";


const Home = ()=>{
    return(
    <>
    <Header/>
    <div className='bg-neutral-500 text-center'>
        <button className='p-3 pr-5 pl-5 bg-gray-950
         text-white text-3xl mb-40 mt-10 rounded-sm'>Get Our Latest Album</button>
    </div>
    <div className='text-center mt-10 text-4xl font-bold'>
        Tours
    </div>
    <div className=' flex justify-center space-x-14 text-xl mt-8 ml-20'>
         <h3>JUL16</h3>
         <h3>DETROIT, MI</h3>
         <h3>DTE ENERGY MUSIC THEATRE</h3>
         <button className='bg-cyan-400 text-white text-base pl-2 pr-2 p-1 rounded-md'>BUY TICKETS</button>
    </div>

    <div className=' flex justify-center space-x-14 text-xl mt-8'>
         <h3>JUL19</h3>
         <h3>TORONTO,ON</h3>
         <h3>BUDWEISER STAGE</h3>
         <button className='bg-cyan-400 text-white text-base pl-2
          pr-2 p-1 rounded-md'>BUY TICKETS</button>
    </div>

    <div className=' flex justify-center space-x-14 text-xl mt-8 mr-8'>
         <h3>JUL 22</h3>
         <h3>BRISTOW, VA</h3>
         <h3>JIGGY LUBE LIVE</h3>
         <button className='bg-cyan-400 text-white text-base pl-2 pr-2 p-1 rounded-md'>BUY TICKETS</button>
    </div>

    <div className=' flex justify-center space-x-14 text-xl mt-8 mr-2'>
         <h3>JUL 29</h3>
         <h3>PHOENIX, AZ</h3>
         <h3>AK-CHIN PAVILION</h3>
         <button className='bg-cyan-400 text-white text-base pl-2 pr-2 p-1 rounded-md'>BUY TICKETS</button>
    </div>

    <div className=' flex justify-center space-x-14 text-xl mt-8 mr-1'>
         <h3>AUG 2</h3>
         <h3>LAS VEGAS, NV</h3>
         <h3>T-MOBILE ARENA</h3>
         <button className='bg-cyan-400 text-white text-base pl-2 pr-2 p-1 rounded-md'>BUY TICKETS</button>
    </div>

    <div className=' flex justify-center space-x-14 text-xl mt-8 ml-3'>
         <h3>AUG 7</h3>
         <h3>CONCORD, CA</h3>
         <h3>CONCORD PAVILION</h3>
         <button className='bg-cyan-400 text-white text-base pl-2 pr-2 p-1 rounded-md'>BUY TICKETS</button>
    </div>
    </>);
}

export default Home;