/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import ParticlesBg from 'particles-bg'

const Hero = () => {
  return (
    <section
      id="hero"
      className=""
    >
      <ParticlesBg color= "#183b66" type="cobweb" num={450} bg={true} />
      <div className="container valign-wrapper jc-center">
        <div className="valign center-align black-text" >
          <h2>
            Celictronix Repairs
          </h2>

          <p className="big">
            We are a one stop solution 
            <br/>
            for your mobile repairs!
          </p>

          <a className="btn waves-light waves-effect m-r-16" target="_blank" href="https://www.facebook.com/CelictronixRepairs/">Contact Us</a>
          <a className="btn waves-light waves-effect" target="_blank" href="https://www.instagram.com/celictronixrepairs/">Follow Us</a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
