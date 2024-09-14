import { useEffect, useState } from "react";
import { PRODUCT_TEMPLATE } from "../../../../Utils/constants";
import { useSelector } from "react-redux";

const text = {
    margin: "5px",
  }
const CartOrder =({order})=>
{
    const products = useSelector((select)=> select.products)
    const [prod, setProd] = useState({...PRODUCT_TEMPLATE});
    useEffect(()=>{
        setProd(products.find((prod) => prod.id === order.productId))
    },[])

    return(
        <>
        <p style={text}>{prod.title}</p>
        <p style={text}> {order.amount}</p>
        </>
    );
}
export default CartOrder;