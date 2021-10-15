import React,{useState} from 'react';
// React-routers 
import {BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import './App.css';
import Home from './components/HomeComponent';
import Hiring from './components/Hiring';
import Courses from './components/CoursesComp';
import Cart from './components/cart';
const linkstyle={
  textDecoration: 'none',
  color: 'black'
}
function App() {
  //creating a state array that holds the cart items
  const [cartitems,setCartitems]=useState([]);

  // adding an item to cartitems state 
  // whenever 'Add to Cart' button clicked this function gets triggered 
  // after that particular item gets add in to state 'cartiems' 
  // if item is already in cart it performs a delete operation
  const handleCart=(e)=>{
    const found = cartitems.find(element => element === e.target.id);
    if(!found){
      setCartitems(prevCart=>[...prevCart,e.target.id]);
      // according to that UI changes 
      e.target.innerHTML='Remove item from cart'
    }
    else{
      const k=cartitems.filter(each=> {
        return each!==e.target.id;
      });
      setCartitems(k);
      e.target.innerHTML='Add to Cart'
    }
  }

  // deleting a particular item from the cart 'val' is the item number
  // after checking val is present in cart or not 
  // then preforming deleting the item 
  // this function sends through as a prop to Cart Component 
  const deleteItem=(val)=>{
    const k=cartitems.filter(each=> {
      return each!==val
    });
    setCartitems(k);
  }

  //frontend UI 
  return (
    <Router>
    <div className="totpage">
      <div id='headpart'>
        <div className='logo'>
        <img src='https://static.wixstatic.com/media/693073_ee31d3dcd4064037a097ec905d0c841b~mv2.jpg/v1/fill/w_125,h_100,al_c,q_80,usm_0.66_1.00_0.01/pp_edited.webp' alt='mainlogo'/>
        <div className='brandname'><span>T</span>he <span>E</span>ntrepreneurship <span>N</span>etwork</div>
        </div>
        <div className='headerbuttons'>
          <span className='but'>
            <Link to={'/'} style={linkstyle}>
            Home
            </Link>
            </span>
            <span className='but'>
            <Link to={'/courses'} style={linkstyle}>
              Online courses
            </Link>
            </span>
            <span className='but'>
            <Link to={'/hiring'} style={linkstyle}>
              We're hiring
              </Link>
              </span>
            <span className='but'>
            <Link to={'/cart'} style={linkstyle}>
                Cart{cartitems.length!==0 && <span id='cartlen'>{cartitems.length}</span>}
              </Link>
            </span>
            <span className='but'>
              <Link to={'Aboutus'} style={linkstyle}>
              Learn About Us
              </Link>
              </span>
        </div>
        </div>
        <div id='eachcomp'>
         {/* These are the Routes for the whole application */}
        <Switch>
               {/* Home Component */}
              <Route exact path='/'>
                <Home />
              </Route>
               {/* All courses displays on /courses endpoint by Courses Component and  it holds the handleCart (Adding item to cart)
                      as a prop so that we can add items to cart through Courses Component 
                    */}
              <Route exact path='/courses'>
                <Courses handleClick={handleCart}/>
              </Route>

              {/* this component displays all cart items and with there total price with this component we can even delete item */}
              <Route exact path='/cart'>
                <Cart cartitems={cartitems} handleClick={deleteItem}/>
              </Route>
              <Route exact path='/hiring'>
                <Hiring />
              </Route>
        </Switch>
        </div>
        <div id='footer'>
              {/* Contact Form */}
        <div className='conh1'>Contact us </div>
          <div className='divinput'><input placeholder='Name' className='inputfields' type='text'/></div>
          <div className='divinput'><input placeholder='Mobile Number'className='inputfields' type='text'/></div>
          <div className='divinput'><input placeholder='College Name' className='inputfields' type='text'/></div>
          <div className='divinput'><input placeholder='Email Address' className='inputfields' type='text'/></div>
          <div ><a className='submit' href='#tr'>Submit</a></div> 
          </div>  
        <div className='soc'>
          <div className='socdiv'><a href='https://www.facebook.com/The-Entrepreneurship-Network-105155667888383/'><img src='https://www.glyphicons.com/img/tools/facebook.svg' alt='facebooklogo' className='socialimg'/></a></div>
          <div className='socdiv'><a href='https://twitter.com/We_Are_TEN?s=08'><img src='https://www.glyphicons.com/img/tools/twitter.svg' className='socialimg' alt='twitterlogo'/></a></div>
          <div className='socdiv'><a href='https://www.instagram.com/theentrepreneurshipnetwork/'><img src='https://www.glyphicons.com/img/tools/instagram.svg' className='socialimg' alt='instagramlogo'/></a></div>
          <div className='copyrights'>	&copy; 2020 Limitless Technologies - The Entrepreneurship Network</div>
          </div>     
    </div>
    </Router>
  );
}

export default App;
