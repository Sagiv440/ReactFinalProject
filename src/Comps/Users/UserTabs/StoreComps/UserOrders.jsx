import { useEffect, useState } from "react";
import { PRODUCT_TEMPLATE, UPDATE_ORDER } from "../../../../Utils/constants";
import { useDispatch, useSelector } from "react-redux";

const text = {
    margin: "5px",
  }
const CartOrder =({order})=>
{
    const products = useSelector((select)=> select.products)
    const cart = useSelector((select)=> select.cart)
    const dispatch = useDispatch();
    const [prod, setProd] = useState({...PRODUCT_TEMPLATE});
    useEffect(()=>{
        setProd(products.find((prod) => prod.id === order.productId))
    },[cart])
    const amountInk =(e)=>
        {
            let value = order.amount + e;
            if(value < 0)
            {
                value = order.amount;
            }
            dispatch({type: UPDATE_ORDER, payload: {prod: prod, amount: value}})
    
        }

    return(
        <>
        <p style={text}>{prod.title} -</p>
        <button onClick={(e=>amountInk(1))}>+</button>
        <p style={text}> {order.amount}</p>
        <button onClick={(e=>amountInk(-1))}>-</button>
        <p style={text}>Units - Total: ${prod.price * order.amount}</p>
        </>
    );
}
export default CartOrder;