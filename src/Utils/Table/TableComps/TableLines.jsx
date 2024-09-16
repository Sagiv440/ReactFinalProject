import { useMemo } from "react";
import TableCell from "./TableCell";

const TableLines =({line, id})=>
{
    
    return(<>
            {line.cell.map((cl, id)=>
                    {
                        if(Object.keys(cl.style).length === 0 || cl.style == undefined){
                            return(<td key={id}><TableCell cell={cl} id={id}/></td>)
                        }else{
                            return(<td key={id} style={cl.style}><TableCell cell={cl} id={id}/></td>)
                        }
                    }
                )
            }
    </>)
}
export default TableLines;