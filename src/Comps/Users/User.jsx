
import { useState } from "react";

import UserAccount from "./Tabs/UserAccount";
import UserOrders from "./Tabs/UserOrders";
import UserProducts from "./Tabs/UserProducts";

const UserComp =({user})=>
{
    const [state, setState] = useState("")

    const logout =()=>
    {
        window.location.href = "/"
    }
    const changeValue =(e, value)=>
    {
        e.preventDefault();
        setState(value);
    }
    return (
        <>
        
        <h1>User: {user.name}</h1>

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