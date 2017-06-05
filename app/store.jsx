import { compose, createStore, combineReducers, applyMiddleware } from 'redux';
import createLogger from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import { persistStore, autoRehydrate } from 'redux-persist';
import * as Reducers from './reducers/index';

/* ===========
 * mapReducers
 * ===========
 * function to map object of reducers into array
 * @param: object = { Reducer1, Reducer2, Reducer3 ... }
 * @return: [ Reducer1, Reducer2, Reducer3 ]
 */
function mapReducers(reducers){
    const result = {};
    Object.keys(reducers).map(key=>{
        result[key] = Reducers[key]
    });
    return result;
}

/* Middlewares */
const logger = createLogger();

const store = createStore(
    combineReducers(mapReducers(Reducers)),
    undefined,
    compose(
        applyMiddleware(logger, thunkMiddleware),
        autoRehydrate()
    )
);

persistStore(store);

export default store;