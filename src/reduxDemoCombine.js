import React, { Component } from 'react'
import { combineReducers, createStore } from 'redux'
import UserReducer from './reducers/userReducer'
import ProductsReducer from './reducers/productReducers'

const allReducers = combineReducers({
    products: ProductsReducer,
    user : UserReducer
})
const store = createStore (allReducers,{
    products:[{name:'iPhone'}],
    user:'TestUser'
})
console.log(store.getState())
const updateUserAction = {
    type:'newUser',
    payload : {
        user : 'Sayantan'
    }
}
store.dispatch(updateUserAction)
console.log(store.getState())


class ReduxDemoCombine extends Component {
    render() {
        return (
            <div>
                Test ReduxDemoCombine
            </div>
        )
    }
}
export default ReduxDemoCombine
