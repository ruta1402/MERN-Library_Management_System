import React from 'react';
import './style.css';


function Basic() {
  return (
    <div className='records'>
        <div className="form3">
            <div className='headi'>Add Book to Library</div><br/>
            <div className="form-body">
                <div className="inl">
                    <label className="form__label" for="BName">Name of Book: </label>
                    <input className="form__input" type="text" id="BName"/>
                </div>
                <div className="inl">
                    <label className="form__label" for="AName">Author's Name: </label>
                    <input  type="text" name="" id="AName" className="form__input"/>
                </div><br/>
                <div className="des">
                    <label className="form__label" for="password">Description: </label><br/>
                    <textarea className="form__input" name="password" id="password" cols="50" rows="5"></textarea>
                </div>
                <div className="inl">
                    <label className="form__label" for="BName">Category: </label>
                    <input className="form__input" type="text" id="BName"/>
                </div>
                <div className="inl">
                    <label className="form__label" for="AName">No. of Copies: </label>
                    <input  type="number" value="1" name="" id="AName" className="form__input"/>
                </div><br/>
            </div>
            <div class="d">
                <button type="submit" class="btn foote">Add</button>
            </div>
        </div>
    </div>
  );
}

export default Basic;