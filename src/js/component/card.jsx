import React from "react";
import propTypes from "prop-types";

const Card = (props)=>{
    return (
        <div className="card col-md-3 mt-4 ms-5">
  <img src={props.img} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div>
    );
};

export default Card;