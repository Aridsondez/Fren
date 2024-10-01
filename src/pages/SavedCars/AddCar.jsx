import React from "react";
import { useState } from "react";
import axios from 'axios'

const AddCar = ()=>{
    const [button, setOn]=useState(false);

    return(
        <div>
            <button onClick={setOn}>ADD</button>
            {button ? <MyForm></MyForm>:<></>}
        </div>
    )
}

function MyForm(){

    const [make, setMake] = useState('');
    const [model, setModel] = useState ('');
    const [price, setPrice] = useState (0);


    const handleSubmit  = async (event) =>{
        event.preventDefault();
        try{
            const response = await axios.post('https://Aridsondez1.pythonanywhere.com/addcar', {
            make,
            model,
            price: parseFloat(price)
        })
        console.log(response.data);
        setMake('')
        setModel('')
        setPrice('')
        }catch(error){
            console.error("Error adding car", error)
        }
        

    }
    return (
        <form>
            <label>Enter Make Name:  
            <input onChange={(event)=>setMake(event.target.value)} type="text" />
            </label>

            <label>Enter Model:  
            <input onChange={(event)=>setModel(event.target.value)} type="text" />
            </label>

            <label>Enter Price:  
            <input onChange={(event)=>setPrice(event.target.value)} type="number" />
            </label>
            <button onClick={handleSubmit} type="Submit">Submit</button>
        </form>
    )
}
export default AddCar;