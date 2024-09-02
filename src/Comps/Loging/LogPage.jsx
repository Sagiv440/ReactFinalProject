import { useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { LogUser } from "../../Utils/Firebase/FirebaseInterface"
import { capitalizeFirstLetter } from "../../Utils/utils"

import { ADMIN_COLLECTION, USERS_COLLECTION, INIT_USER, USER_TEMPLATE} from "../../Utils/constants"

const LogPage = ()=>
{
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("");

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const loginFunc = async ()=>
    {
        let admin = await LogUser(ADMIN_COLLECTION, username, password)
        if( admin != null)
            {
                dispatch({type: INIT_USER, payload: { ...admin }});
                navigate(`Admin/${username}`);
            }
        else {
            admin = await LogUser(USERS_COLLECTION, username, password)
            if(admin != null)
                {
                    dispatch({type: INIT_USER, payload: { ...admin }});
                    navigate(`User/${username}`);
                }
            else{
                console.log("Wrong Username Or Password!")
            }
        }
    }

    return (
        <>
        <div>
            Username:<input type="text" onChange={(e)=> setUsername(e.target.value)}></input><br/>
            Password: <input type="password" onChange={(e)=> setPassword(e.target.value)}></input><br/>
            <button onClick={()=> loginFunc()}>Login</button><br/><br/>

            New User? <a href="Registration">Register</a>
        </div>
        </>
    )
}
export default LogPage;