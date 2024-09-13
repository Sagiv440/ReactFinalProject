import SearchTap from "./StoreComps/SearchTap";
import ProductPage from "./StoreComps/ProductPage";
import UserCart from "./StoreComps/UserCart";

const UserProducts =()=>
{
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
            <SearchTap/>
            </div>
            <ProductPage/>
        </div>
    </div>
    </>

    
)
}
export default UserProducts;