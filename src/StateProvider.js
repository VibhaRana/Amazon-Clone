// setup data layer
//We need this to track the basket

import React, {createContext, useContext, useReducer} from 'react'

// This is the data layer
export const StateContext = createContext()

// BUILD A PROVIDER
export const StateProvider = ({reducer, initialState, children}) =>(
    <StateContext.Provider value = {useReducer(reducer, initialState)}>
    {/* {children}  refers to <App> component here. See index.js , App component is wrapped in StateProvider*/}
        {children}           
    </StateContext.Provider>
)

//THIS IS HOW WE CAN USE IT INSIDE OF A COMPONENT
export const useStateValue = () => useContext(StateContext)