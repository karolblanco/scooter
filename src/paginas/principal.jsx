import NavBar from '../componentes/navbar.jsx'
import Animation from '../componentes/animation.jsx'
import Welcome from '../componentes/welcome.jsx'
import React from 'react'

function Principal() {
  return(
   <React.Fragment>
        <NavBar></NavBar>
          <Animation></Animation>
          <Welcome></Welcome>
    </React.Fragment>
  );
}

export default Principal;
