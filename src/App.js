import React,{useEffect} from 'react';
import './App.css';
import { 
	BrowserRouter as Router, 
	Route, 
	Link, 
	Switch 
} from 'react-router-dom'; 
import Header from './Header';
import Home from './Home';
import Product from "./Product";
import Checkout from "./Checkout";
import CheckoutProduct from './CheckoutProduct';
import Login from "./Login";
import {auth} from "./firebase";
import { useStateValue } from './StateProvider';


function App() {
  const [{user},dispatch]=useStateValue();  //data layer
  
  //adding listner
  useEffect(() => {
    const unsubscribe=auth.onAuthStateChanged((authUser)=>{
      if(authUser){
        //the user is logged in
        dispatch({
          type:"SET_USER",
          user:authUser,
        })
      }else{
        dispatch({
          type:"SET_USER",
          user:null,
        })
      }
    })
    return()=>{
      //any type of cleanup
      unsubscribe();
    }
  
  }, [])



  return (
    <Router>
       <div className="app">
         <Switch>
           <Route path="/checkout">
           <Header />
           <Checkout />
          
           </Route>
           <Route path="/login">
            <Login />
             
           </Route>
           <Route path="/">
             <Header />
             <Home />
          
           </Route>
         </Switch>
       
       </div>

    </Router> 
   
  );
}

export default App;
