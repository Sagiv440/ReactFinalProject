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

    Orders: []
}

//Firebase collection names
export const USERS_COLLECTION = "Users";
export const ADMIN_COLLECTION = "Admin";


//Redux reducer defult state;
export const REDUCER_STATE = 
{
    curUser: { ...USER_TEMPLATE }
}
//Redux Actions;

export const INIT_USER = 'INIT_USER';
