import { useState } from "react"

const LogPage = ()=>
{
    const [name, setName] = useState("Test")

    const loginFunc =()=>
    {
        window.location.href = `User/${name}`
    }

    return (
        <>
        <div>
            User Name:<input type="text"></input><br/>
            Password: <input type="password"></input><br/>
            <button onClick={()=> loginFunc()}>Login</button><br/><br/>
            New User? <a href="Registration">Register</a>
        </div>
        </>
    )
}
export default LogPage;