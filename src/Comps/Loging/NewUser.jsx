import { Button, Checkbox, FormControlLabel, FormGroup, TextField } from "@mui/material";
import { isDocument, addDocument } from "../../Utils/Firebase/FirebaseInterface";
import { USER_TEMPLATE, USERS_COLLECTION } from "../../Utils/constants";
import { getDate } from "../../Utils/utils"; 
import { useState } from "react";

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

const RegistrationPage = ()=>
    {
        const [name, setName] = useState({first: "", last: ""})
        const [username, setUsername] = useState("");
        const [password, setPassword] = useState("");
        const [viewOrders, setViewOrders] = useState(false);
        
        const addNewUser = async ()=>
        {
            if(!await isDocument(username, "username", USERS_COLLECTION)) // value,  type, collection
            {
                let N_user = {...USER_TEMPLATE}
                N_user.name.first = name.first;
                N_user.name.last = name.last;
                N_user.username = username;
                N_user.password = password;
                N_user.viewOrders = viewOrders;
                N_user.jointDate = getDate();

                await addDocument(N_user, USERS_COLLECTION);
                console.log("New user added! " + username);
                window.location.href = `/`;
            }
            {
                console.log("User Exsist already !");
            }
        }
        
        return (
            <>
            <div class="centerScreen">
                <div class="card">
                    <h1> Create New User</h1>
                <br/><TextField id="filled-basic" label="First Name" variant="filled" type="text" onChange={(e)=> setName({ ...name, first: e.target.value})}></TextField><br/>
                <br/><TextField id="filled-basic" label="Last Name" variant="filled" type="text" onChange={(e)=> setName({ ...name, last: e.target.value})}></TextField><br/>
                <br/><TextField id="filled-basic" label="Username" variant="filled" type="text" onChange={(e)=> setUsername(e.target.value)}></TextField><br/>
                <br/><TextField id="filled-basic" label="Password" variant="filled" type="password" onChange={(e)=> setPassword(e.target.value)}></TextField><br/><br/>
                <FormGroup>
                <FormControlLabel control={<Checkbox defaultChecked />} label="Allow other to see my orders" onChange={(e)=>setViewOrders(e.target.checked)}/>
                </FormGroup>
                <Button variant="contained" onClick={()=>addNewUser()}>Create</Button>
                </div>
            </div>
            </>
        )
    }
    export default RegistrationPage;