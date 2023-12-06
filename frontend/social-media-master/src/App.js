import { Login } from "./pages/Login/Login";
import { Register } from "./pages/Register/Register";
import {Home} from "./pages/Home/Home";
import {Profile} from "./pages/Profile/Profile"
import React, { useContext } from 'react';
import{
  createBrowserRouter,
  RouterProvider,
  Outlet,
  Navigate
} from 'react-router-dom';
import { Navbar } from "./components/Navbar/Navbar";
import { LeftBar } from "./components/LeftBar/LeftBar";
import { RightBar } from "./components/RightBar/RightBar";
import "./style.scss";
import { DarkModeContext } from "./context/darkModeContext";
import { AuthContext } from "./context/authContext";

function App() {
  const{darkMode} = useContext(DarkModeContext)
  const Layout = () =>{
    return(
  <div className={`theme-${darkMode ? 'dark' : 'light'}`}>
        <Navbar/>
        <div style={{display:"flex"}}> 
          <LeftBar/>
          <div style={{flex:6}}>
          <Outlet/>
          </div>
          <RightBar/>
        </div>    
      </div>
    )
  }

  const {currentUser} = useContext(AuthContext);
  const ProtectedRoute=({children}) =>{
    if(!currentUser){
      return <Navigate to="/login"/>
    }
    return children
  }
  const router = createBrowserRouter([
    {
      path:"/",
      element: <ProtectedRoute>
        <Layout/>
        </ProtectedRoute>,
      children:[
        {
          path:"/",
          element:<Home/>
        },
        {
          path:"/profile/:id",
          element:<Profile/>
        }
    ]
    },
    {
      path:"/login",
      element: <Login/>,
    },
    {
      path:"/register",
      element: <Register/>,
    },

  ]);


 return(
    <div>
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
