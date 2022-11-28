import React , { useEffect }  from 'react';
import { useNavigate } from 'react-router-dom';
import jwt from 'jsonwebtoken'

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
        );
}

export default Home;