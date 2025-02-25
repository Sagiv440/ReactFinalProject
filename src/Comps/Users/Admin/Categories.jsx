import { useState, useEffect } from "react";
import Category from "./CategoriesComp/Category";

import { addDocument, getCollection, deleteDocument, updateDocument } from "../../../Utils/Firebase/FirebaseInterface";
import { useDispatch, useSelector } from "react-redux";

import { CATEGORY_COLLECTION , LOAD_CATEGORIES } from "../../../Utils/constants";

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

  const item = {

    color: "#363636",
    backgroundColor: "#efefef",
    borderRadius: "15px"
  }
  
  const text = {
    margin: "5px",
    display:"flex",
    justifyContent: "center",
    gap: "10px",
    fontSize: "18px",
    fontWeight: "bold",
  }

const Categories =()=>
{
    const [newCat, setNewCat] = useState("");

    const dispatch = useDispatch();
    const categoriess = useSelector((select)=>select.categories)

    const getCat = async()=>{
        let coll = await getCollection(CATEGORY_COLLECTION);
        dispatch({type: LOAD_CATEGORIES, payload: coll})
    }

    const NewCategory= async ()=>
    {
        if(newCat != "")
        {
            await addDocument({name: newCat}, CATEGORY_COLLECTION);
            getCat();
        }
        else
            console.log("Category must have a name");
    }
    const removeCategory =(cat)=>
    {
        deleteDocument(CATEGORY_COLLECTION, cat.id);
        getCat();
    }

    const UpdateCategory =(cat, newCat)=>
        {
            updateDocument(CATEGORY_COLLECTION, cat.id, {name: newCat});
            getCat();
        }


    return (
        <>
        <h2> Categories </h2><br/>
        <div style={localCard}>
        {categoriess.map((cat)=>
            {
                return (
                <div key={cat.id}>
                <Category name={cat} remove={removeCategory} update={UpdateCategory}/><br/>
                </div>
            )
            }
        )}
                <p style={text}><input type="text" onChange={(e)=>setNewCat(e.target.value)}/>
                <button style={item} onClick={()=>NewCategory()}><p style={text}>Add</p></button></p>
        </div>
        </>
    )
}
export default Categories;