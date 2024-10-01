import React from "react";
import { useState } from "react";
import "../../stylesheets/welcome.css"
import { useMemo } from "react";
import { useEffect } from "react";
import logo from  "../../../assets/carlogodesign.png" 
import aiLogo from "../../../assets/chatbotlogo.png"
import AllMakes from "../Buy/AllMakes";
import Popularmakes from "../Buy/PopularMakes";
import Models from "../Buy/Models";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';



const Welcome = ()=>{



    const [menu, setMenu]= useState("Home")
    
    

    const handleMenuActions = (option) =>{
        setMenu(option)
    }



    return (
        <div className="background">
            <img  className="logo" src={logo}></img>
            <h1 className="shopping-for-cars">Shopping For Cars </h1>
            <h3 className="made-easy">Made Easy</h3>
            <div className="options">
                <nav className="menu-options">
                    <a id="Buy" onClick={()=>handleMenuActions("Buy")}>Buy</a>
                    <a onClick={()=>handleMenuActions("Finace")}>Finances</a>
                    <a onClick={()=>handleMenuActions("Research")}>Research</a>
                </nav>
                <div  id = "menu" className="menu-result">
                    <BuyMenu option={menu}/>
                    <FinanceMenu option= {menu}/>
                    <ResearchMenu option= {menu}/>
                </div>
            </div>
        </div>
    )
}


