import React from 'react';
import {Icon} from 'antd'
import './index.css';



const num = number => {
    number = number.toString()
   
    let n = ''
    for(let i =0; i < number.length; i += 4) {
      n += number.slice(i, i + 4) + ' '
    }
    return n.trim()
}

const valid = number => {
    number = number.toString()
    return number.slice(0, 2) + '/' + number.slice(2)
}
  
const Card =({cardnumber,cardname,cardvalid}) => { return <div className="carte">
     <h1 className="Titree">CREDIT CARD</h1>
    <ul>    
  
    <li className="Logo"><img src="https://static4.depositphotos.com/1003857/292/i/950/depositphotos_2922078-stock-photo-creditcard-chip.jpg"  width="8%" /></li>
    <li className="Cardnumber"><h2>{num(cardnumber)}</h2></li>

    <li>
        <div className="visaa">

           <ul className="visa">
                    <li>
                   
                        <h6>VALID<br/>THRU</h6></li>
                        <li ><Icon  type="caret-right" /></li>
                       <li> <h6>MONTH/YEAR<br/><span>{valid(cardvalid)}</span></h6> </li> 
            </ul>
          
            <div className="Logomaster"><img src="https://www.elektrischvaren-accu.nl/Files/6/88000/88645/FileBrowser/betalingslogo/credit-card-logo.jpg" width="65%"  /></div>


        </div>
    </li>
    <li className="Cardholder"><h3>{cardname.toUpperCase()}</h3></li>
    </ul>
    </div>
}
    
export default Card 
