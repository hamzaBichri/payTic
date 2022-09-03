
import React from 'react';
import './Login.css';
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

function Login() {
 
    const navigate = useNavigate();

    const { register, handleSubmit } = useForm();
    //donne user 
    const [data, setData] = useState();
    // message error
    const [errormg, setErrormg] = useState('');

 if(data){
   // validation conexion 
    if(data.email !== null && data.password !== null){
        fetch("https://jsonplaceholder.typicode.com/users/1")
        .then(res => res.json())
        .then(
          (result) => {
         
            if(data.email == result.email && data.password == result.username){
                console.log('logging')
                localStorage.setItem("dataUser",JSON.stringify(result));
                navigate("/Posts");

            }else{
                console.log('logout');
                setErrormg('email password incorrect');
            }
          })}

  }


  return (


    <div className="Login">
     
         <div className="login-page">
         
             <div className="form"  >
             <b className='loginTitle'> Login</b>
             
             <form className="login-form" onSubmit={handleSubmit((data) => setData(data))}>

             <input  {...register('email')} type="email" placeholder="email"/>

             <input {...register('password')} type="password" placeholder="password"/>
             {errormg}
             <input type="submit" className='submit' /> 
         </form>

  </div>
</div>

         
    </div>
  );
}
 
export default Login;