import React, { Component } from 'react'
import { createStore } from 'redux'

class ReduxDemo2 extends Component {
    render() {
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
        console.log(store.getState())

        // store.subscribe(() => {
        //     console.log("Now state of store is ", store.getState())
        // })
        store.dispatch({ type: "changeState", payload: {newState: "This is payload/newState"} })
        console.log(store.getState())

        return (
            <div>
                Test ReduxDemo2
            </div>
        )
    }
}

export default ReduxDemo2

