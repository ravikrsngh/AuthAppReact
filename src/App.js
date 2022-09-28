import './App.css';
import Header from './components/header';
import Home from './pages/home';
import Login from './pages/login';
import PrivateRoutes from './utils/PrivateRoutes';
import { AuthProvider } from './context/AuthContext'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";


function App() {

  return (
    <div className="App">
    <Router>
      <AuthProvider>
        <Header/>
        <p>This is first page</p>
        <Routes>
          <Route element={<PrivateRoutes/>}>
            <Route element={<Home/>} path='/home' exact />
            </Route>
            <Route element={<Login/>} path='/login'  />
        </Routes>
      </AuthProvider>

    </Router>
    </div>
  );
}

export default App;
