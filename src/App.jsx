import { useState } from 'react'
import { Route , Routes } from "react-router-dom";

import LogPage from './Comps/Loging/LogPage';
import RegistrationPage from './Comps/Loging/NewUser';
import UserComp from './Comps/Users/User';

function App() {

  const [user,setUser] = useState({name:"Test"})

  return (
    <>
    <Routes>
      <Route path="/" element={<LogPage/>}></Route>
      <Route path="/Registration" element={<RegistrationPage/>}></Route>
      <Route path="/User/:name" element={<UserComp user={user}/>}></Route>
     
    </Routes>
    </>
  )
}

export default App
