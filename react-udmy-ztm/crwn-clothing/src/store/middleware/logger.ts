import {Middleware} from "redux";
import {RootState} from "../store";


export const loggerMiddleware:Middleware<{},RootState> = (store) =>(next) =>(action) => {

    console.log("#### action ######", action);
    console.log("#### currentState ####", store.getState());
    next(action);
    console.log("#### nextState ####", store.getState());
}