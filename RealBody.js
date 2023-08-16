import React from "react";
import Body from "./Body";

const RealBody = (props)=>{

    const{product,onAdd,onRemove,cartItems} = props;
    // console.log(product);

    return(
    <div>
        {product.map((pro)=>(
            <Body key={pro.id}
              pro={pro}
              item={cartItems.find((x) => x.id===pro.id)}
              onAdd={onAdd}
              onRemove={onRemove}
             >
            </Body>
        ))}
     
    </div>);
}

export default RealBody;