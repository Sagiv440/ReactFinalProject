import { useEffect, useState } from "react";
import { TABLE_TEMP, LINE_TEMP, CELL_TEMP } from "../../../Utils/Table/TableConst";
import SmartTable from "../../../Utils/Table/SmartTable";
import { useSelector } from "react-redux";

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
    padding: "5px",
    backgroundColor: "#f1f1f1",
}
const cellTitleStyle = {
    padding: "5px",
    backgroundColor: "#c9c9c9",
    fontWeight: "bold",
}

const Customers =()=>
    {
        const [custTable, setCustTable] = useState(TABLE_TEMP);
        const products = useSelector((e)=> e.products)
        const users = useSelector((e)=>e.users_admin)
        const getProducts =(user)=>
        {
            const titles = { ...LINE_TEMP, style: {...LineStyle}, cell: [
                { ...CELL_TEMP, style: {...cellTitleStyle}, content: "Product"},
                { ...CELL_TEMP, style: {...cellTitleStyle}, content: "Qty"},
                { ...CELL_TEMP, style: {...cellTitleStyle}, content: "Date"},
            ]}
            let userDisplay = [];
            for(let i = 0; i < user.orders.length; i++)
            {
                const product = products.find((obj) => obj.id === user.orders[i].productId);
                userDisplay = [...userDisplay, { ...LINE_TEMP, style: {...LineStyle}, cell: [
                    { ...CELL_TEMP, style: {...cellStyle}, content: `${product.title}`},
                    { ...CELL_TEMP, style: {...cellStyle}, content: `${user.orders[i].amount}`},
                    { ...CELL_TEMP, style: {...cellStyle}, content: `${user.orders[i].date}`},
                ]}]
            }
            return{ ...TABLE_TEMP, style: {...tableStyle}, lines: [titles, ...userDisplay]}
        }

        useEffect(()=>
        {
            const getUsers = async () =>
            {
                //const users = await getCollection(USERS_COLLECTION);
                const titles = { ...LINE_TEMP, cell: [
                    { ...CELL_TEMP, style: {...cellTitleStyle}, content: "Full Name"},
                    { ...CELL_TEMP, style: {...cellTitleStyle}, content: "Joined At"},
                    { ...CELL_TEMP, style: {...cellTitleStyle}, content: "Product Bought"},
                ]}
                let userDisplay = [];
                for(let i = 0; i < users.length; i++)
                {
                    userDisplay = [...userDisplay, { ...LINE_TEMP, cell: [
                        { ...CELL_TEMP, style: {...cellStyle}, content: `${users[i].name.first} ${users[i].name.last}`},
                        { ...CELL_TEMP, style: {...cellStyle}, content: `${users[i].jointDate}`},
                        { ...CELL_TEMP, style: {...cellStyle}, content: getProducts(users[i])},
                    ]}]
                }

                setCustTable({ ...custTable, style: {...tableStyle}, lines: [titles, ...userDisplay]})
            }
            getUsers();

        },[users])

        return (
            <>
            <h2> Customers </h2><br/>
            <div style={{    display:"flex", justifyContent: "center",}}>
                <SmartTable table={custTable}/>
            </div>
            </>
        )
    }
    export default Customers;