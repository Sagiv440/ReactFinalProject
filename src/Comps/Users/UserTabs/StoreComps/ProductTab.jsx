import { Box, Button } from "@mui/material";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { ADD_ORDER } from "../../../../Utils/constants";

const ProductTab =({product})=>
{
    const [amount, setAmount] = useState(0);
    const dispatch = useDispatch();

    const amountInk =(e)=>
    {
        let value = amount + e;
        if(value < 0)
        {
            value = amount;
        }
        setAmount(value);
        dispatch({type: ADD_ORDER, payload: {prod: product, amount: value}})
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