
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import UserAccount from "./Tabs/UserAccount";
import UserOrders from "./Tabs/UserOrders";
import UserProducts from "./Tabs/UserProducts";

const UserComp =()=>
{
    //const user = useParams();
    const user = useSelector((select)=>select.curUser);
    const [state, setState] = useState("");

    const logout =()=>
    {
        window.location.href = "/"
    }
    const changeValue =(e, value)=>
    {
        e.preventDefault();
        setState(value);
    }
    useEffect(()=>
    {
        console.log(user);
    },[])
    return (
        <>
        
        <h1>User: {user.username}</h1>

        <a href="" onClick={(e)=>changeValue(e,"Products")}> Products </a>
        <a href="" onClick={(e)=>changeValue(e,"Orders")}> My Orders </a>
        <a href="" onClick={(e)=>changeValue(e,"Account")}> My Account </a>
        <a href="/"> Log Out </a>
        <br/><br/>

        {state == "Products" && <UserProducts/>}
        {state == "Orders" && <UserOrders/>}
        {state == "Account" && <UserAccount/>}
        </>
    )
}
export default UserComp;