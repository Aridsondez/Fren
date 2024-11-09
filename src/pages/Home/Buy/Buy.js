import React, { useEffect } from "react";
import Header from "../Main/Header"
import "../../stylesheets/Buy.css"
import AllMakes from "./AllMakes";
import Popularmakes from "./PopularMakes";
import { useState } from "react";
import Models from "./Models";
import CarList from "./Carprice";
import { useMemo } from "react";
import MoreCars from "./MoreCars";

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

const Setprice = ()=>{
    
    useEffect(()=>{
        const minimumPrice = localStorage.getItem('priceFrom');
        const maximumPrice = localStorage.getItem('priceTo');

        localStorage.setItem("stock", "Used")

        if(minimumPrice){
            setPriceFrom(minimumPrice)
        }
        if(maximumPrice){
            setPriceTo(maximumPrice)
        }

    },[])

    const [priceFrom, setPriceFrom] = useState(0);
    const [priceTo, setPriceTo]= useState(0);
    const prices = useMemo(generatePrices, []);

    

    const handleChangePriceFrom = (event) =>{   
        const value= parseInt(event.target.value, 10);
        if (isNaN(value)){
            setPriceFrom(0)
            setPriceTo(Infinity)
            localStorage.setItem('priceFrom', 0);
            localStorage.setItem('priceTo', Infinity)
            const events = new Event('priceChange')
            window.dispatchEvent(events)
            
            return

        }
        if (value>priceTo){
            setPriceFrom(value);
            localStorage.setItem('priceFrom', value)
            localStorage.setItem('priceTo', Infinity);

        }else{
            setPriceFrom(value)
            localStorage.setItem('priceFrom',value)
        }

        const events = new Event('priceChange')
        window.dispatchEvent(events)
    }

    const handleChangePriceTo = (event) => {
        const value = parseInt(event.target.value, 10)
        if (isNaN(value)){
            setPriceTo(Infinity);
            console.log("HELLO SHOULD NOT BE WOKRING ")
            localStorage.setItem('priceTo',Infinity)
            return
        }
        if(value<priceFrom){
            setPriceTo(priceFrom)
        }else{
            setPriceTo(value)
            localStorage.setItem('priceTo',value)
        }
        
        const events = new Event('priceChange')
        window.dispatchEvent(events)
       
    }


    return (
        <div className="by-price-filter">
        <div className="min-to-max">
            <select value={priceFrom} onChange={handleChangePriceFrom} className="pricingmenudrop">
                <option >Minimum</option>
                {prices.map(item => (
                    <option key={item} value={item}>${item.toLocaleString()}</option>
                ))}
            </select>
            <select value={priceTo} onChange={handleChangePriceTo} className="pricingmenudrop" disabled={priceFrom === 0}>
                <option >Maximum</option>
                {prices.filter(item => item > priceFrom).map(item => (
                    <option key={item} value={item}>${item.toLocaleString()}</option>
                ))}
            </select>   
        </div>
        
        </div>
    )
}


const ByBody = () =>{

    const [selectedBodyType, setSelectedBodyType] = useState("")

    useEffect(()=>{
        const storedBodyType = localStorage.getItem("BodyType")
        if (storedBodyType){
            setSelectedBodyType(storedBodyType)
        }
    },[])

    function handleBodySelection(event){
        const newBodyType = event.target.value;
        setSelectedBodyType(newBodyType)
        localStorage.setItem('BodyType', newBodyType);
    }


    return (
        <div className="by-car-selected">
            <select className="make-selector" 
                value={selectedBodyType}
                onChange={(e)=>handleBodySelection(e)}
            >
                <option value="SUV">SUV</option>
                <option value="SEDAN">Sedan</option>
                <option value="COUPE">Coupe</option>
                <option value="CONVERTIBLE">Convertible</option>
                <option value="MINIVAN">Minivan</option>
                <option value="PICKUP">Pickup Truck</option>
                <option value="HATCHBACK">Hatchback</option>
            </select>
        </div>
    )
}

