import React , { useEffect, useState }  from 'react';
import { useNavigate } from 'react-router-dom';
import jwt from 'jsonwebtoken'

function Home() {

    const [admin, setAdmin] = useState(false)
    const navigate = useNavigate();
    async function pathChange(path){
        navigate(`/${path}`)
    }
    useEffect(()=>{
    const token = localStorage.getItem('token')
    if(token){
        const user = jwt.decode(token)
        if(!user){
            localStorage.removeItem('token')
            navigate('/login')
        }
        else{
            if(user.user.admin==true){
                setAdmin(true)
            }
            
        }
    }else{
        navigate('/login')
    }
},[])

    return(
        <>
          <div className="container mt-4 home text-center align-self-center">
        <br/><br/>
            <div className="row mt-3 darkbg text-center justify-content-center ko">
            <h1 style={{fontSize:"3rem",fontWeight:'600'}}> Welcome to the KJSCE Library</h1>
            </div>
            <div className="row darkbg justify-content-center">
            <br/>
            <div className="row mt-3 darkbg text-center justify-content-center koo">
            Laura Bush in her famous quote said: “I have found the most valuable thing in my wallet is my library card.” Visit your library, get your library card, and you’ll be able to borrow a book, use free internet, or attend a course that will improve your digital skills.
            </div><br/><br/>
            <table className='tabla'>
                <tr> <th colspan="2">Library Timings</th> </tr>
                <tr> <td>Opening Time </td> 
                <td> 9.00 A.M.</td></tr>
                <tr> <td>Closing Time </td> 
                <td> 6.00 P.M.</td></tr>
            </table><br/>
                </div>
                <br/><br/><br/>
            </div>
        </>
        );
}

export default Home;