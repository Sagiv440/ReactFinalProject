
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

const UserComp =()=>
{
    const type = useParams();
    const user = useSelector((select)=>select.curUser);
    const [state, setState] = useState("");
    const navigate = useNavigate();

    const logout =()=>
    {
        window.location.href = "/"
    }
    const changeValue =(e, value)=>
    {
        e.preventDefault();
        setState(value);
    }

    useEffect(()=>{
        if(Object.entries(user).length === 0){
            navigate(`/`);
        }
    },[])

    return (
        <>
        
        <h1>Hello, {user.username}</h1>
        {type.type == "User" && <div>
        <a href="" onClick={(e)=>changeValue(e,"Products")}> Products </a>
        <a href="" onClick={(e)=>changeValue(e,"Orders")}> My Orders </a>
        <a href="" onClick={(e)=>changeValue(e,"Account")}> My Account </a>
        <a href="/"> Log Out </a>
        </div>}

        {type.type == "Admin" && <div>
        <a href="" onClick={(e)=>changeValue(e,"Categories")}> Categories </a>
        <a href="" onClick={(e)=>changeValue(e,"AdminProducts")}> Products </a>
        <a href="" onClick={(e)=>changeValue(e,"Customers")}> Customers </a>
        <a href="" onClick={(e)=>changeValue(e,"Statistics")}> Statistics </a>
        <a href="/"> Log Out </a>
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