import React, {useState} from 'react';
import "../stylesheets/loanRecommendations.css"
import money from "../../assets/money-transformed.png"

function LoanRecommendation(){
    const [creditScore, setCreditScore] = useState('')
    const [recommendations,setRecommendation] =useState(null)
    
    

    const recommendLoans = async () =>{

        const response = await fetch('https://aridsondez1.pythonanywhere.com/recommend',{
            method: 'POST',
            headers:{'Content-Type': 'application/json'},
            body: JSON.stringify({credit_score: parseInt(creditScore)})

        })

        const data = await response.json()
        setRecommendation(data);
    }

    return(
        <div className='loan-recommendations'>
          <img className="image" src={money}></img>
          <button className='dotdotdot'>...</button>
          <div className='loan-div'>
          <h2 className='title'>Loan Recommendations</h2>
        <form className='credit' onSubmit={(e) => { e.preventDefault(); recommendLoans(); }}>
          <label> CREDIT SCORE</label>

            <input className='credit-input' type="number" value={creditScore} onChange={(e) =>{
              if (e.target.value <= 850 || isNaN(e.target.value)){
                setCreditScore(e.target.value)
              }
             }}
             max="850" 
             min="0"
             required />
         
          <br />
        
        <button className='recommend' type="submit">+</button>
      </form>
      </div>
      <div className={`recommended-providers ${recommendations ? '' :'hidden'}`} >
      {recommendations && (
        <>
          <button className='providers-button' onClick={()=>setRecommendation(null)}></button>
          <h3>Recommended Providers:</h3>
          <ul>
            {recommendations.providers.map((provider, index) => (
              <li key={index}>
                <strong>{provider.name}</strong> <br />
                Loan Types: {provider.loan_types.join(', ')} <br />
                Max Loan Amount: ${provider.max_loan_amount} <br />
                Special Offer: {provider.special_offer} <br />
                Additional Fees:
                <ul>
                    {Object.entries(provider.additional_fees).map(([feeType, amount], idx) => (
                        <li key={idx}>{feeType.replace('_', ' ')}: ${amount}</li>
                    ))}
                </ul>
            </li>
            ))}
          </ul>
          </>
      )}
      </div>
    </div>
    )


}

export default LoanRecommendation;