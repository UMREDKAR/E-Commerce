import React, { useState } from "react";
import Modal from "./Modal";

const Cart = () =>{

    const [over,setOver] = useState(false);
     
    const closeHandler =()=>
    {
        setOver(false);
    }

    return(
        <div>
            <button className='absolute top-0 right-0 h-8 w-16 text-white text-base
            border-solid border-2 border-cyan-300 rounded-lg mt-2 mr-9 mb-2'
             onClick={()=>setOver(true)}>
            CART</button>
            {over && <Modal closeModal={closeHandler}/>}
        </div>
    );
}

export default Cart;