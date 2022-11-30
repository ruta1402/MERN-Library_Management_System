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
            <div className='homeHead' >
                <h1 className="Headline"align="center">Welcome to Our Library</h1>
                <p align="center" >A hub of knowledge for transformation.</p>
            </div>
            <div className='space'>          
                <h3 className='space_head' align="center">Browse our Collections</h3>
            <p align="center" >Each Collection of our
             Digital Library represents a domain of human development
              wisdom that influences—or is influenced by—coaching.
               Connecting these fields of inquiry is our commitment to
                investigate how coaching contributes to the United Nations
                 Action Plan for societal well-being. As a holistic system,
                  these four pillars inform our research focus, which in turn 
                  generates our body of knowledge.</p>

                  <div className='boxWrap'>
                    <div className='boxLink' onClick={()=>pathChange("Books")}>
                        <div className='link1 lk1'>
                            <h2>Books</h2>
                        </div>
                    </div>
                    <div className='boxLink' onClick={()=>pathChange("History")}>
                        <div className='link1 lk2'>
                            <h2>History</h2>
                        </div>
                    </div>
                    {admin?<>
                    <div className='boxLink lk3' onClick={()=>pathChange("Profile")}>
                        <div className='link1 lk3'>
                            <h2>Issue Logs</h2>
                        </div>
                    </div>
                    <div className='boxLink' onClick={()=>pathChange("Addbook")}>
                        <div className='link1 lk4'>
                            <h2>Add Book</h2>
                        </div>
                    </div>
                    </>:<></>}
                  </div>

            </div>
            
            </div>
        </>
        );
}

export default Home;