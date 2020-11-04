import '../styles/welcome.css'
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';


function welcome() {
  return (
    <div id="welp">
      <div className="container">

        <section>
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6 order-lg-1">
                <div id="welimg"className="p-5"></div>
              </div>
              <div className="col-lg-6 order-lg-2">
                <div id="welText"className="p-5">
                  <h2 className="display-4" >WELCOME TO FUNSCOOTER</h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod aliquid, mollitia odio veniam sit iste esse assumenda amet aperiam exercitationem, ea animi blanditiis recusandae! Ratione voluptatum molestiae adipisci, beatae
                    obcaecati.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}

export default welcome;
