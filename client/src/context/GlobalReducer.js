export default function globalReducer(state, action) {
    switch(action.type) {
        case 'GET_ENTRIES':
            return {
                ...state, entries: action.payload
            };
        case 'ADD_ENTRY':
            return {
                ...state, entries: [action.payload, ...state.entries]
            };
        case 'PROFANITY_DETECTED':
            return {
                ...state, hasProhibitedText: true
            };
        default:
            return state;
    }
};