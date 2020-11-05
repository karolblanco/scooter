import Scooter from '../img/scooter.png'
import '../styles/animation.css';
import React from 'react'
import Typical from 'react-typical'
import 'bootstrap/dist/css/bootstrap.min.css';

function animation(){

  return(
    <div id="container">
          <div id="texto" className="animation">
            <header id="textoanim" className="animation-header">

            <p> New  {' '}
            <Typical
            loop={Infinity}
            wrapper="b"
            steps={[
              'Scooter',
              1000,
              'Transportation',
              1000,
              'Life.',
              1000
            ]}
            />
            </p>
            </header>
          </div>
          <p id="texto"className="intro-text">A new environmentally&nbsp;friendly&nbsp;way of transporting</p>
          <a className="btn btn-link btn-circle" role="button" href="#about"><i className="fa fa-angle-double-down animated"></i></a>
        </div>


  );
}


export default animation;
