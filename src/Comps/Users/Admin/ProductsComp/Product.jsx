import { useState, useEffect } from "react";
import { useSelector } from "react-redux"
import { PRODUCT_TEMPLATE } from "../../../../Utils/constants";
import SmartTable from "../../../../Utils/Table/SmartTable";
import { TABLE_TEMP, LINE_TEMP, CELL_TEMP } from "../../../../Utils/Table/TableConst";
import { Button } from "@mui/material";

const localCard = {
    display: "flex",
    flexDirection: "column",
    margin: "15px",
    padding: "10px",
    width: '100%',
    borderRadius: "15px",
    backgroundColor: "#cecece",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
  }

  const left = {
    display: "flex",
    flexDirection: "column",
    top: "50%",
    width: "100%",
    textAlign: "left",
    fontSize: "18px",
  }
  const text = {
    margin: "5px",
    display:"flex",
  }

const tableStyle = {
    backgroundColor: "black",
    fontSize: "18px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
}

const LineStyle = {
    padding: "8px",
    textAlign: 'left',
}

const cellStyle = {
    padding: "2px",
    backgroundColor: "#f1f1f1",
}
const cellTitleStyle = {
    padding: "2px",
    backgroundColor: "#c9c9c9",
    fontWeight: "bold",
}

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
                { ...CELL_TEMP, style: {...cellTitleStyle}, content: "Product"},
                { ...CELL_TEMP, style: {...cellTitleStyle}, content: "Qty"},
                { ...CELL_TEMP, style: {...cellTitleStyle}, content: "Date"},
            ]}
            let userDisplay = [];
            for(let i = 0; i < users.length; i++)
            {
                const order = users[i].orders.find((obj) => obj.productId === prod.id);
                if(order != null){
                    userDisplay = [...userDisplay, { ...LINE_TEMP, cell: [
                        { ...CELL_TEMP, style: {...cellStyle}, content: `${users[i].name.first}`},
                        { ...CELL_TEMP, style: {...cellStyle}, content: `${order.amount}`},
                        { ...CELL_TEMP, style: {...cellStyle}, content: `${order.date}`},
                    ]}]
                }
            }
            return{ ...TABLE_TEMP, style: {...tableStyle}, lines: [titles, ...userDisplay]}
        }
    useEffect(()=>{
        let tb = getProducts();
        setTable(tb);
    },[users, categories])

    return (
    <div style={localCard}>
        <div style={{display: "flex"}}>
            <div style={left}>
                <p style={text}>Title: <input type="text" onChange={(e)=>setNProduct({ ...nProduct, title: e.target.value})} defaultValue={prod.title}/></p>
                <p style={text}>Category:<select defaultChecked onChange={(e)=>setNProduct({ ...nProduct, category: e.target.value})}>
                            {
                                categories.map((cat) =>
                                {
                                    if(cat.name == prod.category){
                                        return(<option selected key={cat.id} value={cat.name}>{cat.name}</option>)
                                    }else{
                                        return(<option key={cat.id} value={cat.name}>{cat.name}</option>)
                                    }
                                }
                                )
                            }
                        </select></p>
                        <p style={text}>Discription:</p> <p style={text}><textarea rows="5" cols="35" onChange={(e)=>setNProduct({ ...nProduct, description: e.target.value})} defaultValue={prod.description}/></p>
            </div>
            <div style={left}>
                <p style={text}>Price: <input type="number" onChange={(e)=>setNProduct({ ...nProduct, price: e.target.value})} defaultValue={parseInt(prod.price,10)}/></p>
                <p style={text}>Link to pic: <input type="text" onChange={(e)=>setNProduct({ ...nProduct, imageLink: e.target.value})} defaultValue={prod.imageLink}/></p>
                <p style={text}><SmartTable table={table}/></p>
            
            </div>
        </div>
        <Button variant="contained" onClick={()=>save(prod.id, nProduct)}>Save</Button>
    </div>
    )
}
export default Product