import SmartTable from "../SmartTable";


const TableCell =({cell, id})=>
{

    return(<>
        {typeof cell.content == "object" && <SmartTable table={cell.content}/>}
        {typeof cell.content != "object" && <>{cell.content}</>}
    </>)
}
export default TableCell;