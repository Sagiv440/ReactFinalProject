import { Box, Button } from "@mui/material";
import { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { UPDATE_ORDER } from "../../../../Utils/constants";

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
        <dir class="card">
            <div class="main-container">
                <div class="right-container">
                    <h1>{product.title}</h1>
                    {product.description}<br/>
                    Price:{product.price}<br/>
                    In Stock:<br/>
                    
                    <dir style={{display: "flex", flexDirection: "wrap", justifyContent: "space-between", gap: '10px'}}>
                        <Button variant="contained" size="small" onClick={(e=>amountInk(-1))}>-</Button>
                        <dir style={{display: 'flex', height: '100px', width: "100px", backgroundColor:"white"}}>
                            <h3>{amount}</h3>
                        </dir>
                        <Button variant="contained" size="small" onClick={(e=>amountInk(1))}>+</Button>
                        
                    </dir>
                </div>

                <div class="right-container">
                        imagePlaceHolder
                        
                </div>
            </div>
        </dir>
    )
}
export default ProductTab;