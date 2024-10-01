
import '../stylesheets/App.css';
import AddCar from '../SavedCars/AddCar';
import ShowCar from '../SavedCars/ShowCar';
import Header from './Main/Header';
import Welcome from './Main/Welcome';
import Buy from './Buy/Buy'
import Finance from '../Finances/Finance';
import Research from '../Research/Research';
import SignIn from '../Signin/SignIn';
import { HashRouter as Router, Routes, Route} from "react-router-dom";

const Home = () =>{

  return(
    <div className='home'>
      <Welcome/>
      <Header/>
    </div>

  )
}

function App() {
  return (

    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/buy' element={<Buy/>}/>
        <Route path='/Finance' element={<Finance/>}/>
        <Route path="/Research" element= {<Research/>}/>
        <Route path="/Research" element= {<SignIn/>}/>




      </Routes>
    </Router>

     
      

  );
}

export default App;
