import * as Types from './type';

const defalutState = {
    name: '',
}

export default function (state = defalutState, action) {
    switch (action.type) {
        case Types.CHANGE_NAME:
            console.log(state,action)
            // 数组对象的时候深拷贝出来

            // const newState = JSON.parse(JSON.stringify(state));
            // newState.name = action.value;
            // return newState;

            return {
                name: action.value
            }

        default:
            return state;
    }
}