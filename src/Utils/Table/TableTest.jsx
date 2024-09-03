import { useState } from "react";
import SmartTable from "./SmartTable";
import { TEST_TABLE } from "./TableConst";



const TableTest =()=>
{
    const [test, setTest] = useState(TEST_TABLE)
    return (
        <>
        <SmartTable table={test}/>
        </>
    )
}
export default TableTest;