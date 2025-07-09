'use client'
import React, { useContext, useReducer, useEffect} from "react";
import reducer from "./Reducer";
import axios from "axios";

  const api = "https://hn.algolia.com/api/v1/search?";

const initialState = {
   isLoading: true,
    query: "",
    nbPages:0,                       
    page:0, 
    hits:[],
}


const AppContext = React.createContext();

const AppProvider = ({children}) =>{
//dispatch will call the action  method from reducer 

 const [state, dispatch] = useReducer(reducer,initialState)

  const fetchData = async () => {

     dispatch({type:"SET_LOADING"});

    try {
      const res = await axios.get(`${api}query=${state.query}&page=${state.page}`);
    
      console.log(res.data);
      dispatch({
        type:'GET_STORIES', 
        //payload is for sharing extra information....hits and nbpages are just a variables
        payload: {
            hits:res.data.hits,
            nbPages:res.data.nbPages
        }
    })

      
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchData(`${api}query=${state.query}&page=${state.page}`);
  }, [state.query, state.page]);



//   if(isLoading){
//     <p>loading......</p>
//   }

    return <AppContext.Provider  value={{...state, dispatch }}>
         {children}
    </AppContext.Provider>
}

const useGlobalContext = () =>{
    return useContext(AppContext);
}

export {AppContext, AppProvider, useGlobalContext}