const ByCar = ({setqueryMake, setqueryModel}) =>{



    useEffect(()=>{
        const Make = localStorage.getItem("makeVal") || "-1";
        const Model = localStorage.getItem("modelVal") || "-1"

        setMake(Make)
        setModel(Model)

    },[])
     

    function handleMakeChange(e){
        const make = e.target.options[e.target.selectedIndex].textContent
        setMake( e.target.value);
        setqueryMake(e.target.value)
        localStorage.setItem("make", make)
        localStorage.removeItem("model")
        localStorage.setItem("makeVal", e.target.value)

        const events = new Event('priceChange')
        window.dispatchEvent(events)
    }
    function handleModelChange(e){
        const model = e.target.options[e.target.selectedIndex].textContent
        setModel(e.target.value);
        setqueryModel(e.target.value)
        localStorage.setItem("model", model)
        localStorage.setItem("modelVal", e.target.value)


        const events = new Event('priceChange')
        window.dispatchEvent(events)

    }

    const [make, setMake]=useState("-1");
    const [model, setModel]=useState("-1");

    return (
        <div className="by-car-selected">
            <select className="make-selector" value={make} onChange={(e)=>handleMakeChange(e)}>
                <Popularmakes/>
                <AllMakes/> 
            </select>
            <select className="model-selector" value={model} onChange={(e)=>handleModelChange(e)}>
                <Models make={make}></Models>
            </select>

            
        </div>


    )
}

const Buy = () =>{

    const [colorByCar, setColorByCar] = useState("rgb(99, 99, 189)");
    const [colorByBody, setColorByBody] = useState("white");
    const [byCar, setbyCar] = useState(true);
    const [byBody, setbyBody] = useState(false);

    const [colorNew, setcolorNew]= useState("rgb(99, 99, 189)")
    const [colorUsed, setcolorUsed] = useState("white")
    const [type, setType]= useState("Used")

    const handleByCar = () =>{
        setbyCar(true);
        setbyBody(false);

        setColorByCar("rgb(99, 99, 189)")
        setColorByBody("white")

    }

    const handleByBody= () =>{

        setbyCar(false);
        setbyBody(true);
        setColorByCar("white")
        setColorByBody("rgb(99, 99, 189)")
    }

    const handleNew = () =>{
        setcolorNew("rgb(99, 99, 189)")
        setcolorUsed("white")
        localStorage.setItem("stock", "Used")
        const events = new Event('priceChange')
        window.dispatchEvent(events)
    }
    
    const handleUsed = () =>{
        setcolorNew("white")
        setcolorUsed("rgb(99, 99, 189)")
        localStorage.setItem("stock", "New")
        const events = new Event('priceChange')
        window.dispatchEvent(events)
    }

    const [queryMake, setqueryMake] = useState("-1")
    const [queryModel, setqueryModel] = useState("-1")
    return(
        <div className="buy-menus">
                <Header/>
                
            <div className="car-search-div">
                
                <div className="filters">

                    <div className="search-by">
                        <div className="search-by-used"  onClick={()=>handleNew()} style={{"background-color": colorNew}}>
                            <p>Search used</p>
                        </div>
                        <div className="search-by-new"  onClick={()=>handleUsed()} style={{"background-color": colorUsed}}>
                            <p>Search New</p>
                        </div>
                    </div>

                    <div className="by-type">
                        <div className="by-car" style={{"background-color": colorByCar}} onClick={()=>handleByCar()}>
                            <p>By Car</p>
                        </div>
                        <div className="by-body" style={{"background-color": colorByBody}} onClick={()=>handleByBody()}>
                            <p>By Body Style</p>
                        </div>
                    </div>
                    {
                        byCar? <ByCar setqueryMake={setqueryMake} setqueryModel={setqueryModel}/> : <></>

                    }
                    {
                        byBody ? <ByBody/> : <></>
                    }
                    <Setprice/>
                    <MoreCars/>
                </div>
                

            </div>
                <MobileSearch/>
                <CarList make={queryMake} model={queryModel} />
        </div>
    )
}

const MobileSearch = () =>{


    const [pricingDropDown, setPricingDropDown] = useState(false)
    
    function handlePriceDropDown(){
        if(pricingDropDown){
            setPricingDropDown(false)
        }else{
            setPricingDropDown(true)
        }
        
    }
    

    return(
        <div className="mobile-search">
            <div className="all-filters"><p>Filters</p><i class="fa-solid fa-filter"></i></div>
            <div id="prices" className="mobile-prices" onClick={handlePriceDropDown}>
            <p>{pricingDropDown ? "Exit Price" : "Price"}</p>
           
            </div>
            {pricingDropDown ? <Setprice/> : <></>}
            
        </div>
    )
}


export default Buy