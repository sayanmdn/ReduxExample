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

        store.subscribe(() => {
            console.log("Now store is ", store.getState())
        })
        store.dispatch({ type: "ATTACK", task: "Sayantan" })

        return (
            <div>
                Test ReduxDemo
            </div>
        )
    }
}

export default ReduxDemo

