
export const todoReducer = ( initialState, action ) => {

    switch ( action.type ) {
        case 'Add todo':
            return [ ...initialState, action.payload ];

        case 'Delete todo':
            return initialState.filter( todo => todo.id !== action.payload );

        case 'Toggle todo':
            return initialState.map( todo => {

                if ( todo.id === action.payload ) {
                    return {
                        ...todo,
                        done: !todo.done,
                    }
                }

                return todo;
            })

        default:
            return initialState;
    }

}