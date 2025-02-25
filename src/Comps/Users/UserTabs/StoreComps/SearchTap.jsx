import { Button, MenuItem, Select, Slider } from "@mui/material";
import { useSelector } from "react-redux";
import { SEARCH_TEMP } from "../../../../Utils/constants";
import { useMemo } from "react";

const item = {
    margin: "5px",
    color: "#363636",
    backgroundColor: "#efefef",
    borderRadius: "05px"
  }
  const text = {
    margin: "5px",
  }

const tabStyle = {
    display: "flex",
    justifyContent: "center",

  }

const SearchTap =({search, setSearch, maxPrice})=>
{
    const categories = useSelector((e)=>e.categories);

    return(
        <div style={tabStyle}>
            <p style={text}>Category:</p>
            <select style={item} 
              labelId="demo-select-small-label"
              id="demo-select-small"
              label="Category"
              onChange={(e)=>setSearch({ ...search, category: e.target.value})}>
                    <option value=""><em>None</em></option>
                    {
                        categories.map((cat) =>
                        {
                            return(<option  key={cat.id} value={cat.name}>{cat.name}</option>)
                        }
                        )
                    }
            </select>
            <p style={text}>Price:</p>
            <input type="range" max={parseInt(maxPrice,10)} style={item} defaultValue={search.price} onChange={(e)=>setSearch({ ...search, price: e.target.value})}></input>    
            <p style={text}>Title:</p>
            <input type="text" style={item} defaultValue={search.title} onChange={(e)=>setSearch({ ...search, title: e.target.value})}></input> <br/>
            <Button variant="contained" onClick={()=>setSearch({...search, title: "", category: "", price: maxPrice})} >Clear</Button>  
        </div>
    )
}
export default SearchTap;