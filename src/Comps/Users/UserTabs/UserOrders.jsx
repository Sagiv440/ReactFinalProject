import { useEffect, useState } from "react";
import SmartTable from "../../../Utils/Table/SmartTable"
import { TABLE_TEMP, LINE_TEMP, CELL_TEMP } from "../../../Utils/Table/TableConst";
import { useSelector } from "react-redux";


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
                    { ...CELL_TEMP, content: "Title"},
                    { ...CELL_TEMP, content: "Qty"},
                    { ...CELL_TEMP, content: "Total"},
                    { ...CELL_TEMP, content: "Date"},
                ]}
                let userDisplay = [];
                for(let i = 0; i < user.orders.length; i++)
                {
                    const product = products.find((prod) => prod.id === user.orders[i].productId);
                    userDisplay = [...userDisplay, { ...LINE_TEMP, cell: [
                        { ...CELL_TEMP, content: `${product.title}`},
                        { ...CELL_TEMP, content: `${user.orders[i].amount}`},
                        { ...CELL_TEMP, content: `$${user.orders[i].amount * product.price}`},
                        { ...CELL_TEMP, content: `${user.orders[i].date}`},
                    ]}]
                }

                setCustTable({ ...custTable, lines: [titles, ...userDisplay]})
            }
            getUsers();
        },[products, user]
    )
            

    return (
        <div class="card">
        <SmartTable table={custTable}/>
        </div>
    )
}
export default UserOrders;