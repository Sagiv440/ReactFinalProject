import { CLEAR_DATABASE, INIT_USER, LOAD_PRODUCTS, LOAD_USERS } from "../constants"
import { CATEGORY_COLLECTION, LOAD_CATEGORIES } from "../constants";
const REDUCER_STATE = 
{
    curUser: {},
    categories: [],
    products: [],

    //Admin_Access_Only
    users_admin: [],
}

const storeReducer = (state = REDUCER_STATE, action) =>
{
    switch(action.type)
    {
        case INIT_USER:
            return { ...state, curUser: { ...action.payload }};

        case LOAD_CATEGORIES:
            return { ...state, categories: [ ...action.payload ]};

        case LOAD_PRODUCTS:
            return { ...state, products: [ ...action.payload ]};

        case LOAD_USERS:
            return { ...state, users_admin: [ ...action.payload ]};
        
        case CLEAR_DATABASE:
            return { ...REDUCER_STATE };

        default:
            return { ...state };
    }
}
export default storeReducer;