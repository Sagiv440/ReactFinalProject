import { BarChart } from "@mui/x-charts";
import { useEffect, useMemo, useState } from "react";
import { useSelector } from "react-redux";
import { getById } from "../../../../Utils/utils";

const ProductQuantity =({user})=>
{
    const products = useSelector((e)=>e.products)
    const [uProd, setUProd] = useState([]);
    const [uAmount, setUAmount] = useState([]);
    
    useEffect(()=>
        {
            let data = [...new Set(user.orders.map((ord)=>
            {
                return(getById(products,ord.productId).title)
            }
            ))].sort()
            let vals = data.map((dt)=>{return(0)})

            user.orders.forEach((order, id)=>{
                let pd = getById(products,order.productId).title;
                for(let i=0; i < data.length; i++)
                {
                    if(data[i] === pd){
                        vals[i] += order.amount;
                    }
                }
            })
            setUProd([...data]);
            setUAmount([...vals]);
        },[user])

    return(
        <>
            <BarChart
                xAxis={[
                    {
                    id: 'barCategories',
                    data: uProd,
                    scaleType: 'band',
                    },
                ]}
                series={[
                    {
                    data: uAmount,
                    },
                ]}
                width={500}
                height={300}
                />
        </>
    )
}
export default ProductQuantity;