import { isDocument, addDocument } from "../../Utils/Firebase/FirebaseInterface";
import { USER_TEMPLATE, USERS_COLLECTION } from "../../Utils/constants";
import { getDate } from "../../Utils/utils"; 
import { useState } from "react";

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
            <div>
                First Name:<br/><input type="text" onChange={(e)=> setName({ ...name, first: e.target.value})}></input><br/>
                Last Name:<br/><input type="text" onChange={(e)=> setName({ ...name, last: e.target.value})}></input><br/>
                User Name:<br/><input type="text" onChange={(e)=> setUsername(e.target.value)}></input><br/>
                Password: <br/><input type="password" onChange={(e)=> setPassword(e.target.value)}></input><br/>
                <input type="checkbox" onChange={(e)=>setViewOrders(e.target.checked)}></input> Allow other to see my orders<br/>
                <button onClick={()=>addNewUser()}>Create</button>
            </div>
            </>
        )
    }
    export default RegistrationPage;