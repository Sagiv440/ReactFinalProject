import { Box, Button } from "@mui/material";
import { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { UPDATE_ORDER } from "../../../../Utils/constants";

const text = {
    display: "flex",
    margin: "5px",
  }

  const localCard = {
    display: "flex",
    margin: "5px",
    width: '100%',
    borderRadius: "15px",
    backgroundColor: "#cecece",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
  }
  const cardLeft = {
    flex: "1",                 /* Take 2 parts of the available space */
    display: "flex",
    flexDirection: "column",   /* Vertical stacking (header, then list) */
    padding: '15px',
  }
  const cardRight = {
    flex: "2",                 /* Take 2 parts of the available space */
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: '15px',
  }

const ProductTab =({product})=>
{
    const [amount, setAmount] = useState(0);
    const cart = useSelector((e)=>e.cart);
    const dispatch = useDispatch();

    useEffect(()=>
    {
        let order = cart.find((e)=>e.productId === product.id)
        if(order !== undefined)
        {
            setAmount(order.amount);
        }else{
            setAmount(0);
        }
    },[cart])

    const amountInk =(e)=>
    {
        let value = amount + e;
        if(value < 0)
        {
            value = amount;
        }
        setAmount(value);
        dispatch({type: UPDATE_ORDER, payload: {prod: product, amount: value}})

    }

    return(
        <div style={localCard}>
            <div style={cardLeft}>
                <h1 style={text}>{product.title}</h1>
                <p style={text}>{product.description}</p>
                <p style={text}>Price: ${product.price}</p>
                <p style={text}>In Stock:</p>
                
                <dir style={{display: "flex", flexDirection: "wrap", justifyContent: "center", padding: "0px" ,marginTop: "5px" }}>
                    <Button variant="contained" size="small" onClick={(e=>amountInk(-1))}>-</Button>
                    <h3 style={{display: "flex", margin: "3px",}}>{amount}</h3>
                    <Button variant="contained" size="small" onClick={(e=>amountInk(1))}>+</Button>
                    
                </dir>
            </div>

            <div style={cardRight}>
                <img style={{boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",borderRadius: "15px"}} src={product.imageLink} alt={product.title} width="200" height="200"/>
                <p style={text}>Bought: {product.price}</p>
            </div>
        </div>
    )
}
export default ProductTab;