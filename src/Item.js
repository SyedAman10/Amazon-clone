import React from 'react'
import "./Item.css";
import { useStateValue } from './StateProvider';

function Item({id,title , image , price , rating }) {
    const [{basket}, dispatch] = useStateValue();
    console.log("this is the basket >>>" , basket);
    const addToBasket = () => {
         dispatch ({
             type:"ADD_TO_BASKET",
             item:{
                 id:id,
                 title:title,
                 image:image,
                 price:price,
                 rating:rating,

             }, 

         });
    }
    return (
        <div className="Item">
         <div className="Item__info">
         <p>{title}</p>
         <p className="Item__price">
               <small>$</small>
               <strong>{price}</strong>
         </p>
         <div className="Item__rating">
             {Array(rating).fill().map((_ , i) => (<p>⭐</p> ))}
             
         </div>
         </div>
            <img src={image} alt="img"></img>
            <button onClick={addToBasket}>Add to Basket</button>
         
        </div>
    )
}

export default Item
