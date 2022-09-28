/* Creating a Protected Route Component */
import { Navigate, Outlet } from 'react-router-dom';
import {useContext} from 'react'
import AuthContext from './../context/AuthContext'



const PrivateRoutes = () => {
  let {user} = useContext(AuthContext)
  console.log("Here");
  return (
      user ? <Outlet/> : <Navigate to='/login'/>
    )
  }


export default PrivateRoutes;
