import { createStore, applyMiddleware, compose} from "redux";
import rootReducer from "../store/reducer";
import thunk from "redux-thunk";

// Conexion a la extension del navegador "Redux DevTools"
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, 
    // Poder hacer peticiones a la API
    composeEnhancer(applyMiddleware(thunk)))

export default store;
