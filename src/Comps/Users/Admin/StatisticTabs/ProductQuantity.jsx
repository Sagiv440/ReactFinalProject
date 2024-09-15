import { BarChart } from "@mui/x-charts";
import { useEffect, useMemo, useState } from "react";
import { useSelector } from "react-redux";
import { getById } from "../../../../Utils/utils";

const ProductQuantity =({user})=>
{
    const products = useSelector((e)=>e.products)
    const useProducts = useMemo(()=>
    {
        return(user.orders.map((ord)=>
        {
            return(getById(products,ord.productId).title)
        }
        ))
    })
    const orderAmount = useMemo(()=>
    {
        return(user.orders.map((ord)=>
        {
            return(ord.amount);
        }
        ))
    })
    useEffect(()=>
    {
        console.log(useProducts)
        console.log(orderAmount)
    })

    return(
        <>
            <BarChart
                xAxis={[
                    {
                    id: 'barCategories',
                    data: useProducts,
                    scaleType: 'band',
                    },
                ]}
                series={[
                    {
                    data: orderAmount,
                    },
                ]}
                width={500}
                height={300}
                />
        </>
    )
}
export default ProductQuantity;