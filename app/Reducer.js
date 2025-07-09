const reducer = (state, action)=>{

         switch(action.type){
                 case "SET_LOADING":
                    return{
                        ...state,
                         isLoading: true,
                    };

            case "GET_STORIES":
                return{
                    ...state,
                    isLoading: false,
                    hits:action.payload.hits,
                    nbPages:action.payload.nbPages
                };

           case "SEARCH_QUERY":
            return{
                ...state,
                query:action.payload,
                page:0
            }

             case "NEXT_PAGE" :
                return{
                    ...state,
                       page: Math.min(state.page + 1, state.nbPages - 1),
                
                }
            
                case "PREV_PAGE" :
                return{
                    ...state,
                      page: Math.max(state.page - 1, 0),
                
                }
         }

   return state;
};

export  default reducer;