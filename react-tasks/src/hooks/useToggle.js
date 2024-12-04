import { useCallback, useReducer } from "react";

const initState = 0;

const reducer = (state, action) => {
    if (action.type === 'TOGGLE') {
        let index = action.payload.indexOf(state);
        
        if(action.toggleVal){
            index = action.payload.indexOf(action.toggleVal)
            return action.payload[index]
        }
        if(!action.toggleVal && index < action.payload.length-1) {
            return action.payload[index+1]
        }
    }
    return action.payload[initState]
}

export function useToggle(array) {
    const [value, dispatch] = useReducer(reducer, array[initState]);

    const toggle = useCallback((val) => {
        dispatch({
            type: 'TOGGLE',
            payload: array,
            toggleVal: val
        })
    }, [array])

    return [value, toggle] 
}