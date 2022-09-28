import {useContext} from 'react'
import AuthContext from './../context/AuthContext'

const Header = () => {
  let {user,logoutUserFunction} = useContext(AuthContext)
  // If user exists and is not null, we show the logout thing else we show login
  // If user exists show his username
  return  (
    <div>
      <a href="/home">Home</a>

      {user? (<a onClick={logoutUserFunction}>Logout</a>):(<a href="/login">Login</a>)}

      {user && <p>Hello {user.username}</p>}

    </div>
  )
}

export default Header;
