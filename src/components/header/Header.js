
import React from 'react';
import { Link,useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import './Header.css'

   
 
function Header() {

 //navigate
  const navigate = useNavigate();

  // check user logging
  const [checklogging,setChecklogging] = useState();


     //assigning location variable
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const location = useLocation();

   
    const { pathname } = location;

  
    const splitLocation = pathname.split("/");

    // logout
    const removeItem = () => {
      localStorage.removeItem("dataUser");
      navigate("/Login");
    }


    useEffect(() => {

      checkconexion();

    }, []);


 // verfier conexion
    const checkconexion = ()  =>{
      const loggedInUser = localStorage.getItem("dataUser");

      if (loggedInUser) {

              setChecklogging('login');
      }

    }

  return (
    <div className="Header">
         <div className='container'>
            <div className='menu'>
               <div className='log'> <p>logo</p> </div>
               <div className='menuItem'> 
                <ul>
                    <li className={splitLocation[1] === "" ? "active" : ""}>
                   
                    <Link to="/">Home</Link>
                    </li>
                 
                    {/* verfier conexion pour connecte et deconnecte  */}
                    {checklogging ? 
                    
                    <>
                    
                   
                    <li className={splitLocation[1] === "Posts" ? "active" : ""}>  <Link to="/Posts">Posts</Link>   </li>

                    <li className='activelogout' onClick={removeItem}>  logout  </li>

                    </>

                    
                    : 
                    
                    <li className='activelogin'>  <Link to="/Login">Login</Link>  </li>
                    
                    }

                   
                </ul>
               </div>
            </div>


         </div>
    </div>
  );
}
 
export default Header;