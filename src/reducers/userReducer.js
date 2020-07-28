import { UPDATE_USER } from '../actions/user-action'

export default function UserReducer(state = '', action) {
    switch (action.type) {
        case UPDATE_USER:
            return action.payload
        default: return state
    }
    // return state
}