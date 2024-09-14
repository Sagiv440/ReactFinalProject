import { useSelector } from "react-redux";
import ProductTab from "./ProductTab";


const ProductPage =({products})=>
{
    return(
        <>
            {products.map((prod)=>{
                return(
                    <div key={prod.id}><ProductTab product={prod}/></div>
                )
            })}
        </>
    )
}
export default ProductPage;