import { useSelector } from "react-redux";
import { updateDocument } from "../../../Utils/Firebase/FirebaseInterface";
import { USERS_COLLECTION } from "../../../Utils/constants";
import { useState } from "react";

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
            <div>
                First Name:<br/><input type="text" defaultValue={account.name.first} onChange={(e)=> setAccount({ ...account, name: {...account.name, first: e.target.value}})}></input><br/>
                Last Name:<br/><input type="text" defaultValue={account.name.last} onChange={(e)=> setAccount({ ...account, name: {...account.name, last: e.target.value}})}></input><br/>
                User Name:<br/><input type="text" defaultValue={account.username} onChange={(e)=> setAccount({ ...account, username: e.target.value})}></input><br/>
                Password: <br/><input type="password" defaultValue={account.password} onChange={(e)=> setAccount({ ...account, password: e.target.value})}></input><br/>
                <input type="checkbox" defaultChecked={account.viewOrders} onChange={(e)=>setAccount({ ...account, viewOrders: e.target.checked})}></input> Allow other to see my orders<br/>
                <button onClick={()=>SaveUpdates()}>Save</button>
            </div>
            </>
        )
    }
export default UserAccount;