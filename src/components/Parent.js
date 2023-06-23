import React, { useState } from 'react'
import Child from './Child';

const Parent = () => {
    const [cartItems,setCartItems] = useState([{ id: 1, name: "Item 1", price: 10 },
    { id: 2, name: "Item 2", price: 20 },
    { id: 3, name: "Item 3", price: 30 }])
    const [itemName,setItemName] = useState("");
    const [itemPrice,setItemPrice] = useState("");

    const AddToCart=()=>{
        if(itemName != "" && itemPrice != ""){
            const item = {name:itemName,price:itemPrice};
            setCartItems([...cartItems,item]);
            setItemName("");
            setItemPrice("");
        }
    }

    return <div className='parent'>
        <h1>Parent Component</h1>
        <label>Item Name: </label>
        <input value={itemName} onChange={(e)=>setItemName(e.target.value)} type='text' id='itemName'/>
        <label>Item Price: </label>
        <input value={itemPrice} onChange={(e)=>setItemPrice(e.target.value)} type='number' id='itemPrice'/>
        <button onClick={AddToCart}>Add Item</button>
        <Child cartItems={cartItems} setCartItems={setCartItems}/>
    </div>
}

export default Parent