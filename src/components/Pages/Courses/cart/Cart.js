import React from 'react';

const cart = (props) => {
        const courses=props.courses;
        const TotalPrice= courses.reduce((total,prd) => total + prd.price,0);
    return (
        <div>
             <h6>Total Order: {props.courses.length}</h6>
            {
                courses.map((data)=> <div className="media mb-3">
                    <img src={data.image} with="70" height="80" className="mr-3"/>
                    <div className="media-body">
                    <h6 className="mt-0">{data.name}</h6>
                         <p>{data.Creator}</p>
                        <p>Price: ${data.price}</p>
                    </div>
                </div>)
            }
                 <h4>Total Price:  ${TotalPrice}</h4>
            
        </div>
    );
};

export default cart;