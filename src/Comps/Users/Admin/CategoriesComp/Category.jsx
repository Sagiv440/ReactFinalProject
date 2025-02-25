import { useState } from "react"


const localCard = {
    display: "flex",
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
    fontSize: "18px",
    fontWeight: "bold",
  }
  const nameee = {
    margin: "5px",
    display:"flex",
    fontSize: "22px",
    fontWeight: "bold",
  }

const Category =({name, update, remove})=>
{
    const [isUpdate, setIsUpdate] = useState(false);
    const [newName, setNewName] = useState("");

    return (<>

    {!isUpdate &&<div style={localCard}>
        <p style={nameee}>{name.name }</p>
        <p style={text}>
            <button style={item} onClick={()=>setIsUpdate(!isUpdate)}><p style={text}>Update</p></button>
            <button style={item} onClick={()=>remove(name)}><p style={text}>Remove</p></button>
            </p>
    </div>}

    {isUpdate &&<div style={localCard}>
        <p style={text}><input type="text" onChange={(e)=>setNewName(e.target.value)} defaultValue={name.name }/></p>
        <button style={item} onClick={()=>{setIsUpdate(!isUpdate); update(name, newName)}}><p style={text}>Update</p></button>
        <button style={item} onClick={()=>{setIsUpdate(!isUpdate)}}><p style={text}>Cancel</p></button>
    </div>}
    
    </>)
}
export default Category