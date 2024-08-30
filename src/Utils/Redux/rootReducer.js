import { INIT_USER } from "../constants"

const REDUCER_STATE = 
{
    curUser: {},
}

const ecomsReducer = (state = REDUCER_STATE, action) =>
{
    switch(action.type)
    {
        case INIT_USER:
            console.log(action);
            return { ...state, curUser: { ...action.payload }};

        default:
            return { ...state };
    }
}
export default ecomsReducer;