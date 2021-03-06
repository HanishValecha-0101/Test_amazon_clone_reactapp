import React from 'react'
import "./Header.css";
import {Link} from 'react-router-dom';
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import {useStateValue} from './StateProvider';
import {auth} from './firebase';
function Header() {
    const login = () => {
        if(user){
            auth.signOut();
        }
    }

    const [{basket,user},dispatch]=useStateValue();

    return (
        <nav className="header">
            {/* logo */}
           <Link to="/"><img className="header__logo" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"/></Link> 
           <div className="header__search">
           <input type="text" className="header__searchInput"/>
           <SearchIcon className="header__searchIcon" />
           </div>
           <div className="header__nav">
               <Link to={!user && "/login"} className="header__link">
                   <div onClick={login} className="header__option">
                       <span className="header__optionLine1">Hello {user?.email}</span>
                       <span className="header__optionLine2">{user ? 'Sign Out' : 'Sign In'}</span>
                   </div>
               
               </Link>

               <Link to="/" className="header__link">
                   <div className="header__option">
                       <span className="header__optionLine1">Returns </span>
                       <span className="header__optionLine2">& Orders</span>
                   </div>
               
               </Link>

               <Link to="/" className="header__link">
                   <div className="header__option">
                       <span className="header__optionLine1">Your</span>
                       <span className="header__optionLine2">Prime</span>
                   </div>
               
               </Link>
               <Link to="/checkout" className="header_link">
                   <div className="header__optionBasket">
                       <ShoppingBasketIcon />
                       <span className="header__optionLine2 header__basketCount">{basket?.length}</span>
                   </div>
               
               </Link>

           </div>
           
            
        </nav>
    )
}

export default Header
