import React, { Component } from 'react'
import { combineReducers, createStore } from 'redux'

//set Reducer (state, action)
const reducer = function (state, action) {
    if (action.type === "changeState") {
        return action.payload.newState
    }
    return state
}

// Create Store (reducer, state)
const store = createStore(reducer, "oldState")

//to print the state of the store
console.log('ReduxDemo2 ' + store.getState())

// store.subscribe(() => {
//     console.log("Now state of store is ", store.getState())
// })
store.dispatch({ type: "changeState", payload: { newState: "updated to new state" } })
// console.log(store.getState())
// handleChange(){
//     store.dispatch({type:"addOne", payload:{value: store.getState()}})
// }
class ReduxDemo2 extends Component {
    render() {
        return (
            <div>
                Test ReduxDemo2
                <p>Now state is ReduxDemo2: {store.getState()}</p>
            </div>
        )
    }
}

class reduxDemoCombine extends Component {

}

export default ReduxDemo2

