import SearchTap from "./StoreComps/SearchTap";
import ProductPage from "./StoreComps/ProductPage";
import UserCart from "./StoreComps/UserCart";
import { useSelector } from "react-redux";
import { useMemo, useState } from "react";
import { SEARCH_TEMP } from "../../../Utils/constants";

const tabStyle = {
    display: "flex",
    justifyContent: "center",    

  }
  const buttonStyle = { 
    color: "black",
    borderRadius: "15px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
    backgroundColor: "#f0f0f0",
  }

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

        function transformBox() {
            const box = document.getElementById('id');
            box.classList.toggle('callaps');
        }
return (

    <div style={tabStyle}>

        <div id="id" class="left-container">
            <UserCart/>
        </div>
        <button style={buttonStyle} onClick={()=>transformBox()}>b</button>
        <div class="right-container">
            <div class="header">
            <SearchTap search={search} setSearch={setSearch} maxPrice={maxp}/>
            </div>
            <ProductPage products={serchedProd}/>
        </div>
    </div>

    
)
}
export default UserProducts;