import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Product from "./ProductsComp/Product";

import { PRODUCT_TEMPLATE, PRODUCT_COLLECTION, LOAD_PRODUCTS } from "../../../Utils/constants";
import { addDocument, getCollection, updateDocument } from "../../../Utils/Firebase/FirebaseInterface";


const text = {
    display: "flex",
    margin: "5px",
  }

  const localCard = {
    display: "flex",
    margin: "5px",
    width: '100%',
    borderRadius: "15px",
    backgroundColor: "#cecece",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
  }
  const cardLeft = {
    flex: "1",                 /* Take 2 parts of the available space */
    display: "flex",
    flexDirection: "column",   /* Vertical stacking (header, then list) */
    padding: '15px',
  }
  const cardRight = {
    flex: "2",                 /* Take 2 parts of the available space */
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: '15px',
  }

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
            <div style={{localCard}}>
            <h2>Products </h2><br/>
            {products.map((pro)=>
                {
                    return (
                    <div key={pro.id}>
                    <Product prod={pro} save={UpdateProduct}/>
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