import { actionTypes } from "./actionConstants";
const initialState = {
    loading: false,
    error: false,
    success: false,
    data: {}
}
export const Reducer = (state = initialState, {type,payload} ) => {
    switch(type){
        case actionTypes.PENDING:
            return{
                ...state,
                loading: true
            };
        case actionTypes.SUCCESS:
            return{
                ...state,
                loading: false,
                success: true,
                data: payload
            };
        case actionTypes.FAIL:
            return{
                ...state,
                error: true
            };
        default:
            return state;
    }
}