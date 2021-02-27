import React from 'react'
import './Login.css'
import { Link } from 'react-router-dom'


function Login() {
    return (
        <div className = 'login'>
            <Link to = '/'>
           <img className = 'login__logo' src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png' /> 
           </Link>

           <div className = 'login__container'>
             <h1>Signin</h1>
             <form>
                 <h5>E-mail</h5>
                 <input type = 'text'/>

                 <h5>Password</h5>
                 <input type = 'password'/>

               <button>Sign In</button>
               <p>
                   By signin-in you agree to FAKE AMAZON'S CLONE Conditioning of Use & Sale. 
                   Please see our 
                   privacy policy, our Cookies Notice and our Interest-Based Ads Notice.
               </p>
               <button>Create your Fake Amazon Clone Account</button>
             </form>
           </div>
        </div>
    )
}

export default Login
