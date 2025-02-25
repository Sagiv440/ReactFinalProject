import { useMemo } from "react";
import TableLines from "./TableComps/TableLines";

const SmartTable =({table})=>
{
    const tableStyle = useMemo(()=>
    {
        if(Object.keys(table.style).length === 0 || table.style == undefined){
            return({})
        }else{
            return({...table.style})
        }
    })

    return(
        <table style={tableStyle}>
            <tfoot>
            {table.lines.map((line, id)=>
            {
                if(Object.keys(line.style).length === 0 || line.style == undefined){
                    return(<tr key={id}><TableLines line={line}/></tr>)
                }
                return(<tr style={line.style} key={id}><TableLines line={line}/></tr>)
                
            })}
            </tfoot>
        </table>
    )
}
export default SmartTable;