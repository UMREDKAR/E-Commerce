const Header = () =>{
    return(
    <div>
        <div className='bg-black  text-white text-lg flex space-x-4 justify-center p-2'>
            <button className='px-10'>HOME</button>
            <button className='px-10'>STORE</button>
            <button className='px-10'>ABOUT</button>
        </div>

        <button className='absolute top-0 right-0 h-8 w-16 text-white text-base
            border-solid border-2 border-cyan-300 rounded-lg mt-2 mr-9 mb-2'>
            CART</button>
        <hr className='p-0.5 bg-red-800'/>    
        <div className='bg-neutral-500 text-white text-8xl flex justify-center pb-20'> 
            <h1>The Generics</h1>
        </div>
    </div>);
}

export default Header;