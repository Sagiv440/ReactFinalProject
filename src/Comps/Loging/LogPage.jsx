import { useState } from "react"
import { LogUser } from "../../Utils/Firebase/FirebaseInterface"
import { capitalizeFirstLetter } from "../../Utils/utils"

import { ADMIN_COLLECTION, USERS_COLLECTION } from "../../Utils/constants"

const LogPage = ()=>
{
    const [name, setName] = useState("")
    const [password, setPassword] = useState("");

    const loginFunc = async ()=>
    {
        if( await LogUser(ADMIN_COLLECTION, name, password) == true)
            {
                window.location.href = `User/${capitalizeFirstLetter(name)}`
            }
        else if( await LogUser(USERS_COLLECTION, name, password) == true)
            {
                window.location.href = `User/${capitalizeFirstLetter(name)}`
            }
    }

    return (
        <>
        <div>
            User Name:<input type="text" onChange={(e)=> setName(e.target.value)}></input><br/>
            Password: <input type="password" onChange={(e)=> setPassword(e.target.value)}></input><br/>
            <button onClick={()=> loginFunc()}>Login</button><br/><br/>
            New User? <a href="Registration">Register</a>
        </div>
        </>
    )
}
export default LogPage;