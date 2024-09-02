import { useState  } from 'react'
import { Route , Routes ,useParams } from "react-router-dom";

import LogPage from './Comps/Loging/LogPage';
import RegistrationPage from './Comps/Loging/NewUser';
import UserComp from './Comps/Users/User';


function App() {

  return (
    <>
    <Routes>
      <Route path="/" element={<LogPage/>}></Route>
      <Route path="/Registration" element={<RegistrationPage/>}></Route>
      <Route path="/:type/:name" element={<UserComp/>}></Route>
     
    </Routes>
    </>
  )
}

export default App
