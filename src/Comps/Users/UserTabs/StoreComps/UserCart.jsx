import { useSelector } from "react-redux";
import CartOrder from "./UserOrders";
import "./../style.css"

const tabStyle = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
  }
  const orderStyle = {
    display: "flex",
    justifyContent: "flex-start",
    borderRadius: '15px',
    backgroundColor: '#cecece',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  }
const UserCart =()=>
{
    const cart = useSelector((e)=>e.cart)
    return(
        <div style={tabStyle}>
        {cart.map((order)=>
        {
            return(
                <div style={orderStyle}><CartOrder order={order}/></div>
            )
        })}
        <br/>
        <button>Purches</button>
        </div>
    )
}
export default UserCart;