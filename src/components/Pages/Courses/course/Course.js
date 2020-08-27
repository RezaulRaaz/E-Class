import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

const Course = (props) => {
    const data=props.course;
    return (
        <div>
           <div className="card">
                <img src={data.image} alt="boohoo" className="card-img-top"/>
                <div className="card-body">
                    <h5 className="card-title">{data.name}</h5>
                <h6>Created by {data.Creator}</h6>
                <p className="card-text">JavaScript has become the most popular and essentials scripting language. If you are planning to go for web development or any JavaScript based framework like Angular, React, or Vue js,</p>
                </div>
                <div className="card-footer d-flex justify-content-between align-items-center">
                    <h5 className="text-muted">${data.price}</h5>
                    <button className="btn btn-dark" onClick={()=>props.addToCart(data)} ><FontAwesomeIcon icon={faPlus} />&nbsp; &nbsp;Add to Cart</button>
                </div>
            </div>
        </div>
    );
};

export default Course;