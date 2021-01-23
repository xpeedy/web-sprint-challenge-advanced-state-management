
import {API_CALL_START,API_CALL_FINISH,ADD_NEW_SMURF,ERROR_TEXT} from "../actions"

export const initialState = {
    smurfList: [],
    loading: false,
    error: ["need name", "need nickname", "need position", "name already exist"],
}

const reducer = (state = initialState, action)=>{
    switch(action.type) {
        case API_CALL_START:
            return{...state,
                loading: true
            }
        case API_CALL_FINISH:
        return{...state,
            smurfList:action.payload,
            loading: false,
        }
        case ADD_NEW_SMURF:
            return{...state,
                smurfList:[...state.smurfList,action.payload],
            }
        case ERROR_TEXT:
        return{...state,
            ...state.error,
        }
        default:
            return state
    }
}

export default reducer;


//Task List:
//1. Add in the initialState needed to hold: 
//      - an array of smurfs
//      - a boolean indicating if the app is loading
//      - error text
//2. Setup your reducer to take the state and action as peremeters
//3. Add in cases to your reducer to handle:
//      - The start of an api call
//      - The end of an api call
//      - The adding a smurf to the smurf list when added into payload
//      - Setting Error Text
//      - Any other state changes you see as necessary