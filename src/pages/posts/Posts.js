
import React from 'react';
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Popup from 'reactjs-popup';
import './Posts.css'
 
function Posts() {

  const [data ,setData] = useState({});

  const PopupExample = (id) => (
    
<>
    {
      fetch(`https://jsonplaceholder.typicode.com/comments/${id.name}`)
      .then(res => res.json())
      .then(
        (result) => {
          setData(result);
        })

    }


    <Popup
       trigger={<button className="button"> Show </button>}
    modal
    nested
  >
    {close => (
      <div className="modal">
        <button className="close" onClick={close}>
          &times;
        </button>
        <div className="header">  {data.name} </div>
        <div className="content">

           {data.body}
            
        </div>
       
      </div>
    ) }

  </Popup>
  </>
  );


    const navigate = useNavigate();
    const [dataPost,setDataPost] = useState();

    useEffect(() => {

        const loggedInUser = localStorage.getItem("dataUser");
        // verfier connexion et fetch data 
        if (loggedInUser) {

            fetch("https://jsonplaceholder.typicode.com/users")
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
         
         <div className='container'>
           
         <div className="grid-container">
 
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

<section>

<div className="tbl-header">
  <table >
    <thead>
      <tr>
        <th>id</th>
        <th>name</th>
        <th>username</th>
        <th>email</th>
        <th>details</th>
      </tr>
    </thead>
  </table>
</div>
<div className="tbl-content">
  <table >
    <tbody>

    {dataPost ? 
            
            dataPost.map((data, index) =>
             
            <tr  key={index}>
            <td>{data.id}</td>
            <td>{data.name} </td>
            <td>{data.username}</td>
            <td>{data.email}</td>
             {/* passe id props */}
            <td><a className='show'><PopupExample name={data.id} /></a> </td>
            </tr>
 
            )
              
            : 'lodding...'}


     
  
    </tbody>
  </table>
</div>
</section>

















    </div>
  );
}
 
export default Posts;