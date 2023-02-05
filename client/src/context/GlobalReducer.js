export default function globalReducer(state, action) {
    switch(action.type) {
        case 'GET_ENTRIES':
            return {
                ...state, entries: action.payload
            };
        case 'ADD_ENTRY':
            console.log(state);
            return {
                ...state, entries: [action.payload, ...state.entries]
            };
        default:
            return state;
    }
};