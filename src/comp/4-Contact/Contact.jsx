import React from "react";
import "../4-Contact/Contact.css"
import { useForm, ValidationError } from '@formspree/react';
import Lottie from "lottie-react";
import contact from "../../../src/anm/contact.json";
import done from "../../../src/anm/done.json";

const Contact = () => {
  const [state, handleSubmit] = useForm("mnqelrog");
  return <div className="contact d-flex">
    <div className="left">
<div className="title">
  <h1 className=" h1 d-flex"> <span className="icon-mail-envelope-closed"></span>Contact us</h1>
  <p>Conatct us for more information and Get notified when i publish something new</p>
</div>
<div className="contactgem">
  <form onSubmit={handleSubmit} className="d-flex" action="">
    <div className="d-flex">
    <label htmlFor="email">Your Email</label>
    <input autoComplete="off" type="email" name="email" placeholder="Enter Youe Email" id="email" />
    <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
    </div>
    <div className="d-flex "> 
    <label htmlFor="message">Your Message</label>
    <textarea autoComplete="off" placeholder="Enter Your Message" name="message" id="message" ></textarea>   <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />
    
    </div>
    <button type="submit" disabled={state.submitting}>{state.submitting ? "Submitting..." :"submit"}</button>
    {state.succeeded&& (<p className="d-flex mesu" style={{  marginTop:'1.7rem',
     }}> <Lottie loop={false}
         
          style={{height:55}}
          animationData={done}
        />Your message has been sent successfuly</p>)}
  </form>
</div>
</div>
<div className="right">  <Lottie
          className="deve"
          style={{}}
          animationData={contact}
        /></div>
  </div>;
};
export default Contact;
