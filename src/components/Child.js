import React from "react";

const Child = ({cartItems,setCartItems}) => {
    function removeitem(id){
        setCartItems(cartItems.filter((item,index)=> index !== id));
    }
    return <div className="child">
        <h2>Child Component</h2>
            {
                cartItems.map((item,index)=>{
                    return (<li key={index} className="cartItem">
                        {item.name} - ${item.price}
                        <button onClick={()=>{removeitem(index)}} id="remove">Remove</button>
                    </li>)
                }
                )
            }
    </div>
}

export default Child