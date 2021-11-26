import { createStore, applyMiddleware } from "redux";
import { Reducer } from "./Reducer";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

const store = createStore(
    Reducer,
    composeWithDevTools(applyMiddleware(thunk))
)
export default store;