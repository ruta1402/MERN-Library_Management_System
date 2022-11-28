import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';


function AddBook() {
    const navigate = useNavigate();
    const [imgLink, setImgLink] = useState('');
    const [BName, setBName] = useState('');
    const [AName, setAName] = useState('');
    const [desription, setDesription] = useState('');
    const [Cat,setCat] = useState('');
    const [quantity,setQuantity] = useState('');

    async function addbk(event) {
        event.preventDefault()
        console.log(imgLink,BName,AName,desription,Cat,quantity);
        
        const response= await fetch('http://localhost:8989/book/addBook',{
            method: 'POST',
            headers:{
                'Content-type':"application/json"
            },
            body: JSON.stringify({
                image:imgLink,
                name:BName,
                author:AName,
                description:desription,
                category:Cat,
                quantity:quantity
            })
          })

        const data = await response.json()
        if(data){
            console.log(data);
            alert("book added")
        }
        else{
            alert("book Not added")
        }
    }

    const handleInputChange = (e) => {
        const {id , value} = e.target;
        if(id === "imgLink"){
            setImgLink(value);
        }
        if(id === "BName"){
            setBName(value);
        }
        if(id === "AName"){
            setAName(value);
        }
        if(id === "desription"){
            setDesription(value);
        }
        if(id === "Cat"){
            setCat(value);
        }
        if(id === "quantity"){
            setQuantity(value);
        }


        
    }

    

 return (
    
    <div className='records'>
        <div className="form3">
            <div className='headi'>Add Book to Library</div><br/>
            <form>

            <div className="form-body">
                <div className="inl">
                    <label className="form__label" htmlFor="imgLink">Book Image: </label>
                    <input className="form__input" onChange = {(e) => handleInputChange(e)} value={imgLink} type="text" id="imgLink"/>
                </div>
                <div className="inl">
                    <label className="form__label" htmlFor="BName">Name of Book: </label>
                    <input className="form__input" onChange = {(e) => handleInputChange(e)} value={BName} type="text" id="BName"/>
                </div>
                <div className="inl">
                    <label className="form__label" htmlFor="AName">Author's Name: </label>
                    <input  type="text" name="" onChange = {(e) => handleInputChange(e)} id="AName" value={AName} className="form__input"/>
                </div><br/>
                <div className="inl">
                    <label className="form__label" htmlFor="password">Description: </label>
                    <textarea className="form__input" onChange = {(e) => handleInputChange(e)} name="" value={desription} id="desription" cols="50" rows="5"></textarea>
                </div>
                <div className="inl">
                    <label className="form__label" htmlFor="Cat">Category: </label>
                    <input className="form__input" onChange = {(e) => handleInputChange(e)} type="text" value={Cat} id="Cat"/>
                </div>
                <div className="inl">
                    <label className="form__label" htmlFor="quantity">No. of Copies: </label>
                    <input  type="number" value={quantity} onChange = {(e) => handleInputChange(e)} step="1" min={0} name="" id="quantity" className="form__input"/>
                </div><br/>
            </div>
                <div className="d">
                    <input type="submit" onClick={addbk} value="Add" className="btn foote"/>
                </div>
            </form>
            
        </div>
    </div>
 );
}

export default AddBook;