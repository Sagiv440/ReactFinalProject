import { useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import Button from '@mui/material/Button'

import { LogUser } from "../../Utils/Firebase/FirebaseInterface"
import { capitalizeFirstLetter } from "../../Utils/utils"

import { ADMIN_COLLECTION, USERS_COLLECTION, INIT_USER, USER_TEMPLATE} from "../../Utils/constants"
import { TextField } from "@mui/material";

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
        <div class="centerScreen">
            <div class="card">
                <h1>Nex Generation E-Commerce</h1>
                <TextField id="filled-basic" label="Username" variant="filled" type="text" onChange={(e)=> setUsername(e.target.value)}></TextField><br/><br/>
                <TextField id="filled-basic" label="Password" variant="filled"type="password" onChange={(e)=> setPassword(e.target.value)}></TextField><br/><br/>

                <Button variant="contained"  onClick={()=> loginFunc()}>Login</Button><br/><br/>

                New User? <a href="Registration">Register</a>
            </div>
       </div>
        </>
    )
}
export default LogPage;