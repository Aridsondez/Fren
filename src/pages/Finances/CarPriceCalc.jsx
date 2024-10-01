import React from "react";
import { useState } from "react";
import '../stylesheets/carpayment.css'
import MoneyVideo from "../../assets/desert.mp4"
import car from "../../assets/blacksport.png"
import money from '../../assets/money-transformed.png'


function CarPaymentCalculator(){
  
   
        
    return(
        <div className="classname-div" style={{display: "flex", flexDirection:"column", justifyContent: "center", alignItems: "center"}}>
        <div className="carpayment">
            <div className="title-div">
                <h1 className="title-carpayment">CAR PAYMENT CALCULATOR</h1>
                <video className="coinvid" muted autoPlay loop src={MoneyVideo}/>
            </div>
        </div>
       
          

          <PaymentForm/>

          
        </div>

    )
    
}



const PaymentForm = () =>{
    const [carPayment,setCarPayment] = useState('');
    const [downPayment, setDownPayment] = useState('');
    const [term, setTerm] = useState('');
    const [rate, setRate] = useState('');
    const [monthlyPayment, setMonthlyPayment] = useState('');


    const calculatePayment = async () =>{
        const response = await fetch(' https://aridsondez1.pythonanywhere.com/calculate',{
            method: 'POST',
            headers:{ 'Content-Type': 'application/json'},
            body: JSON.stringify({price: parseFloat(carPayment), downpayment: parseFloat(downPayment), term: parseFloat(term), rate: parseFloat(rate)})



        })
        const data = await response.json()
        setMonthlyPayment(data.monthly_payment)
    }

    return(
        <div className="paymentform">
        <form className="carpayment-form" onSubmit={(e) => { e.preventDefault(); calculatePayment(); }}>
        <label className="carpayment-label">
          <h1>Car Price ($)</h1>
          <input type="number" value={carPayment} onChange={(e) => setCarPayment(e.target.value)} required />
        </label>
        <label className="carpayment-label">
          <h1> Down Payment ($)</h1>
          <input className="down-payment" type="number" value={downPayment} onChange={(e) => setDownPayment(e.target.value)} required />
        </label>
        <label className="carpayment-label">
          <h1>Loan Term (years)</h1>
          <input type="number" value={term} onChange={(e) => setTerm(e.target.value)} required />
        </label>
        <label className="carpayment-label">
          <h1>Annual Interest Rate (%)</h1>
          <input type="number" value={rate} onChange={(e) => setRate(e.target.value)} required />
        </label>
        <button className="submit" type="submit"></button>
      </form>

      {monthlyPayment ?<div className="monthly-payment"> <h2>Monthly Payment: ${monthlyPayment}</h2><p>The monthly payment is calculated to evenly distribute the repayment of the loan, including interest, over the loan term. It covers both the interest on the remaining balance and a portion of the principal, ensuring that the loan is fully paid off by the end of the term.</p>
      <button onClick={()=>setMonthlyPayment(null)} className="remove-monthly-payment" style={{position: "absolute", right: "10px", top:"10px",}}>X</button></div>
      
      
      
      :<></>}

    </div>
    )
}



export default CarPaymentCalculator;