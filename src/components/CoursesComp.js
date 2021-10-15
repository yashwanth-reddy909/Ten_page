import React from "react";
import CourseList from './Courses';
function Courses(props){
    return(
        <div id='courses'>
            {CourseList.map((each,i)=>(<div className='eachcourse' key={each[2]}><div><img src={each[2]} className='courseimg' alt={each[0]}/></div>
                                        <div className='q1'>{each[0]}<div className='q2'>Rupees: {each[1]}</div><div onClick={props.handleClick} id={i} className='q3'>Add to Cart</div></div>  
            </div>))}

        </div>);
}
export default Courses;