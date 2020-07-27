import React, { Component } from 'react'
import { combineReducers, createStore } from 'redux'

function ProductsReducer(state=[], action) {
    return state
}
function UserReducer (state='',action){
    switch (action.type){
        case 'newUser':
            return action.payload
        default : return state
    }
    // return state
}
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
