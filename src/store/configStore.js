import {createStore, combineReducers, applyMiddleware} from 'redux'
import postsReducer  from '../reducers/postsReducer.js'
import thunk from 'redux-thunk'

 const configureStore=()=>{
    const store= createStore(combineReducers({
        posts: postsReducer
    }), applyMiddleware(thunk))
    return store
}
export default configureStore