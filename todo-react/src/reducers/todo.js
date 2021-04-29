import { ACTION_TYPES } from "../actions/todo";
const initialState = {
    list: [],
    filteredList:[]
}


export const todo = (state = initialState, action) => {

    switch (action.type) {
        case ACTION_TYPES.FETCH_ALL:
            return {
                ...state,
                list: [...action.payload],
                filteredList: [...action.payload]
            }

        case ACTION_TYPES.CREATE:
            return {
                ...state,
                list: [...state.list, action.payload],
                filteredList:[...state.filteredList, action.payload]
            }

        case ACTION_TYPES.UPDATE:
            return {
                ...state,
                list: state.list.map(x => x.id === action.payload.id ? action.payload : x),
                filteredList: state.filteredList.map(x => x.id === action.payload.id ? action.payload : x)
            }

        case ACTION_TYPES.DELETE:
            return {
                ...state,
                list: state.list.filter(x => x.id !== action.payload),
                filteredList: state.filteredList.filter(x => x.id !== action.payload)
                
            }
        case ACTION_TYPES.MOVETODO:
            return {
                state,
                list: listDataMove(state.list,action.payload.todo,action.payload.number),
                filteredList: listDataMove(state.filteredList,action.payload.todo,action.payload.number)
                
            }
        case ACTION_TYPES.FILTER:
            if(action.payload!=="all")
            {
            return {
                state,               
                list:state.list,
                filteredList: state.list.filter(f=>f.status===action.payload)
                }
            }
            else
            {
                return {
                    state,               
                    list:state.list,
                    filteredList: state.list
                    }
            }
        
            
        default:
            return state
    }

    function listDataMove(list,todo,number) {
        let filteringList=list
        let index=filteringList.indexOf(todo)
        filteringList.splice(index,1)
        filteringList.splice(index+number,0,todo)
        return filteringList

        
    }

}

