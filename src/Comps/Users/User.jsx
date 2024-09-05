
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import UserAccount from "./UserTabs/UserAccount";
import UserOrders from "./UserTabs/UserOrders";
import UserProducts from "./UserTabs/UserProducts";

import Categories from "./Admin/Categories";
import Customers from "./Admin/Customers";
import AdminProducts from "./Admin/AdminProducts";
import Statistics from "./Admin/Statistics";
import { CATEGORY_COLLECTION, LOAD_CATEGORIES, LOAD_PRODUCTS, LOAD_USERS, PRODUCT_COLLECTION, USERS_COLLECTION } from "../../Utils/constants";
import { getCollection } from "../../Utils/Firebase/FirebaseInterface";

const UserComp =()=>
{
    const type = useParams();
    const dispatch = useDispatch();
    const user = useSelector((select)=>select.curUser);
    const [state, setState] = useState("");
    const navigate = useNavigate();

    const logout =()=>
    {
        dispatch({type: CLEAR_DATABASE, payload: coll})
        navigate(`/`);
    }
    const changeValue =(e, value)=>
    {
        e.preventDefault();
        setState(value);
    }

    useEffect(()=>{

        const getAll = async()=>{
            let coll = await getCollection(CATEGORY_COLLECTION);
            dispatch({type: LOAD_CATEGORIES, payload: coll})

            let prod = await getCollection(PRODUCT_COLLECTION);
            dispatch({type: LOAD_PRODUCTS, payload: prod})

            if(type.type == "Admin")
            {
                let a_users = await getCollection(USERS_COLLECTION);
                dispatch({type: LOAD_USERS, payload: a_users})
            }
        }

        if(Object.entries(user).length === 0){
            navigate(`/`);
        }else{
            getAll()
        }
    },[])

    return (
        <>
        
        <h1>Hello, {user.username}</h1>
        {type.type == "User" && <div>
        <a href="" onClick={(e)=>changeValue(e,"Products")}> Products </a>
        <a href="" onClick={(e)=>changeValue(e,"Orders")}> My Orders </a>
        <a href="" onClick={(e)=>changeValue(e,"Account")}> My Account </a>
        <a href="" onClick={()=>logout()}> Log Out </a>
        </div>}

        {type.type == "Admin" && <div>
        <a href="" onClick={(e)=>changeValue(e,"Categories")}> Categories </a>
        <a href="" onClick={(e)=>changeValue(e,"AdminProducts")}> Products </a>
        <a href="" onClick={(e)=>changeValue(e,"Customers")}> Customers </a>
        <a href="" onClick={(e)=>changeValue(e,"Statistics")}> Statistics </a>
        <a href="" onClick={()=>logout()}> Log Out </a>
        </div>}
        <br/><br/>

        {state == "Products" && <UserProducts/>}
        {state == "Orders" && <UserOrders/>}
        {state == "Account" && <UserAccount/>}

        {state == "Categories" && <Categories/>}
        {state == "AdminProducts" && <AdminProducts/>}
        {state == "Customers" && <Customers/>}
        {state == "Statistics" && <Statistics/>}
        </>
    )
}
export default UserComp;