import React from "react";
import Header from "../Home/Main/Header";
import CarPaymentCalculator from "./CarPriceCalc";
import LoanRecommendation from "./LoanRecommendations";
import FinanceVideo from "../../assets/financestockvideo.mp4"
import '../stylesheets/finance.css'
import { useState } from "react";
import arrow from "../../assets/arrow-down-fr.png"
import { useRef } from "react";



const Finance=()=>{
    const[showPayment,setShowPayment]=useState(true);
    const[showLoan, setShowLoan] = useState(false)


    function handButton(){
        if(showPayment){
            setShowPayment(false)
            setShowLoan(true)
        }else{
            setShowPayment(true)
            setShowLoan(false)
        }
    }
    return (
        <div className="finance-background">
            <Header/>
            <div className="payment-loan" style={{display:"flex", flexDirection: "column", gap: "30px"}}>
                <CarPaymentCalculator/>

                <LoanRecommendation/>
                
            </div>

        </div>
    )
}

export default Finance;