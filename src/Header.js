import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
import SearchIcon from '@material-ui/icons/Search'
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import {useStateValue} from './StateProvider'
import { auth } from './firebase'

function Header() {
  // Below is what we usually write or basic syntax. But our state is = to basket[], so make it easy and destruct its value like
  //const[state, dispatch] = useStateValue()
  const[{basket, user}, dispatch] = useStateValue()
  console.log(basket)

     const handleAuthentication = () => {
       //functionality to logout
       if(user) {
         auth.signOut()
       }
     }
     
    return (
        <div className = 'header'>
            {/* logo on left */}
            <Link to = '/'>
            <img className = 'header__logo' src = 'http://pngimg.com/uploads/amazon/amazon_PNG11.png' />
            </Link>

            {/* Search Box */}
            <div className = 'header__search'> 
            <input type = 'text' className = 'header__searchInput' />
             <SearchIcon className = 'header__searchIcon' />
             </div>
           
            {/* 3 links */}
            <div className = 'header__nav'>
            {/*FirstLink */}
            <Link to = {!user && '/login'} className = 'header__link'>
             <div onClick = {handleAuthentication} className = 'header__option'>
               <span className = 'header__optionLineOne'>Hello {!user ? 'Guest' : user.email} </span>
               <span className = 'header__optionLineTwo'>{user ? 'Sign Out' : 'Sign In'}</span>
             </div> 
            </Link>
                {/* Second Link */}
                <Link to = '/' className = 'header__link'>
             <div className = 'header__option'>
               <span className = 'header__optionLineOne'>Returns</span>
               <span  className = 'header__optionLineTwo'>& Orders</span>
             </div> 
            </Link>
                {/* Third Link */}
                <Link to = '/' className = 'header__link'>
             <div className = 'header__option'>
               <span className = 'header__optionLineOne'>Your</span>
               <span  className = 'header__optionLineTwo'>Prime</span>
             </div> 
            </Link>
              {/* 4th Link */}
              <Link to = '/checkout' className = 'header__link'>
             <div className = 'header__optionBasket'>
               {/* Shopping basket icon */}
                <AddShoppingCartIcon />
               {/* Number of items in basket */}
               <span className = 'header__optionLineTwo header__basketCount'>{basket?.length}</span>
             </div> 
            </Link>
            </div>
           
            {/* Basket icon with number */}
        </div>
    )
}

export default Header
