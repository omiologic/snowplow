export const defaultReducer = (state = false, action) => {
    switch (action.type) {
        case 'TEST':
            return true;

        default:
            return state;
    }
}