
import TotalSoldProducts from './StatisticTabs/TotalSold';
import ProductQuantity from './StatisticTabs/ProductQuantity';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import { getById } from '../../../Utils/utils';
import { USER_TEMPLATE } from '../../../Utils/constants';


const item = {
    margin: "5px",
    color: "#363636",
    backgroundColor: "#efefef",
    borderRadius: "05px"
  }
  const text = {
    margin: "5px",
  }

const Statistics =()=>
    {
        const users = useSelector((e)=>e.users_admin);
        const [curUser, setCurUser] = useState(USER_TEMPLATE);

        return (
            <>
                <TotalSoldProducts/>
                <br/>
                <h3 style={{display: "flex", marginBottom: "5px"}}>Product Quantity Par Customer</h3>
                <dir style={{display: "flex", justifyContent: "flex-start", padding: "0px" ,marginTop: "5px"}}>
                    <p style={text}>Selected User:</p>
                    <select style={item} onChange={(e)=>setCurUser(getById(users,e.target.value))}>
                        <option hidden>None</option>
                        {users.map((user)=>
                        {
                            return(<option value={user.id}>{user.username}</option>)
                        }
                        )}
                    </select>
                </dir>
                <ProductQuantity user={curUser}/>
            </>
        )
    }
    export default Statistics;