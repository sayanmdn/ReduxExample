import React, { Component } from 'react'
import { createStore } from 'redux'

class ReduxDemo extends Component {
    render() {
        //set Reducer (state, action)
        const reducer = function (state, action) {
            if (action.type === "ATTACK") {
                return action.task
            }
            return state
        }

        // Create Store (reducer, state)
        const store = createStore(reducer, "Peace")

        //to print the state of the store
        console.log(store.getState())

        // store.subscribe(() => {
        //     console.log("Now state of store is ", store.getState())
        // })
        store.dispatch({ type: "ATTACK", task: "Sayantan" })
        console.log(store.getState())

        return (
            <div>
                Test ReduxDemo
            </div>
        )
    }
}

export default ReduxDemo

