import React from 'react'
import './Home.css'
import Product from './Product'

function Home() {
    return (
        <div className = 'home'>
            {/* <h1>I am the home page</h1> */}
            <img className = 'home__image' src = 'https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_45M_v2_2x._CB432458382_.jpg'/>

            {/* Product id, title, price, rating, image */}
            <div className = 'home__row'>
            <Product 
                id = '123123'
                title = 'Automatoc Hot Pot'
                price = {11.96}
                rating = {5}
                image = 'https://images-na.ssl-images-amazon.com/images/I/51XFpX+XFpL._AC_SY200_.jpg'
            />

            <Product 
                id = '123124'
                title = 'Avalon'
                price = {11.96}
                rating = {5}
                image = 'https://images-na.ssl-images-amazon.com/images/I/91JhcC33dTL._AC_SY400_.jpg'
            />

            
            </div>

            <div className = 'home__row'>
            <Product 
                id = '123125'
                title = 'Automatoc Hot Pot'
                price = {11.96}
                rating = {5}
                image = 'https://images-na.ssl-images-amazon.com/images/I/51XFpX+XFpL._AC_SY200_.jpg'
            />

            <Product 
                id = '123126'
                title = 'Bed sheet'
                price = {11.96}
                rating = {5}
                image = 'https://m.media-amazon.com/images/I/71ROFJE-8nL._AC_UL640_FMwebp_QL65_.jpg'
            />

             <Product 
                id = '123127'
                title = 'Video Games'
                price = {11.96}
                rating = {5}
                image = 'https://m.media-amazon.com/images/I/61l1BXNnl+L._AC_UL640_FMwebp_QL65_.jpg'
            />
            </div>
            <div className = 'home__row'>
            <Product 
                id = '123128'
                title = 'Television'
                price = {1000.96}
                rating = {5}
                image = 'https://m.media-amazon.com/images/I/91UsHjAPTlL._AC_UY436_FMwebp_QL65_.jpg'
            />
            </div>
           
        </div>
    )
}

export default Home
