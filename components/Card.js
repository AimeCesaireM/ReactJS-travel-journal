import React from 'react';

export default function Card (props) {
   return ( 
       <div >
       <div className = "card">
            <img className = "card--img"
             src = {`../images/${props.imageUrl}`} />
             
        <div className = "card--div--content">
            <div className = "card--location--div">
                 <img className = "card--location-pin" 
                      src = "../images/location-logo.png" />
                <span className = "uppercase"> {props.location} </span>
                 <span> <a href = {props.googleMapsUrl}> View on Google Maps </a> </span>
            </div>
            <h2> <b> {props.title} </b> </h2>
            <p className = "card--dates"> 
                <span> {props.startDate} </span> - 
                <span> {props.endDate} </span>
            </p>
            <p className = "card--description" > {props.description} </p> 
        </div>
    </div>
    <hr />
    </div>
   )
        
}