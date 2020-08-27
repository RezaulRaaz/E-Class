import React, {useState } from 'react';
import Course from '../course/Course';
import Cart from '../cart/Cart';
import data from '../../../fakedata/data'


const Main = () => {
    const[course,setCourse]=useState(data);
    const[courseCart,setCourseCart]=useState([]);
    const addToCart=(course)=>{
        const newCart=[...courseCart,course]
        setCourseCart(newCart)
    }
    return (
        <div>
            <div className="row">
            <div className="col-lg-9 col-md-8 col-sm-12 mt-5">
                <div className="container">
                      <h3>Total Course {course.length}</h3>
                 <div className="row">
                     {
                         course.map(data=>
                            <div className="col-lg-4 mb-3">
                                <Course 
                                 course={data} key={data.id}
                                 addToCart={addToCart}
                                 ></Course>
                            </div>
                         )
                     }
                 </div>
                 
                </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-12 mt-5">
               <div className="container">
                 <Cart courses={courseCart}></Cart>
               </div>
            </div>
            </div>
        </div>
    );
};

export default Main;