export const loggerMiddleware = (store) =>(next) =>(action) => {

    console.log("#### action ######", action);
    console.log("#### currentState ####", store.getState());
    next(action);
    console.log("#### nextState ####", store.getState());
}