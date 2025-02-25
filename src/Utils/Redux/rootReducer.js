import { UPDATE_ORDER, CLEAR_DATABASE, INIT_USER, LOAD_PRODUCTS, LOAD_USERS, PURCHES, ADMIN_SELECT, GET_PUBLIC_ORDERS } from "../constants"
import { ORDER_TEMPLATE, LOAD_CATEGORIES } from "../constants";
const REDUCER_STATE = 
{
    curUser: {},
    categories: [],
    products: [],
    maxPrice: 0,

    //User_Local_Vers
    cart: [],
    public_orders: [],

    //Admin_Access_Only
    users_admin: [],
    selected_user_admin: {},
}

const storeReducer = (state = REDUCER_STATE, action) =>
{
    let order
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

        case UPDATE_ORDER:

            order = state.cart.find((e)=>e.productId === action.payload.prod.id)
            if(order === undefined)
            { 
                if(action.payload.amount > 0)
                    {  
                        let newOrder = { ...ORDER_TEMPLATE, productId: action.payload.prod.id ,amount: action.payload.amount }
                        return { ...state, cart: [ ...state.cart, newOrder ]};
                    }else{
                        return { ...state };
                    }
            }else{
                if(action.payload.amount < 1)
                    {
                        let filterd = state.cart.filter((e)=>e.productId !== action.payload.prod.id)
                        return { ...state, cart: [ ...filterd ]};
                    }else{
                        let tempCart = [...state.cart]
                        let index = tempCart.findIndex((e)=>e.productId === action.payload.prod.id)
                        tempCart[index].amount = action.payload.amount;

                        return { ...state, cart: [ ...tempCart ]};
                    }
            }

        case PURCHES:

            return { ...state, cart: []};

        case ADMIN_SELECT:
            {
                return { ...state, selected_user_admin: {...action.payload}};
            }
        case GET_PUBLIC_ORDERS:
            {
                return { ...state, public_orders: [...action.payload]};
            }

        default:
            return { ...state };
    }
}
export default storeReducer;