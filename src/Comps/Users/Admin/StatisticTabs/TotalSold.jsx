import { PieChart } from "@mui/x-charts";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";


const TotalSoldProducts =()=>
{
    const products = useSelector((e)=>e.products)
    const users = useSelector((e)=>e.users_admin)
    const [tdata, setTdata] = useState([]);
    useEffect(()=>
    {
        let data = products.map((pd)=>{
            return({id: pd.id, value: 0, label: pd.title})}
        );

        users.forEach((user, id)=>{
            user.orders.forEach((order, id)=>{
                let pd = order.productId;
                for(let i=0; i < data.length; i++)
                {
                    if(data[i].id === pd){
                        data[i].value += order.amount;
                    }
                }
            })
        })
        setTdata([...data])
    },[])

    return(
        <>
            <h3 style={{display: "flex", marginBottom: "5px"}}>Total Sold Products</h3>
            <PieChart
                series={[
                    {
                    data: tdata
                    ,
                    },
                ]}
                width={400}
                height={200}
                />
        </>
    )
}
export default TotalSoldProducts;