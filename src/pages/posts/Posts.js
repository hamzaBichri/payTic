
import React from 'react';
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import './Posts.css'
 
function Posts() {

    const navigate = useNavigate();
    const [dataPost,setDataPost] = useState();

    useEffect(() => {

        const loggedInUser = localStorage.getItem("dataUser");
        // verfier connexion et fetch data 
        if (loggedInUser) {

            fetch("https://jsonplaceholder.typicode.com/posts")
            .then(res => res.json())
            .then(
              (result) => {
                setDataPost(result);
              })

        }else{
            navigate("/Login");
        }
      }, []);



  return (


    <div className="Posts">

         <h1>Posts</h1>
         
         <div className='container'>
           
         <div class="grid-container">
 
         {dataPost ? 
            
           dataPost.map((data, index) =>
            
            <div className='grid-item' key={index}>
               <div className='title'>{data.title}</div>
               <div className='desc'>{data.body}</div>
            </div>

           )
             
           : 'lodding...'}
  
        </div>


         </div>
    </div>
  );
}
 
export default Posts;