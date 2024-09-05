//User Data Template
export const USER_TEMPLATE =
{
    //Credential
    username: "",
    password: "",

    //Personal
    name: {first: "" , last: ""},
    jointDate: "",

    //Promissions
    viewOrders: false,

    orders: []
}
export const ORDER_TEMPLATE =
{
    productId: "",
    amount: 0,
    date: ""
}


export const PRODUCT_TEMPLATE =
{
    //Credential
    title: "",
    category: "",
    price: 0,

    description: "",
    imageLink: "",
}

//Firebase collection names
export const USERS_COLLECTION = "Users";
export const ADMIN_COLLECTION = "Admin";
export const CATEGORY_COLLECTION = "Categories";
export const PRODUCT_COLLECTION = "Products";


//Redux reducer defult state;
export const REDUCER_STATE = 
{
    curUser: { ...USER_TEMPLATE }
}
//Redux Actions;

export const INIT_USER = 'INIT_USER';
export const LOAD_CATEGORIES = 'LOAD_CATEGORIES';
export const LOAD_PRODUCTS = 'LOAD_PRODUCTS';
export const LOAD_USERS = 'LOAD_USERS';
export const CLEAR_DATABASE = 'CLEAR_DATABASE';
