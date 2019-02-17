import React from 'react';

const ContactAgent = ({ address }) => (
  <div className="contact-agent">
    <h3>Contact Agent</h3>
    <input type="text" placeholder="Your Name" />
    <input type="text" placeholder="Phone" />
    <input type="text" placeholder="Email" />
    <textarea defaultValue={`I am interested in ${address}`} />    
    <button>Contact Agent</button>
    <p>
      By pressing Contact Agent, you agree that Pillow Group 
      and real estate professionals may call/text you about 
      your inquiry, which may involve use of automated means 
      and prerecorded/artificial voices. You don't need to 
      consent as a condition of buying any property, goods or 
      services. Message/data rates may apply. You also agree to 
      our Terms of Use. Pillow does not endorse any real estate 
      professionals.
    </p>
  </div>
);

export default ContactAgent;