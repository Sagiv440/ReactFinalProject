import { INIT_USER } from "../constants"

const REDUCER_STATE = 
{
    curUser: {},
}

const storeReducer = (state = REDUCER_STATE, action) =>
{
    switch(action.type)
    {
        case INIT_USER:
            return { ...state, curUser: { ...action.payload }};

        default:
            return { ...state };
    }
}
export default storeReducer;