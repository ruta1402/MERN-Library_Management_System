import React , { useEffect, useState }  from 'react';
import jwt from 'jsonwebtoken'
import {Card,CardBody,CardHeader,CardText} from 'reactstrap';
import { useNavigate } from 'react-router-dom';

function UserDetail() {
  const navigate = useNavigate();
  const [data ,setData] = useState({
    name: '',
    email:'',
    phone:''
  })
    useEffect(()=>{
    const token = localStorage.getItem('token')
    if(token){
        const userdata = jwt.decode(token)
        if(!userdata){
            localStorage.removeItem('token')
            navigate('/login')
        }
        else{
            console.log(userdata);
            setData({
              name:userdata.user.name,
              email:userdata.user.email,
              phone:userdata.user.phone
            })
        }
    }else{
        navigate('/login')
    }
},[])

return(
      <div className='records'>
        <div className="mt-6 text-center align-self-center">
            <div className="row text-center justify-content-center">
            
            <Card className="heading">
                
        <CardHeader><h3 className='cardwala'>User Details</h3></CardHeader>
        <CardBody>
          <CardText className='cardwal'>
          <h5> Username : {data.name}</h5>
          <h5> phone : {data.phone}</h5>
          <h5> Email : {data.email}</h5>
          </CardText>
        </CardBody>
          </Card>
            </div>
            </div>
        </div>
        );
}

export default UserDetail;