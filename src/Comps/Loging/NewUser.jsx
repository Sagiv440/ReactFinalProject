import { isUser, addUser } from "../../Utils/Firebase/FirebaseInterface";
import { useState } from "react";

const RegistrationPage = ()=>
    {
        const [name, setName] = useState({first: "", last: ""})
        const [username, setUsername] = useState("");
        const [password, setPassword] = useState("");
        
        const addNewUser = async ()=>
        {
            if(!await isUser("user", username))
            {
                await addUser(username, password);
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
                First Name:<br/><input type="text" onChange={(e)=> setName({first: e.target.value, ...name})}></input><br/>
                Last Name:<br/><input type="text" onChange={(e)=> setName({last: e.target.value, ...name})}></input><br/>
                User Name:<br/><input type="text" onChange={(e)=> setUsername(e.target.value)}></input><br/>
                Password: <br/><input type="password" onChange={(e)=> setPassword(e.target.value)}></input><br/>
                <input type="checkbox"></input> Allow other to see my orders<br/>
                <button onClick={()=>addNewUser()}>Create</button>
            </div>
            </>
        )
    }
    export default RegistrationPage;