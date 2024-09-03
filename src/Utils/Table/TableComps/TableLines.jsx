import TableCell from "./TableCell";

const TableLines =({line, id})=>
{
    return(<>
            {line.cell.map((cell, id)=>
                    {
                        return(<td key={id} style={{ border: '2px solid black'}}><TableCell cell={cell} id={id}/></td>)
                    }
                )
            }
    </>)
}
export default TableLines;