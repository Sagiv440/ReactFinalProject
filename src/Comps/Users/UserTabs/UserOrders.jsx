import { useEffect, useState } from "react";
import SmartTable from "../../../Utils/Table/SmartTable"
import { TABLE_TEMP, LINE_TEMP, CELL_TEMP } from "../../../Utils/Table/TableConst";
import { useSelector } from "react-redux";

const tableStyle = {
    backgroundColor: "#bdbdbd",
    fontSize: "18px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
}

const LineStyle = {
    padding: "8px",
    textAlign: 'left',
}

const cellStyle = {
    padding: "5px",
}
const cellTitleStyle = {
    padding: "5px",
    backgroundColor: "#c9c9c9",
    fontWeight: "bold",
}

const UserOrders =()=>
{
    const user = useSelector((select)=>select.curUser);
    const products = useSelector((select)=>select.products)
    const [custTable, setCustTable] = useState(TABLE_TEMP);

    useEffect(()=>
        {
            const getUsers = async () =>
            {
                //const users = await getCollection(USERS_COLLECTION);
                const titles = { ...LINE_TEMP, cell: [
                    { ...CELL_TEMP, style: {...cellTitleStyle}, content: "Title"},
                    { ...CELL_TEMP, style: {...cellTitleStyle}, content: "Qty"},
                    { ...CELL_TEMP, style: {...cellTitleStyle}, content: "Total"},
                    { ...CELL_TEMP, style: {...cellTitleStyle}, content: "Date"},
                ]}
                let userDisplay = [];
                for(let i = 0; i < user.orders.length; i++)
                {
                    const product = products.find((prod) => prod.id === user.orders[i].productId);
                    const bcolor = i%2 == 0 ? "#f1f1f1" : "#616161";
                    const color = i%2 != 0 ? "white" : "black";
                    userDisplay = [...userDisplay, { ...LINE_TEMP, cell: [
                        { ...CELL_TEMP, style: {...cellStyle, backgroundColor: bcolor, color: color}, content: `${product.title}`},
                        { ...CELL_TEMP, style: {...cellStyle, backgroundColor: bcolor, color: color}, content: `${user.orders[i].amount}`},
                        { ...CELL_TEMP, style: {...cellStyle, backgroundColor: bcolor, color: color}, content: `$${user.orders[i].amount * product.price}`},
                        { ...CELL_TEMP, style: {...cellStyle, backgroundColor: bcolor, color: color}, content: `${user.orders[i].date}`},
                    ]}]
                }

                setCustTable({ ...custTable, style: {...tableStyle}, lines: [titles, ...userDisplay]})
            }
            getUsers();
        },[products, user]
    )
            

    return (
        <div style={{ display: "flex",flexDirection: "column",}}>
        <SmartTable table={custTable}/>
        </div>
    )
}
export default UserOrders;