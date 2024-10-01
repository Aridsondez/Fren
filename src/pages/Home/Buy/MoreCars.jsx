import React, { useState } from 'react';
import "../../stylesheets/MoreCars.css";
import AllMakes from "./AllMakes";
import Models from "./Models";
import axios from 'axios';
import wheel from "../../../assets/wheelfr.png"

const MoreCars = () => {

    const [carsDropDown, setCarsDropDown] = useState(false);
    const [addCar, setAddCar] = useState(false);
    const [loading, setLoading] = useState(false);
    const [statusMessage, setStatusMessage] = useState("");

    function handleQuestionClick() {
        setCarsDropDown(!carsDropDown);
    }

    function handleAddFeature() {
        setAddCar(!addCar);
    }

    return (
        <div>
            <div className="more-cars">
                <div className="question" onClick={handleQuestionClick}><i className="fa-solid fa-question"></i></div>

                <div className={`more-cars-dropdown ${carsDropDown ? 'show' : ''}`}>
                    <p>Can't find the car you're looking for? Tell us the specifics and we will add it to the <p className='data-base'>database</p>
                    </p>
                </div>
                {carsDropDown && <MoreCarsForm setLoading={setLoading} setStatusMessage={setStatusMessage} />}
            </div>

            {loading && <div className="loading-screens"><img  src={wheel} className="wheel"></img>Adding car, please wait...</div>}

            {statusMessage && <div className="status-message">{statusMessage}</div>}
        </div>
    );
}

const MoreCarsForm = ({ setLoading, setStatusMessage }) => {

    const fetchCars = async (make, model) => {
        setLoading(true);
        try {
            const response = await axios.get('https://aridsondez1.pythonanywhere.com/addcar', {
                params: { make, model }
            });
            setStatusMessage("Car added successfully!");
            setTimeout(() =>{
                setStatusMessage("")
                window.location.reload()}, 3000); // Reload the page after 2 seconds
        } catch (error) {
            
            setStatusMessage("Failed to add car, please try again later.");
            setTimeout(()=>setStatusMessage(""),2000)
            console.error('Error fetching data:', error);
        } finally {
            setLoading(false);
        }
    };

    const handleAddFeature = async () => {
        if (make && model) {
            await fetchCars(make, model);
        } else {
            console.error('Make and model are required');
            setStatusMessage("Make and model are required");
            setTimeout(()=>{
                setStatusMessage("")
            },3000)
        }
    };

    const [make, setMake] = useState("Acura");
    const [model, setModel] = useState("");
    const [makeForModel, setMakeForModel] = useState("-1");

    function handleMakeChange(e) {
        const selectedMake = e.target.options[e.target.selectedIndex].textContent;
        setMake(selectedMake);
        setMakeForModel(e.target.value);
    }

    function handleModelChange(e) {
        const selectedModel = e.target.options[e.target.selectedIndex].textContent;
        setModel(selectedModel);
    }

    return (
        <div className="more-cars-form">
            <select className='make-selection' onChange={handleMakeChange}>
                <AllMakes />
            </select>
            <select className='make-selection' onChange={handleModelChange}>
                <Models make={makeForModel} />
            </select>
            <button className='button' onClick={handleAddFeature}>ADD TO DATABASE</button>
        </div>
    );
}

export default MoreCars;
