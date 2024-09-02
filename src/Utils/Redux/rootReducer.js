import { INIT_USER } from "../constants"
import { getCollection } from "../Firebase/FirebaseInterface";
import { CATEGORY_COLLECTION, LOAD_CATEGORIES } from "../constants";
const REDUCER_STATE = 
{
    curUser: {},
    categories: [],
}

const storeReducer = (state = REDUCER_STATE, action) =>
{
    switch(action.type)
    {
        case INIT_USER:
            return { ...state, curUser: { ...action.payload }};

        case LOAD_CATEGORIES:
            return { ...state, categories: [ ...action.payload ]};

        default:
            return { ...state };
    }
}
export default storeReducer;