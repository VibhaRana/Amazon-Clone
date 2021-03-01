import React from 'react'
import './Payment.css'
import { useStateValue } from './StateProvider';
import CheckoutProduct from './CheckoutProduct';
import { Link } from 'react-router-dom';
import {CardElement, useStripe, useElements } from '@stripe/react-stripe-js'

function Payment() {
    const[{ basket, user } , dispatch] = useStateValue()

    const stripe = useStripe()
    const elements = useElements()

    function handleSubmit(e){
      // some fancy stripe stuff
    }

    function handleCardChange(e){

    }

    return (
        <div className = 'payment'>
            <div className = 'payment__container'>
                <h1>
                    Checkout (<Link to = '/checkout'>{basket?.length}</Link>)
                </h1>
             {/* Delivery Address */}
             <div className = 'payment__section'>
               <div className = 'payment__title'>
                 <h3>Delivery Address</h3>
               </div>
               <div className = 'payment__address'>
                   {/* used optainal chaining(?), in case the user is undefined */}
                   <p>{user?.email}</p>
                   <p>9141 Holmes street</p>
                   <p>Vancouver, BC , Canada</p>

               </div>
             </div>

             {/* Review Items */}
             <div className = 'payment__section'>
             <div className = 'payment__title'>
                 <h3>Review items and delivery</h3>
               </div>
               <div className = 'payment__items'>
                  {/* All the products will go here */}
                  {basket.map(item => (
                      <CheckoutProduct 
                       id = {item.id}
                       title = {item.title}
                       image = {item.image}
                       price = {item.price}
                       rating = {item.rating}
                       />
                  ))}
               </div>
             </div>

             {/* Payment method */}
             <div className = 'payment__section'>
             <div className = 'payment__title'>
                 <h3>Payment Methods</h3>
               </div>
               <div className = 'payment__details'>
                   {/* Stripe magic */}
                   <form onSubmit = {handleSubmit}>
                       <CardElement onChange = {handleCardChange} />
                   </form>
               </div>
             </div>
            </div>
            
        </div>
    )
}

export default Payment
