import React from 'react'
import { useStateValue } from './StateProvider'
import './Checkout.css'
import CheckoutProduct from './CheckoutProduct'

function Checkout() {
    const[{basket}] = useStateValue()
    return (
        <div className = 'checkout'>
            
             {basket?.length === 0 ? (
                 <div>
                     <h2>Your basket is empty</h2>
                     <p>
                         You have no items in your basket. To buy one or more items, click "Add To Basket" next to the item.
                     </p>
                 </div>
             ) : (
                 <div>
                     <h2 className = 'checkout__title'>Your Shopping Basket</h2>
                     {/* List out all the checkout products */}
                     {basket.map(item => (
                        <CheckoutProduct 
                            // render props of this product for each item
                            item = {item.id}
                            title = {item.title}
                            image = {item.image}
                            price = {item.price}
                            rating = {item.rating}
                        />
                     ))}
                   

                 </div>
             )}
        </div>
    )
}

export default Checkout
