import React from "react";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

const ShowCar = () =>{
    const [cars, setCars]= useState([]);


    useEffect(()=>{
        const fetchCars = async ()=>{
            try{
                const response = await axios.get("http://127.0.0.1:5000/cars");
                setCars(response.data);

            }catch(error){
                console.error("something wrong", error)

            }
        }
        fetchCars()
    },[])

    return (
        <div>
            <h2>Your Cars</h2>
            <ul>
                {cars.map(car => (
                    <li key={car.id}>{car.make} - {car.model} - ${car.price}</li>
                ))}
            </ul>
        </div>
    )
}

export default ShowCar