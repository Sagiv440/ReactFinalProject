import { useState, useEffect } from "react";
import { useSelector } from "react-redux"
import { PRODUCT_TEMPLATE } from "../../../../Utils/constants";
import SmartTable from "../../../../Utils/Table/SmartTable";
import { TABLE_TEMP, LINE_TEMP, CELL_TEMP } from "../../../../Utils/Table/TableConst";


const Product =({prod, save, remove})=>
{
    const [nProduct, setNProduct] = useState({...PRODUCT_TEMPLATE, 
        title: prod.title,
        category: prod.category,
        price: prod.price,
    
        description: prod.description,
        imageLink: prod.imageLink,
    })
    const [table, setTable] = useState(TABLE_TEMP);
    const categories = useSelector((e)=>e.categories);
    const users = useSelector((e)=>e.users_admin);

    const getProducts =()=>
        {
            const titles = { ...LINE_TEMP, cell: [
                { ...CELL_TEMP, content: "Product"},
                { ...CELL_TEMP, content: "Qty"},
                { ...CELL_TEMP, content: "Date"},
            ]}
            let userDisplay = [];
            for(let i = 0; i < users.length; i++)
            {
                const order = users[i].orders.find((obj) => obj.productId === prod.id);
                if(order != null){
                    userDisplay = [...userDisplay, { ...LINE_TEMP, cell: [
                        { ...CELL_TEMP, content: `${users[i].name.first}`},
                        { ...CELL_TEMP, content: `${order.amount}`},
                        { ...CELL_TEMP, content: `${order.date}`},
                    ]}]
                }
            }
            return{ ...TABLE_TEMP, lines: [titles, ...userDisplay]}
        }
    useEffect(()=>{
        let tb = getProducts();
        setTable(tb);
    },[users, categories])

    return (
    <div style={{display:'flex', justifyContent: 'space-between', alignItems: 'flex-start'}}>
    <div class="left">
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
    </div>
    <div class="left">
    Price: <input type="number" onChange={(e)=>setNProduct({ ...nProduct, price: e.target.value})} defaultValue={prod.price}/><br/>
    Link to pic: <input type="text" onChange={(e)=>setNProduct({ ...nProduct, imageLink: e.target.value})} defaultValue={prod.imageLink}/><br/>
    <SmartTable table={table}/>
    <button onClick={()=>save(prod.id, nProduct)}>Save</button><br/>
    </div>
    </div>
    )
}
export default Product