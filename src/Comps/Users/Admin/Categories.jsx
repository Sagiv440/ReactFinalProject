import { useState, useEffect } from "react";
import Category from "./CategoriesComp/Category";

import { addDocument, getCollection, deleteDocument, updateDocument } from "../../../Utils/Firebase/FirebaseInterface";
import { useDispatch, useSelector } from "react-redux";

import { CATEGORY_COLLECTION , LOAD_CATEGORIES } from "../../../Utils/constants";


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
        <div>
        {categoriess.map((cat)=>
            {
                return (
                <>
                <Category key={cat.id} name={cat} remove={removeCategory} update={UpdateCategory}/><br/>
                </>
            )
            }
        )}
        </div>
        <input type="text" onChange={(e)=>setNewCat(e.target.value)}/>
        <button onClick={()=>NewCategory()}>Add</button>
        </>
    )
}
export default Categories;