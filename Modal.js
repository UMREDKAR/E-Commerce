import  ReactDOM  from "react-dom";

const Modal = (props) =>
{
        return ReactDOM.createPortal(
            <div>
              <div className='box-content h-3/4 w-72 pr-2 border-2 border-red-300
               bg-white absolute top-16 right-0'>
                   <h3 className='text-center font-bold text-3xl font-serif pt-3'>CART</h3>
                   <span className='absolute top-3 right-1 '>
                    <button onClick={props.closeModal} className='bg-red-500 p-1 rounded-md pr-3 pl-3'>X</button>
                   </span>
                   <div className=' text-lg flex space-x-12 justify-center pt-5 font-semibold 
                   underline underline-offset-8'>
                    <span>ITEM</span>
                    <span>PRICE</span>
                    <span>QUANTITY</span>
                   </div>
                   <div className='mt-8 pl-9'>
                     <span className='text-center mt-5 pl-28 text-2xl font-bold font-serif'>Total</span>
                     <span className='text-right pl-5 text-lg'>$0.00</span>
                   </div>
                   <div className='text-center mt-12'>
                    <button className=' bg-cyan-400 text-white pr-3 text-xl
                     font-semibold rounded-md pl-3 pt-2 pb-2'>PURCHASE</button>
                   </div>
              </div>
            </div>
            ,document.querySelector(".portalModal"));
}

export default Modal;