export default function globalReducer(state, action) {
    switch(action) {
        case 'GET_ENTRIES':
            return {
                ...state, entries: action.payload
            };
        case 'ADD_ENTRY':
            return {
                ...state, entries: [action.payload, ...state.entries]
            };
    }
};