const BuyMenu=(props)=>{

    const [make, setMake] = useState(true);
    const [body, setBody] = useState(false);
    const [price, setPrice] = useState(false);
    const [model, setModel] = useState("-1");

    const ByMake = () =>{


        const navigate = useNavigate();

        function handleSearch(){
            navigate("/buy")
        }

        function handleMakeChanges(e){
            const make = e.target.value
            localStorage.removeItem("model")
            localStorage.setItem("makeVal", make)
            setModel(e.target.value)
        }

        function handleModelChanges(e){

            const model = e.target.value
            localStorage.setItem("modelVal", model)

        }
        return (
            <div className="byMake">

            
                <div className="make">
                    <select className="car-model-pick" value={model} onChange={(e)=>handleMakeChanges(e)}>
                        <Popularmakes/>
                        <AllMakes/>
                    </select>
                </div>



                <div className="model">
                    <select className="car-model-pick" onChange={(e)=>handleModelChanges(e)}>
                        <Models make={model}/>
                    </select>
                </div>

                <div className="zipCode">
                    Near
                    <input id="zip" name="zip" type="text" inputmode="numeric" pattern="^(?(^00000(|-0000))|(\d{5}(|-\d{4})))$" className="car-model-pick zippy" ></input>

                </div>
                <button className="Search" onClick={()=>handleSearch()}>
                    Search
                </button>
            </div>
            
        )
    }

    const ByBody = (props) =>{

        const [bodyType, setBodyType] = useState('');
        const navigate = useNavigate()

        function handleBodyChange(props){
            
            setBodyType(props)
            localStorage.setItem("BodyType",props);
            navigate("/buy")
        }

        return (

            <div  className="bybody-style" >
                <div  className="cars-picture" onClick={()=>handleBodyChange("SUV")}>
                    <img src="https://static-assets.cargurus.com/images/site-cars/body-style/suv_d9a4d6fd3dc882f9e6580267727eb74676149d34a2e5b29e7d7057ef3a24308d.png?io=true&format=jpg&auto=webp"></img>
                    <p>SUV / Crossover</p>
                </div>
                <div className="cars-picture" onClick={()=>handleBodyChange("SEDAN")}>
                    <img src="https://static-assets.cargurus.com/images/site-cars/body-style/sedan_29e1ccf9887f5c0ac5bbe354140f137a90662d5bb99f67823f4e860c468b431d.png?io=true&format=jpg&auto=webp"></img>
                    <p>Sedan</p>
                </div>
                <div className="cars-picture" onClick={()=>handleBodyChange("COUPE")}>
                    <img src="https://static-assets.cargurus.com/images/site-cars/body-style/coupe_49b34324c03c31b5cfa12a48763b333b8c373a45e4ace1d8caa987f8db8a57dc.png?io=true&format=jpg&auto=webp"></img>
                    <p>Coupe</p>
                </div>
                <div className="cars-picture" onClick={()=>handleBodyChange("CONVERTIBLE")}>
                    <img src="https://static-assets.cargurus.com/images/site-cars/body-style/convertible_8df063bf2ca36c27207286aad04bbe376fa49d4b801ac199f00eea6c49b8f8c5.png?io=true&format=jpg&auto=webp"></img>
                    <p>Convertible</p>
                </div>
                <div className="cars-picture" onClick={()=>handleBodyChange("MINIVAN")}>
                    <img src="https://static-assets.cargurus.com/images/site-cars/body-style/minivan_b0e9dfc0ee9294d710e0521f7341426b3b91186d6767125ceb1395a625c57ae6.png?io=true&format=jpg&auto=webp"></img>
                    <p>Minivan</p>
                </div>
                <div className="cars-picture" onClick={()=>handleBodyChange("PICKUP")}>
                    <img src="https://static-assets.cargurus.com/images/site-cars/body-style/truck_fa5a5d690d46ea93b26e1088404bf0778dd370a008753aabf19d114ffcb5024d.png?io=true&format=jpg&auto=webp"></img>
                    <p>Pickup Truck</p>
                </div>
                <div className="cars-picture"onClick={()=>handleBodyChange("HATCHBACK")}>
                    <img src="https://static-assets.cargurus.com/images/site-cars/body-style/hatchback_086bd779c992d29ced166e33959d37d91d7fd764cbd6f2838269d175395b74d5.png?io=true&format=jpg&auto=webp"></img>
                    <p>Hatchback</p>
                </div>

            </div>
        )
    }


    const generatePrices= ()=>{
        const arrayDate= [];

        for( let i = 1000; i<= 10000; i+=1000){
            arrayDate.push(i);
        }

        for( let i = 12000; i<= 20000; i+=2000){
            arrayDate.push(i);
        }
        for( let i = 25000; i<= 50000; i+=5000){
            arrayDate.push(i);
        }
        for( let i = 60000; i<= 200000; i+=10000){
            arrayDate.push(i);
        }

        return arrayDate;

    }
    const ByPrice = ()=>{

        const [priceFrom, setPriceFrom] = useState(0);
        const [priceTo, setPriceTo]= useState(0);
        const navigate = useNavigate()
            

        const prices = useMemo(generatePrices, []);

        const handleChangePriceFrom = (event) =>{   
            const value= parseInt(event.target.value, 10);
            setPriceFrom(value);
            if (value>priceTo){
            setPriceTo(0);
            }
            
        }

        const handleChangePriceTo = (event) => {
            setPriceTo(parseInt(event.target.value, 10));
           
        }

        const handlesubmit = ()=>{
            if (priceTo>priceFrom){
                localStorage.setItem('priceFrom',priceFrom)
                localStorage.setItem('priceTo',priceTo)
            }else{
                localStorage.removeItem('priceFrom')
                localStorage.removeItem('priceTo')
            }

            
            navigate("/buy")
        }
            
        

        return (
            <div className="byPrice">
                <p className="price-p">Price</p>
                <div>
                    <p className="describe">From</p>
                    <select onChange={handleChangePriceFrom} className="pricingmenudrop">
                        <option value={0}>Select a price</option>
                        {prices.map(item => (
                            <option key={item} value={item}>${item.toLocaleString()}</option>
                        ))}
                    </select>
                </div>
                <div>
                    <p className="describe">To</p>
                    <select onChange={handleChangePriceTo} className="pricingmenudrop" disabled={priceFrom === 0}>
                        <option value={0}>Select a price</option>
                        {prices.filter(item => item > priceFrom).map(item => (
                            <option key={item} value={item}>${item.toLocaleString()}</option>
                        ))}
                     </select>
                </div>
                <div className="zip-input">
                    <p className="describe">Near</p>
                    <input id="zip" name="zip" type="text" inputmode="numeric" pattern="^(?(^00000(|-0000))|(\d{5}(|-\d{4})))$" className="by-price-zip-code"></input>
                </div>
                <button className="searchbyprice" onClick={()=>handlesubmit()}>Search</button>
            </div>
        )
    }
    const [elementHeight, setElementheight]= useState(200)
    function setHeight(){
        setElementheight(160);
    }
    function resetHeight(){
        setElementheight(250);
    }
    const isBuy = props.option
    if (isBuy == "Buy"){
        
        return (
            <div  id="buys" className="buy-menu">
                <div className="typeBuy">
                    <a className="buychoice" onClick={()=>{setMake(true); setBody(false); setPrice(false); resetHeight()}}>Make/Model</a>
                    <a className="buychoice" onClick={()=>{setMake(false); setBody(true);  setPrice(false); setHeight()}}>Body Style</a>
                    <a className="buychoice" onClick={()=>{setMake(false);setBody(false); setPrice(true); resetHeight()}}>Price</a>
                </div>
                {
                    make ? <ByMake/> : <></>
                }
                {
                    body ? <ByBody/>: <></>
                }
                {
                    price ? <ByPrice/> : <></>
                }

            </div>
        )
    }else{
        return(

            <div></div>
        )
    }

}

function FinanceMenu(props){
    const isFinace = props.option
    if (isFinace == "Finace"){
        return (
            <div className="buy-menu">
            <div className="finance-menu">
            <p className="finance-desc finace-desc-mobile">Our website's financial assessment feature helps teens see if they can afford a car. 
            By asking about your income, expenses, savings, and car budget, it calculates what you can afford. 
            It also checks current loan interest rates to give you a clear picture of potential costs. This way, 
            you can make smart decisions and pick a car that fits your budget.
            </p>
            <Link to={'/Finance'}className="learn-more">Learn More {'>'}</Link>
            </div>
            </div>
            
        )
    }else{
        return(

            <div></div>
        )
    }
}

function ResearchMenu(props){
    const isResearch = props.option
    if (isResearch == "Research"){
        return (
            <div className="buy-menu">
            <p className="finance-descs">Use our AI chat feature to get instant answers to any questions you have, 
            whether it's about getting a loan, understanding car insurance, or tips on negotiating prices. 
            Additionally, our FAQ section provides quick answers to the most common questions teens have when buying a car. 
            </p>
                <Link to={"/Research"}><img className="ai-chatbot" src={aiLogo}></img></Link>
            </div>

        )
    }else{
        return(

            <div></div>
        )
    }

}




export default Welcome