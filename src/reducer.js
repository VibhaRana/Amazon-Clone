// All data layer logic goes here


export const initialState = {
    // On initial state , basket is empty
    basket : [],
    // On initial state, no user is logged in
    user: null
} 
    
   

 // Selector. Its highly used in production based environment. We are using this in subtotal component. We will apply reduce function in order to see the total amount of items in basket
  export const getBasketTotal = (basket) => 
      basket?.reduce((amount, item) => item.price + amount, 0)
  

// Everything in data layer is a state and we manipulate the data layer by actions, like add, remove etc.
const reducer = (state, action) => {
    console.log(action)
    switch(action.type){
        case 'ADD_TO_BASKET' : 
        // Logic for adding item to basket
        return {
            // Return current data layer, but also return what is in the basket, so whatever is returned here is what new data layer will look like
            ...state,
            // Below line means -  return whatever there is in the current basket(...state.basket) + the action dispatched
            basket:  [...state.basket, action.item]
        }
       
        case 'REMOVE_FROM_BASKET' :
        // Logic for removing item from basket. Find the index of the item you want to remove by using findIndex(). If you will use filter() it will remove all the items of same id.
        // So we get the access of state and basket by state.basket and apply findIndex function on it. Then it will find the index of the first item that matches and will return it to you.
        const index = state.basket.findIndex(
            (basketItem) => basketItem.id === action.id
        )
         
        let newBasket = [...state.basket]
         if(index >= 0) {
             newBasket.splice(index, 1)
         }else{
             console.warn(`Can't remove product (id: ${action.id}) as its not in the basket`)
         }

         //return the current state + the new basket
         return{
             ...state,
             basket: newBasket
         }

         case  'SET_USER' : 
         return {
             ...state,
             user: action.user
         }
     
        default:
            return state
    }
}

export default reducer