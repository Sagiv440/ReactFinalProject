import { useState  } from 'react'
import { Route , Routes ,useParams } from "react-router-dom";

import LogPage from './Comps/Loging/LogPage';
import RegistrationPage from './Comps/Loging/NewUser';
import UserComp from './Comps/Users/User';
import TableTest from './Utils/Table/TableTest';



function App() {

  return (
    <>
    <Routes>
      <Route path="/ReactFinalProject/" element={<LogPage/>}></Route>
      <Route path="/ReactFinalProject/Registration" element={<RegistrationPage/>}></Route>
      <Route path="/ReactFinalProject/:type/:name" element={<UserComp/>}></Route>
      <Route path="/ReactFinalProject/TableTest" element={<TableTest/>}></Route>
     
    </Routes>
    </>
  )
}

export default App
