import { useEffect, useState } from "react";
import { TABLE_TEMP, LINE_TEMP, CELL_TEMP } from "../../../Utils/Table/TableConst";
import { USERS_COLLECTION } from "../../../Utils/constants";
import SmartTable from "../../../Utils/Table/SmartTable";
import { getCollection } from "../../../Utils/Firebase/FirebaseInterface";
import { useSelector } from "react-redux";

const Customers =()=>
    {
        const [custTable, setCustTable] = useState(TABLE_TEMP);
        const products = useSelector((e)=> e.products)
        const users = useSelector((e)=>e.users_admin)
        const getProducts =(user)=>
        {
            const titles = { ...LINE_TEMP, cell: [
                { ...CELL_TEMP, content: "Product"},
                { ...CELL_TEMP, content: "Qty"},
                { ...CELL_TEMP, content: "Date"},
            ]}
            let userDisplay = [];
            for(let i = 0; i < user.orders.length; i++)
            {
                const product = products.find((obj) => obj.id === user.orders[i].productId);
                userDisplay = [...userDisplay, { ...LINE_TEMP, cell: [
                    { ...CELL_TEMP, content: `${product.title}`},
                    { ...CELL_TEMP, content: `${user.orders[i].amount}`},
                    { ...CELL_TEMP, content: `${user.orders[i].date}`},
                ]}]
            }
            return{ ...TABLE_TEMP, lines: [titles, ...userDisplay]}
        }

        useEffect(()=>
        {
            const getUsers = async () =>
            {
                //const users = await getCollection(USERS_COLLECTION);
                const titles = { ...LINE_TEMP, cell: [
                    { ...CELL_TEMP, content: "Full Name"},
                    { ...CELL_TEMP, content: "Joined At"},
                    { ...CELL_TEMP, content: "Product Bought"},
                ]}
                let userDisplay = [];
                for(let i = 0; i < users.length; i++)
                {
                    userDisplay = [...userDisplay, { ...LINE_TEMP, cell: [
                        { ...CELL_TEMP, content: `${users[i].name.first} ${users[i].name.last}`},
                        { ...CELL_TEMP, content: `${users[i].jointDate}`},
                        { ...CELL_TEMP, content: getProducts(users[i])},
                    ]}]
                }

                setCustTable({ ...custTable, lines: [titles, ...userDisplay]})
            }
            getUsers();

        },[users])

        return (
            <>
            <h2> Customers </h2><br/>
            <SmartTable table={custTable}/>
            </>
        )
    }
    export default Customers;