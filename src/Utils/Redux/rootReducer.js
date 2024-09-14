import { ADD_ORDER, CLEAR_DATABASE, INIT_USER, LOAD_PRODUCTS, LOAD_USERS, PURCHES, REMOVE_ORDER } from "../constants"
import { ORDER_TEMPLATE, LOAD_CATEGORIES } from "../constants";
const REDUCER_STATE = 
{
    curUser: {},
    categories: [],
    products: [],
    maxPrice: 0,

    //User_Local_Vers
    cart: [],

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
            let plist = [];
            plist = action.payload.map((prod)=>
            {
                return(parseInt(prod.price,10))
            })
            return { ...state, products: [ ...action.payload ], maxPrice: Math.max.apply(null,plist)};

        case LOAD_USERS:
            return { ...state, users_admin: [ ...action.payload ]};
        
        case CLEAR_DATABASE:
            return { ...REDUCER_STATE };

        case ADD_ORDER:
            let order = state.cart.find((e)=>e.productId === action.payload.prod.id)
            if(order === undefined)
            {   
                let newOrder = { ...ORDER_TEMPLATE, productId: action.payload.prod.id ,amount: action.payload.amount }
                return { ...state, cart: [ ...state.cart, newOrder ]};

            }else{
                order.amount = action.payload.amount;
                let newCart = state.cart.filter((e)=>e.productId !== action.payload.prod.id)
                return { ...state, cart: [ ...newCart, order ]};
            }

        case REMOVE_ORDER:
            return { ...state, cart: state.cart.filter((e)=>{return(e.productId == action.payload.id)})};

        case PURCHES:
            return { ...state };

        default:
            return { ...state };
    }
}
export default storeReducer;