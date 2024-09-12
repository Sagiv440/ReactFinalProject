import { useSelector } from "react-redux";
import { updateDocument } from "../../../Utils/Firebase/FirebaseInterface";
import { USERS_COLLECTION } from "../../../Utils/constants";
import { useState } from "react";
import { Button, Checkbox, FormControlLabel, FormGroup, TextField } from "@mui/material";

const UserAccount = ()=>
    {
        const user = useSelector((select)=>select.curUser);
        const [account, setAccount] = useState({
            //Credential
            username: user.username,
            password: user.password,
        
            //Personal
            name: user.name,
            jointDate: user.jointDate,
        
            //Promissions
            viewOrders: user.viewOrders,
        
            orders: user.orders
        })
        
        const SaveUpdates = async ()=>
        {
            await updateDocument(USERS_COLLECTION, user.id, account);
            console.log("New user added! " + account.username);
        }
        
        return (
            <>
            <div class="card">
                <br/><TextField id="filled-basic" label="First Name" variant="filled" type="text" defaultValue={account.name.first} onChange={(e)=> setAccount({ ...account, name: {...account.name, first: e.target.value}})}></TextField><br/>
                <br/><TextField id="filled-basic" label="Last Name" variant="filled" type="text" defaultValue={account.name.last} onChange={(e)=> setAccount({ ...account, name: {...account.name, last: e.target.value}})}></TextField><br/>
                <br/><TextField id="filled-basic" label="Username" variant="filled" type="text" defaultValue={account.username} onChange={(e)=> setAccount({ ...account, username: e.target.value})}></TextField><br/>
                <br/><TextField id="filled-basic" label="Password" variant="filled" type="password" defaultValue={account.password} onChange={(e)=> setAccount({ ...account, password: e.target.value})}></TextField><br/>
                <br/>
                <input type="checkbox" defaultChecked={account.viewOrders} onChange={(e)=>setAccount({ ...account, viewOrders: e.target.checked})}></input> Allow other to see my orders<br/>
                <Button variant="contained"  onClick={()=>SaveUpdates()}>Save</Button>
            </div>
            </>
        )
    }
export default UserAccount;