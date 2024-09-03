import TableLines from "./TableComps/TableLines";

const SmartTable =({table})=>
{
    

    return(
        <table style={{ border: '2px solid black'}}>
            <tfoot>
            {table.lines.map((line, id)=>
            {
                return(<tr key={id}><TableLines line={line}/></tr>)
            })}
            </tfoot>
        </table>
    )
}
export default SmartTable;