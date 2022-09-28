import {useContext} from 'react';
import AuthContext from './../context/AuthContext';

const Login = () => {
  let ctx = useContext(AuthContext)
  return (
    <div>
      <form onSubmit={ctx.loginUserFuntion}>
        <input type="text" name="username" placeholder="Username" />
        <input type="password" name="password" placeholder="Password" />
        <input type="submit"/>
      </form>
    </div>
  )
}

export default Login;
