import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../../stylesheets/carlisting.css';
import logo from '../../../assets/carlogodesign.png';
import wheel from '../../../assets/wheelfr.png'


const CarList = ({ make, model }) => {


    const parseCarName = (carsName)=>{
       
        const parts = carsName.split(" ")

        const year = parts[0];
        const make = parts[1];
        const model = parts[2];

        console.log(make)
        return {year, make, model}
    }




    const [cars, setCars] = useState([]);
    const [selectedCar, setSelectedCar] = useState(null);
    const [filteredCars, setFilteredCars] = useState([]);
    const [localmake,setLocalMake] = useState("All Makes")
    const [localModel,setLocalMode] = useState("All Models")

    useEffect(()=>{
        const fetchCars = async () => {
            try {
                const response = await axios.get('https://Aridsondez1.pythonanywhere.com');
                setCars(response.data.cars);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchCars();
    },[])
    
    useEffect(() => {

        const handlePriceChange = () => {
            const minPrice = parseFloat(localStorage.getItem("priceFrom")) || 0;
            const maxPrice = parseFloat(localStorage.getItem("priceTo")) || Infinity;
            const filterType = localStorage.getItem('stock')
            const selectedMake = localStorage.getItem('make') || "All Makes";
            const selectedModel = localStorage.getItem('model') || "All Models";

            console.log("Selected Make:", selectedMake);
            console.log("Selected Model:", selectedModel);

            const filtered = cars.filter(car => {
                const carPrice = parseFloat(car.price.replace(/[^0-9.-]+/g, ""));
                return carPrice >= minPrice && carPrice <= maxPrice;
            });



            const Filtered = filtered.filter(car => car.stock.toLowerCase() === filterType.toLowerCase());
            
                


            const filtereds = Filtered.filter(car =>{

                const { make, model } = parseCarName(car.make);
                console.log(`Filtering Car: ${car.make} - Make: ${make}, Model: ${model}`);

                // Check if selectedMake is 'All Makes', if so, skip the make filter
                const matchesMake = selectedMake.toLowerCase() === "all makes" || make.toLowerCase() === selectedMake.toLowerCase();
                console.log(make.toLowerCase() + "is being compared to" + selectedMake.toLowerCase()+ "and returning "+ matchesMake)
                // Check if selectedModel is 'All Models', if so, skip the model filter
                const matchesModel = selectedModel.toLowerCase() === "all models" || model.toLowerCase() === selectedModel.toLowerCase();
                console.log(matchesModel+ "IS THE MODEL RETURING")
                return matchesMake && matchesModel
            })

            setFilteredCars(filtereds)
        };

        if(cars.length > 0){
            handlePriceChange()
        }
        // Listen for price changes in localStorage
        window.addEventListener('priceChange', handlePriceChange);

        // Cleanup on component unmount
        return () => {
            window.removeEventListener('priceChange', handlePriceChange);
        };
    }, [cars]);

    const handleCarClicked = (car) => {
        setSelectedCar(car);
    };

    const handleBackClick = () => {
        setSelectedCar(null);
    };

    // Early return only affects rendering
    if (cars.length === 0) {
        return (
            <div className='loading-screen'>

                <div className='loading-icon'><img className='wheel-img' src={wheel}></img></div>
                <p className='loading'>Loading...</p>
            </div>
        );
    }

    if (selectedCar) {
        return (
            <div className='car-listing-expanded'>
                <button onClick={handleBackClick} className='back'><i className="fa-solid fa-x"></i></button>
                <img className='expanded-listing-img' src={selectedCar.img} alt={`${selectedCar.make} ${selectedCar.model}`} />
                <div className='car-listing-details'>
                    <h2 className='car-listing-makes'>{selectedCar.make}</h2>
                    <h2 className='car-listing-prices'>{selectedCar.price}</h2>
                </div>
                <button className='add-favorite'><i className="fa-regular fa-heart"></i></button>
            </div>
        );
    }else if(filteredCars.length===0){
        

        return(
            <div className='car-listings'>
            <p>No results </p>
        </div>

        )
    }

    return (
        <div className='car-listings'>
            <div className='car-listing-container'>
                <ul className='car-listing-containter-contain'>
                    {filteredCars.map((car, index) => (
                        <li className="car-listing-box" key={index} onClick={() => handleCarClicked(car)}>
                            <img className='car-listing-img' src={car.img}></img>
                            <div className='car-listing-make'>
                                <p className='car-stock'>{car.stock}</p>
                                <h2>{car.make}</h2>
                            </div>
                            <p className='car-listing-price'>{car.price}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default CarList;
