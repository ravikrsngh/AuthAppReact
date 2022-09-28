import {createContext, useState, useEffect } from 'react';
import {useContext} from 'react'
import AuthContext from './../context/AuthContext'

const Home = () => {

  let {authTokens} = useContext(AuthContext)

  const getRoutes = async () => {
    console.log("Getting Routes");
    let atkn = 'Bearer ' + String(authTokens.access)
    let response = await fetch('http://127.0.0.1:8000/',{
      method:'GET',
      headers: {
        'Content-Type':'application/json',
        'Authorization':atkn,
      },
    })
    let data = await response.json()
    console.log(data)
  }

  useEffect( () => {
    console.log("here");
    getRoutes();
  }, [""]);

  return (
    <div>
    <p>Congratulations you have logged in and entered the Home page.</p>
    </div>
  )
}

export default Home;
