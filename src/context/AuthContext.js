/**
Creating an auth context. It will share all the necessary auth details to the required components.
**/

import {createContext, useState, useEffect } from 'react';
import jwt_decode from "jwt-decode";
import {useNavigate} from 'react-router-dom';

const AuthContext = createContext() //creating the context
export default AuthContext;

// Creating the Provider here itself.
export const AuthProvider = ({children}) => {


  let [authTokens,setAuthTokens] = useState(() => localStorage.getItem('authTokens')? JSON.parse(localStorage.getItem('authTokens')) : null) // To store the authentication tokens. Null initially.
  let [user,setUser] = useState(() => localStorage.getItem('authTokens')? jwt_decode(JSON.parse(localStorage.getItem('authTokens')).access) : null) //Before the user is logged in the value is null

  let navigate = useNavigate();

  // Login User function which is triggered when the login form is submitted.
  let loginUserFuntion = async (e) => {
    e.preventDefault();
    console.log(e)
    console.log(e.target);
    // POST Request
    let response = await fetch('http://127.0.0.1:8000/api/token/',{
      method:'POST',
      headers: {
        'Content-Type':'application/json',
      },
      body:JSON.stringify({'username':e.target.username.value,'password':e.target.password.value})
    })
    let data = await response.json()

    if (response.status === 200) {
      // If everything goes good then and user is authorized, we set the auth token to the data
      setAuthTokens(data)
      setUser(jwt_decode(data.access)) //decoding the user information stored in access token and storing it inside user

      // Adding the info to localstorage so that when user reloads we can check. setItem takes key and value(string)
      localStorage.setItem('authTokens',JSON.stringify(data))
      navigate('/home') //Sending back to home page.
    } else {
      alert('Something went wrong')
    }

  }

  let logoutUserFunction = () => {
    setAuthTokens(null)
    setUser(null)
    localStorage.removeItem('authTokens')
    navigate('/')
  }
  let contextData = {
        user:user,
        loginUserFuntion:loginUserFuntion,
        logoutUserFunction:logoutUserFunction,
        authTokens:authTokens
    }
  return(
          <AuthContext.Provider value={contextData} >
              {children}
          </AuthContext.Provider>
      )
}
