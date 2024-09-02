import { INIT_USER, LOAD_PRODUCTS } from "../constants"
import { getCollection } from "../Firebase/FirebaseInterface";
import { CATEGORY_COLLECTION, LOAD_CATEGORIES } from "../constants";
const REDUCER_STATE = 
{
    curUser: {},
    categories: [],
    products: [],
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
    

        default:
            return { ...state };
    }
}
export default storeReducer;