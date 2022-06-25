import React, { createContext, useContext, useReducer } from "react";

//creating datalayer which holds data
 export const StateContext = createContext();

 //data provider
 export const StateProvider =({reducer,initialState,children})=>(
     
    <StateContext.Provider value={useReducer(reducer,initialState)}>
            {children}
    </StateContext.Provider>
 )

 export const useStateValue =()=> useContext(StateContext);