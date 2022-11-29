import React , { useEffect }  from 'react';
import { useNavigate } from 'react-router-dom';
import jwt from 'jsonwebtoken'
import styled from "styled-components";

function Home() {


    const navigate = useNavigate();

    useEffect(()=>{
    const token = localStorage.getItem('token')
    if(token){
        const user = jwt.decode(token)
        if(!user){
            localStorage.removeItem('token')
            navigate('/login')
        }
        else{
            
        }
    }else{
        navigate('/login')
    }
})

    return(
        <>
          <div className="container mt-4 home text-center align-self-center">
        <br/><br/>
            <div>
            <h1 className="Headline"align="center" style={{fontSize:"3rem", color:'white'}}> Welcome to Our Library</h1>
            </div>
            <div className='space'>          
        
            </div>
            <div className="row justify-content-center align-self-center">
            <br/>
            <table className='tabla'>
                <tbody>
                <tr><th colSpan="2">Library Timings</th></tr>
                <tr><td>Opening Time</td> 
                <td>9.00 A.M.</td></tr>
                <tr><td>Closing Time</td> 
                <td>6.00 P.M.</td></tr>

                </tbody>
            </table><br/>
                </div>
                <br/><br/><br/>
            </div>
        </>

    //     <>
    //   <div className="container grid grid-two-column">
    //     <div className="section-hero-data">
    //       <p className="hero-top-data">WELCOME TO</p>
    //       <h1 className="hero-heading">Central Library</h1>
    //       <p className="hero-para">
    //       The Central Library is an automated library in terms of records organisation and management of all its different sections, search and discovery, information retrieval and service delivery.
    //       </p>
    //       <table className="table">
    //         <th>Working Days</th>
    //         <th>Working Hours</th>
    //         <tr>
    //           <td>Mon-Sat</td>
    //           <td>9am-5pm</td>
    //         </tr>
    //       </table>
    //       {/* <Button className="btn hireme-btn">
    //         <NavLink to="/contact"> hire me </NavLink>
    //       </Button> */}
    //     </div>
        

    //     {/* for image  */}
    //     <div className="section-hero-image">
    //       <picture>
    //         <img src="./images/library.jpg" alt="libray image" className="hero-img " />
    //       </picture>
          
    //     </div>

       
    //   </div>
    //   <div className="section-hero-image" >
    //     <iframe 
    //       src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.7923722248875!2d72.8977284149011!3d19.072864287089715!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c627a20bcaa9%3A0xb2fd3bcfeac0052a!2sK.%20J.%20Somaiya%20College%20of%20Engineering!5e0!3m2!1sen!2sin!4v1669535811463!5m2!1sen!2sin"
    //       width="85%"
    //       height="350"
    //       style={{ border: 0 }}
    //       allowFullScreen=""
    //       loading="lazy"
    //       referrerPolicy="no-referrer-when-downgrade"></iframe>
    //   </div>
      
    // </>
        );
}

export default Home;