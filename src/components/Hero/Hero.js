import React from 'react'
import { useWindowSize } from '../../helpers/windowSize'
import { Link } from 'react-router-dom'
import './Hero.scss'


const Hero = () => {
  const size = useWindowSize();

  return(
    <>
      <div className="custom-body text-light">
        <Link className="hero-router" to="/hakkimizda">
          <section className="hero-section text-left">
            <div className="jumbotron jumbotron-fluid text-left" style={{height: `${size.height - 200}px`}}>
              <div className="container">
                <div className="col-lg-12 float-right">
                  <div className="hero-info" style={{height: `${size.height - 200}px`}}>
                    <h2 className="hero-text">
                      Çağrı merkezinizde;
                      Müşterilerinizin sorunlarını hemen çözmek ister misiniz?
                      Ekibinizin performansını nasıl artırabilirsiniz?
                      Müşteri memnuniyetini nasıl kazanırsınız?
                      Ulak, sizin için etkili bir problem çözme yolu sunuyor.
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </Link>
      </div>
    </>
  );
}

export default Hero;


