import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card1 from './card1';
import Card2 from './card2';


function App() {
  return (
    <div className="container">
    <div className="card mb-3" style={{width:"auto",color:"white",border:"10px"}}>
    <div className="row">
      <div className='col-lg-4 sm-12'>
      <Card1/>
      </div>
      <div className='col-lg-8 sm-12'>
      <div className='row plan'>
        <div className='col-lg-8 sm-12' >
        <div className='heading'>
        <h1>Start now your <strong>free plan</strong></h1>
        </div>
        </div>
        <div className='col-lg-4 sm-12'>
        <div className='contacts'>
        <h6 style={{color:"black"}}>Are you a corporate?</h6>
        <p ><a href='#'>Contact us</a></p>
        </div>
        </div>
      </div>
      <div className='row price'>
      <div className='col-lg-6 sm-12'>
      <Card2 style={{backgroundColor:"#ECECEC",color:"black"}} 
       cardName="liteCard"
       headingLeft="Lite"
       customHr="lite-hr"
       headingRight="Free"
       text="with restrictions"
       subscription="subscription1"
       paragraphText="Plan includes:"
       button="button1"
        list1="Manage conversations directly from your website"
        list2="Bot without the AI service"
        list3="Achieved chat for 30 days"
        list4="Free,for always"
        buttonClass="btn btn-primary"
      />
      </div>
      <div className='col-lg-6 sm-12'>
      <Card2 style={{backgroundColor:"#051367",color:"white",fontSize:"13px"}} 
      cardName="proCard"
      headingLeft="Pro"
      customHr="pro-hr"
      headingRight="29$"
      text="monthly"
      subscription="subscription2"
        paragraphText="All of lite plus:"
        button="button2"
        list1="Bot with AI that can recognize the user's behaviour and can automize the sentences"
        list2="Unlimited conversational flows"
        list3="Facebook,Twitter,Instagram and LinkedIn intergration"
        list4="Achieved chat without limits"
        buttonClass="btn btn-light"
      />
      </div>
      </div>
      
      </div>
    </div> 
</div>
</div>
  )  
}

export default App;
