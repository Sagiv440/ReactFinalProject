import { useDispatch, useSelector } from "react-redux";
import CartOrder from "./UserOrders";
import "./../style.css"
import { updateDocument } from "../../../../Utils/Firebase/FirebaseInterface";
import { PURCHES, USERS_COLLECTION } from "../../../../Utils/constants";
import { getDate } from "../../../../Utils/utils";
import { useEffect, useState } from "react";
import { height } from "@mui/system";

const tabStyle = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  }
  const TackingButton = {
    display: "flex",
    height: "100vh",
    flexDirection: "column",
    justifyContent: "center",
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
    const products = useSelector((select)=> select.products)
    const curUser = useSelector((e)=>e.curUser)
    const [tPrice, setTPrice] = useState(0)
    const dispatch = useDispatch();
    const purches = async ()=>
    {
        if(cart.length > 0){
            let tmpCart = [...cart]
            for(let i=0; i < tmpCart.length; i++)
            {
                tmpCart[i].date = getDate(); 
            }
            let useOrders = [...curUser.orders, ...tmpCart]
            updateDocument(USERS_COLLECTION, curUser.id, { ...curUser, orders: [...useOrders]} )
            dispatch({type: PURCHES})
        }else{
            console.log("Need to add products")
        }
    }

    useEffect(()=>
    {
        let maxp = 0;
        for(let i=0; i<cart.length;i++)
        {
            let pd = products.find((prod) => prod.id === cart[i].productId);
            maxp += (pd.price * cart[i].amount);
        }
        setTPrice(maxp)
    },[cart])

    return(
        <>
        <div style={tabStyle}>
            <h3>Cart:</h3>
            {cart.map((order)=>
            {
                return(
                    <div style={orderStyle}><CartOrder order={order}/></div>
                )
            })}
            <br/>
            <h4>Total: ${tPrice}</h4>
            <button onClick={()=>purches()}>Purches</button>
        </div>
        </>
    )
}
export default UserCart;