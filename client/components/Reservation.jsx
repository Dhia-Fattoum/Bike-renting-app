import React from 'react';

const Reservation = (props) => (
    <div className ="reservation">
        <h2>🛒Your reservation :</h2>
        <div>
        <p>{props.userName}</p>
        <br></br>
        <p>☎️{props.phone}</p>
        </div>
        <br></br>
        <div>
            <p> 📆 From : {props.pickup} to ⏳ {props.return}</p>
        </div>
        <br></br>
        <div>
        <p>{props.model}</p>
        <br></br>
        <span> 💰 Your Total is : {props.total} DT</span><br/>
        <br></br>
        <button className="btn-primary" type="submit" onClick={()=>props.changeView('home')}>Done !</button>
        <br></br>
        </div>
     
    </div>
)
export default Reservation;