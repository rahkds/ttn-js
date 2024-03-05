import {compose, createStore, applyMiddleware} from 'redux';
import logger from 'redux-logger';
import { rootReducer } from './root-reducer';


const loggerMiddleware = (store) =>(next) =>(action) => {

    console.log("#### action ######", action);
    console.log("#### currentState ####", store.getState());
    next(action);
    console.log("#### nextState ####", store.getState());
}


const middleWares = [loggerMiddleware];

const composedEnhancers = compose(applyMiddleware(...middleWares));

export const store = createStore(rootReducer, undefined, composedEnhancers);