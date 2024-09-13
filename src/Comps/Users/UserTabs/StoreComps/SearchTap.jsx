import { Button, MenuItem, Select, Slider } from "@mui/material";
import { useSelector } from "react-redux";

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

const SearchTap =()=>
{
    const categories = useSelector((e)=>e.categories);
    return(
        <div style={tabStyle}>
            <p style={text}>Category:</p>
            <select style={item} 
            labelId="demo-select-small-label"
            id="demo-select-small"
            label="Category">
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
            <input type="range" style={item} ></input>    
            <p style={text}>Title:</p>
            <input type="text" style={item} ></input> <br/>
            <Button variant="contained" >Clear</Button>  
        </div>
    )
}
export default SearchTap;