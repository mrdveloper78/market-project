import { combineReducers, legacy_createStore as createStore } from "redux";
import ProductReucer from "../Reducer/ProductReducer";





const rootReducer = combineReducers({productState:ProductReucer});

const mainStore = createStore(rootReducer);




export default mainStore;