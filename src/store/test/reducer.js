const defalutState = {
    name: '123',
};

// reducer 可以接受state 但不能修改state
export default function (state = defalutState, action) {
    console.log(state, action)
    if(action.type === 'change_name') {
        const newState = JSON.parse(JSON.stringify(state));
        newState.name = action.value;
        return newState;
    }
    return state;
}