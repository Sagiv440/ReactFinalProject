import SearchTap from "./StoreComps/SearchTap";
import ProductPage from "./StoreComps/ProductPage";
import UserCart from "./StoreComps/UserCart";
import { useSelector } from "react-redux";
import { useMemo, useState } from "react";
import { SEARCH_TEMP } from "../../../Utils/constants";

const UserProducts =()=>
{
    const products = useSelector((select)=> select.products)
    const maxp = useSelector((e)=>e.maxPrice)
    const [search, setSearch] = useState({...SEARCH_TEMP,price: maxp})
    const serchedProd = useMemo(()=> 
        products.filter((prod) => {
        return (prod.title.toLowerCase().includes(search.title.toLowerCase()) 
            && prod.category.toLowerCase().includes(search.category.toLowerCase())
            && (parseInt(prod.price,10) <= parseInt(search.price,10))
        )

        }),[search])


return (
    
    <>
    <div class="main-container">

        <div class="left-container">
            <ul>
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
            <li>Item 4</li>
            <li>Item 5</li>
            <input type="range"></input>
            </ul>
        </div>
        <div class="right-container">
            <div class="header">
            <SearchTap search={search} setSearch={setSearch} maxPrice={maxp}/>
            </div>
            <ProductPage products={serchedProd}/>
        </div>
    </div>
    </>

    
)
}
export default UserProducts;