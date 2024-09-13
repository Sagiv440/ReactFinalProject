import { useSelector } from "react-redux";
import ProductTab from "./ProductTab";


const ProductPage =()=>
{
    const products = useSelector((select)=> select.products)
    return(
        <>
            {products.map((prod)=>{
                return(
                    <ProductTab product={prod}/>
                )
            })}
        </>
    )
}
export default ProductPage;