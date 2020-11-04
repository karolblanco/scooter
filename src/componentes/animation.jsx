import '../styles/animation.css';
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

function animation(){

  return(

  <div id="container">
  <div className="row">
    <div className="col-lg-8 mx-auto">

      <div id="texto" className="text-nowrap  noSelect" >

        <div  id="caption v-middle text-center">
          <h1  id="cd-headline" className="clip">
            <span  id="blc">New </span>
            <span id="cd-words-wrapper">
              <b  id="is-visible">Scooter</b>
              <b>Transportation</b>
              <b>Life.</b>
            </span>
            <span id="blinking">|</span>
          </h1>
        </div>

      </div>

      <p id="textoAnim" className="intro-text" >A new environmentally&nbsp;friendly&nbsp;way of transporting</p>
      <a className="btn btn-link btn-circle" role="button" href="#about">
      <i className="fa fa-angle-double-down animated"></i></a>
    </div>
  </div>
</div>


  );
}


export default animation;
