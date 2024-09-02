import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Product from "./ProductsComp/Product";

import { PRODUCT_TEMPLATE, PRODUCT_COLLECTION, LOAD_PRODUCTS } from "../../../Utils/constants";
import { addDocument, getCollection, updateDocument } from "../../../Utils/Firebase/FirebaseInterface";

useState

const AdminProducts =()=>
    {
        const products = useSelector((select)=>select.products);
        const dispatch = useDispatch();

        const getProd = async()=>{
            let prod = await getCollection(PRODUCT_COLLECTION);
            dispatch({type: LOAD_PRODUCTS, payload: prod})
        }

        const addNewProduct = async ()=>
        {
            await addDocument(PRODUCT_TEMPLATE, PRODUCT_COLLECTION);
            getProd();
        }

        const UpdateProduct = async (prodID, newProd)=>
        {
            updateDocument(PRODUCT_COLLECTION, prodID, newProd);
            getProd();
        }

        return (
            <>
            <h2>Products </h2><br/>
            <div>
            {products.map((pro)=>
                {
                    return (
                    <div key={pro.id}>
                    <Product prod={pro} save={UpdateProduct}/> <br/>
                    </div>
                )
                }
            )}
            </div><br/>
            <button onClick={()=>addNewProduct()}>Add New</button>
            </>
        )
    }
    export default AdminProducts;