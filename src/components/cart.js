import React, { useState,useEffect } from "react";
import courses from "./Courses";
const Cart=(props)=>{
    const [tot,setTot]=useState(0);

    // with help of useEffect hook we calculate the total price for cart items
    // after the component get renders
    // and whenever props.cartitems that holds cart items changed this useEffect get trigged again component get re-renders
    // so that we can display the total amount of purchase whenever the cartiems changed 
    useEffect(()=>{
        var h=0;
        for(let i=0;i<props.cartitems.length;i++){
            h=h+courses[props.cartitems[i]][1];
        }
        setTot(h);
    },[props.cartitems])
    return(
        <div className='totcart'>
            <div id='carthalf'>

            {   props.cartitems.length===0 ? <div  className='cartempty' style={{marginTop: 20,fontSize: 30,color: 'rgb(59, 57, 57)', fontFamily: ''}}>Your cart is Empty</div> :

            props.cartitems.map((each,i)=>(<div key={i} className='eachcourse1'>
                <img src={courses[each][2]} className='eachimg1' alt={courses[each][0]}/>
                <div id='pri'>
                <div style={{textAlign: "right"}} className='Xbutton'><button value={each} onClick={e=>props.handleClick(e.target.value)}>X</button></div>
                <div>{courses[each][0]}</div>
                <div>Rupees: {courses[each][1]}</div>
                </div>
            </div>))}


            </div>
            <span id='totalamount'>
                <div className='order'>Order Summary</div>
                <div className='subtax'>Sub Total: {tot}</div>
                <div>+included tax(7.5%)</div>
                <div className='checkout'>Checkout</div>
                </span>
            </div>
    );
}
export default Cart;