import React from "react";

const Body = (props) =>{

  // const[update,setUpdate] = useState(0);
  const {pro,item,onAdd,onRemove} = props;

  // const sunbitHandler = () =>{
  //   setUpdate(parseInt(update)+1);
  // }

  //  props.sendData(update);

  // console.log(pro);

    return(
    <span>
      
           {/* <div className='flex justify-center text-4xl pt-6 font-bold '>Music</div> */}
            
           <div className='grid grid-cols-1  place-items-center  font-bold text-2xl ml-52 mr-96'>
                
                    <div className='pt-7'>
                      <h3 className='text-center font-semibold'>{pro.title}</h3>
                      <img className='h-60 w-64 rounded-lg cursor-pointer mt-8' src={pro.imageUrl}/>
                    </div>
                      <div className='text-xl
                           '>${pro.price}</div>
                      <div>
                        {item ?
                        <div>
                          <button className='text-xl bg-cyan-400 text-white
                          rounded-md mt-3 p-1' onClick={()=> alert("Item Is Already Added To The Cart")}>
                            ADD TO CART</button>
                        </div>:
                          <button className='text-xl bg-cyan-400 text-white
                          rounded-md mt-7 p-1' onClick={()=> onAdd(pro)}>ADD TO CART</button>
                        }
                      </div>
                      


{/*                 
                <div>
                    <div className='pt-20'>
                      <h3 className='text-center font-semibold'>Album 2</h3>
                      <img className='h-60 w-64 rounded-lg cursor-pointer mt-8' src={data[1].imageUrl}/>
                    </div>

                      <span className='font-normal text-lg pr-24 mt-7'>${data[1].price}</span>
                      <button className='text-xl bg-cyan-400 text-white 
                       rounded-md mt-7 p-1' type="submit" onClick={sunbitHandler}>ADD TO CART</button>
                </div>
            
                <div>
                    <div className='pt-32'>
                      <h3 className='text-center font-semibold'>Album 3</h3>
                      <img className='h-60 w-64 rounded-lg cursor-pointer mt-8' src={data[2].imageUrl}/>
                    </div>

                      <span className='font-normal text-lg pr-24
                       mt-7'>${data[2].price}</span>
                       <button className='text-xl bg-cyan-400 text-white 
                       rounded-md mt-7 p-1' onClick={sunbitHandler}>ADD TO CART</button>
                </div>
                
                <div>
                    <div className='pt-32'>
                      <h3 className='text-center font-semibold'>Album 4</h3>
                      <img className='h-60 w-64 rounded-lg cursor-pointer mt-8' src={data[3].imageUrl}/>
                    </div>

                      <span className='font-normal text-lg pr-24 mt-7'>${data[3].price}</span>
                      <button className='text-xl bg-cyan-400 text-white 
                       rounded-md mt-7 p-1' onClick={sunbitHandler}>ADD TO CART</button>
                </div> */}


           </div>

           {/* <div className='flex items-center justify-center
            space-x-72 font-bold text-2xl'>
                    <div className='pt-32'>
                       <button className='text-center font-semibold
                        bg-neutral-500 p-2 rounded-md 
                        text-lg text-cyan-400'>
                        See The Cart</button>  
                    </div>
           </div> */}

           {/* <div className='mt-20  bg-cyan-400 text-white text-5xl 
           font-semibold py-8'>
                     <h3 className='ml-64'>The Generics</h3>                 
           </div> */}
            
    </span>);
}

export default Body;
