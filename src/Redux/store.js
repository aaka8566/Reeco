import {reducer as orderreducer} from "./reducer";
import {legacy_createStore ,combineReducers,applyMiddleware} from "redux";
import {thunk} from "redux-thunk";
const rootreducer=combineReducers({
    orderreducer
});
export const store=legacy_createStore(rootreducer,applyMiddleware(thunk));