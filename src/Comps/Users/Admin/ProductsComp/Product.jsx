import { useState } from "react";
import { useSelector } from "react-redux"
import { PRODUCT_TEMPLATE } from "../../../../Utils/constants";


const Product =({prod, save, remove})=>
{
    const [nProduct, setNProduct] = useState({...PRODUCT_TEMPLATE, 
        title: prod.title,
        category: prod.category,
        price: prod.price,
    
        description: prod.description,
        imageLink: prod.imageLink,
    })


    const categories = useSelector((e)=>e.categories);
    return (
    <>
    Title: <input type="text" onChange={(e)=>setNProduct({ ...nProduct, title: e.target.value})} defaultValue={prod.title}/><br/>
    Category:<select onChange={(e)=>setNProduct({ ...nProduct, category: e.target.value})}>
                {
                    categories.map((cat) =>
                    {
                        return(<option key={cat.id} value={cat.name}>{cat.name}</option>)
                    }
                    )
                }
            </select><br/>
    Discription: <input type="text" onChange={(e)=>setNProduct({ ...nProduct, description: e.target.value})} defaultValue={prod.description}/><br/>
    Price: <input type="number" onChange={(e)=>setNProduct({ ...nProduct, price: e.target.value})} defaultValue={prod.price}/><br/>
    Link to pic: <input type="text" onChange={(e)=>setNProduct({ ...nProduct, imageLink: e.target.value})} defaultValue={prod.imageLink}/><br/>
    <button onClick={()=>save(prod.id, nProduct)}>Save</button><br/>
    </>
    )
}
export default Product