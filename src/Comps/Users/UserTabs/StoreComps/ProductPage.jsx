import { useSelector } from "react-redux";
import ProductTab from "./ProductTab";


const ProductPage =({products})=>
{
    const uOrders = useSelector((e)=>e.public_orders)

    const getTotalBought =(pId)=>
    {
        let tAmount = 0;
        for(let i = 0; i < uOrders.length; i++){
            if(uOrders[i].productId == pId){
                tAmount += uOrders[i].amount;
            }
        }
        return (tAmount);
    }

    return(
        <>
            {products.map((prod)=>{
                return(
                    <div key={prod.id}><ProductTab product={prod} bought={getTotalBought(prod.id)}/></div>
                )
            })}
        </>
    )
}
export default ProductPage;