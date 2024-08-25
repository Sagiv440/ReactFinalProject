

import userAccount from "./Tabs/UserAcount";
import userOrders from "./Tabs/UserOrders";
import userProducts from "./Tabs/UserProducts";

const UserComp =()=>
{
    const logout =()=>
    {
        window.location.href = "/"
    }
    return (
        <>
        <a> Products </a>
        <a> My Orders </a>
        <a> My Account </a>
        <a href="/"> Log Out </a>
        </>
    )
}
export default UserComp;