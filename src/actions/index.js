import axios from 'axios';

export const API_CALL_START = "API_CALL_START"
export const API_CALL_FINISH = "API_CALL_FINISH"
export const ADD_NEW_SMURF = "ADD_NEW_SMURF"
export const ERROR_TEXT = "ERROR_TEXT"

const fetchSmurfs = () => (dispatch) => {
    dispatch({ type: API_CALL_START });
    console.log(dispatch({ type: API_CALL_START }));
    axios
        .get('http://localhost:3333/smurfs')
        .then((res) => {
            console.log(res.data)
            dispatch({ type: API_CALL_FINISH, payload: res.data});
            console.log(dispatch({ type: API_CALL_FINISH, payload: res.data}))
        })
        .catch((err) => {
            console.log(err)
        })
    
}

const addSmurf = (name) => (dispatch) =>{
    dispatch({ type: ADD_NEW_SMURF, payload:name})
    axios.
    post('http://localhost:3333/smurfs')
    .then((res) => {
        console.log(res)
    })
    .catch((err) => {
        console.log(err)
    })
}

const errrorText = dispatch =>{
    dispatch({ type:ERROR_TEXT, })
}
//Task List:
//1. Add fetch smurfs action: 
//              - fetch and return initial list of smurfs
//              - dispatch actions that indicate if we are waiting for a server response
//              - dispatch an error text action if an error is returned from the server
//2. Add add smurf action:
//              - dispatch an error text action if smurf data does not includes a name, nickname and position field
//              - send a post request with the smurf as body to see if there is an error
//              - dispatch add smurf action if request is successful
//              - dispatch an error text action if an request returns an error
//3. Add set error text action:
//              - return action object setting error text
//4. Any other actions you deem nessiary to complete application.