import './App.css';
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import {Home} from './components/Home'
import Login from './components/Login';
import Registration from './components/Registration'
import Navigation from './components/Navigation'
import PostAd from './components/PostAd'
import News from './components/News'
import { createContext,useState} from 'react';
import Payment from "./components/Payment";
import PaymentForm from './components/PaymentForm.js';

function App() {
 const Stateapp=createContext();
 const [isLogin,setIsLogin] =  useState({});
 
  return (
    <BrowserRouter>
    <div className="container" >
    
        <Navigation isData={isLogin}/>
        <Routes>
          <Route path='/' element={ <Home/> } />
          <Route path='/Login' element={<Stateapp.Provider value={{isLogin,setIsLogin}}>
      <Login stateData={Stateapp}/>
    </Stateapp.Provider>}/>
          <Route path='/Registration' element={<Registration/>}/>
          <Route path='/PostAd' element={<PostAd/>}/>
          <Route path='/News' element={<News/>}/>
          <Route path='/Payment' element={<Payment/>} />
          <Route path='/PaymentForm' element={<PaymentForm/>} />
        </Routes>
    </div>
    </BrowserRouter>
  );
}
export default App;
