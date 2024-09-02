import { useState } from "react"
import { deleteDocument } from "../../../../Utils/Firebase/FirebaseInterface";
import { CATEGORY_COLLECTION } from "../../../../Utils/constants";

const Category =({name, update, remove})=>
{
    const [isUpdate, setIsUpdate] = useState(false);
    const [newName, setNewName] = useState("");

    return (<>

    {!isUpdate &&<div>{name.name }
    <button onClick={()=>setIsUpdate(!isUpdate)}>Update</button>
    <button onClick={()=>remove(name)}>Remove</button></div>}

    {isUpdate &&<div>name: <input type="text" onChange={(e)=>setNewName(e.target.value)}/> 
    <button onClick={()=>{setIsUpdate(!isUpdate); update(name, newName)}}>Update</button></div>}
    
    </>)
}
export default Category