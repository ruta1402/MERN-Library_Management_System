import React from 'react';

function Home() {
    return(
        <>
          <div className="container mt-4 home text-center align-self-center">
        <br/><br/>
            <div className="row mt-3 darkbg text-center justify-content-center ko">
            <h1 align="center" style={{fontSize:"3rem"}}> Welcome to the KJSCE Library</h1>
            </div>
            <div className="row darkbg inner">          
            <h6>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam magnam qui fugit quas vero laboriosam quod et nobis facere. Placeat sit excepturi ex neque, voluptatum ratione eaque accusamus debitis temporibus! Labore necessitatibus adipisci mollitia quibusdam explicabo reprehenderit perferendis? Repellat, consequuntur officia? Optio autem dignissimos voluptatum at ipsam perspiciatis, sed magni!</h6>
            </div>
            <div className="row darkbg justify-content-center align-self-center">
            <br/>
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