import React from "react";
import List from "./List";
import Button from "./Button";

function Card2(props){
    return(
        <div className={props.cardName} style={props.style}>
        <div className="row">
            <div className="col-8 planName">
                <h4><strong>{props.headingLeft}</strong></h4>
                <hr className={props.customHr}/>
            </div>
            <div className="col-4 planPrice" >
                <h5>{props.headingRight}</h5>
                <p className={props.subscription}>{props.text}</p>
            </div>
        </div>
  <div className="card-body" >
   <p className="cardText"><strong>{props.paragraphText}</strong></p> 
   <List list1={props.list1}
       list2={props.list2}
       list3={props.list3}
       list4={props.list4}
   />
   <div className={props.button}>
       <p>View all the features</p>
       <Button buttonClass={props.buttonClass}/>
   </div>
  </div>
</div>
    )
}

export default Card2;