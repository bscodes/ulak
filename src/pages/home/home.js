import React from 'react'
import a1 from '../../image/anasayfa_1.jpg';
import cati from '../../image/anasayfa_dijitalCati.jpg';

const Home = () => {
  return(
    <>
      <div className="custom-body text-light">
        <section className="hero-section">
          <div className="container-fluid">
            <div className="row no-gutters">
              <div className="col-lg-6">
                <div className="left-bar">
                  <img src={a1} alt="" className="hero-image"/>
                  <h3 className="hero-text">UlakTeknoloji</h3>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="right-bar">
                  <div className="row no-gutters">
                    <div className="col-lg-12">
                      <div className="crop">
                        <img src={cati} alt="" className="hero-image"/>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Home;