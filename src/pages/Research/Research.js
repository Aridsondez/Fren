import {React} from "react"
import Header from "../Home/Main/Header"
import bot from "../../assets/chatbotlogo.png"


const Research = ()=>{

    return(
        <>
        <Header></Header>
        <div style={{display:"flex", justifyContent: "center", alignItems: "center", flexDirection: "column"}}>
            <img style={{width: "70px", marginTop: "60px", marginBottom: "0", display:"flex", justifyContent: "center", alignItems: "center"}} src={bot}></img>
            <p>Comming Soon</p>
        </div>
        </>
    )
}

export default Research