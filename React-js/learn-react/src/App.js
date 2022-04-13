
function App() {
  return (
    <div className="App">
      <header className="header-page">
        <div className="header-top">
          <span/>
          <a href="./public/index.html">Today deal sale off <span>70%</span> . End in <span>00 days 00:00:00</span>. Hurry Up <i
              className="fa-thin fa-arrow-right"/></a>
          <button className="btn close">-Close</button>
        </div>
        <nav className="header-nav">
          <a className="brand-logo" href="./public/index.html"><img src="https://themes.the4.co/kalles-html/assets/images/svg/kalles.svg" alt=""/></a>
          <a className="menu-logo" href="./public/index.html">
            <img src="https://icon-library.com/images/menu-icon/menu-icon-14.jpg" alt=""/>
          </a>
          <ul className="header-menu-list">
            <li className="menu-nav-item"><a href="./public/index.html">Demo</a></li>
            <li className="menu-nav-item"><a href="./public/index.html">Shop</a></li>
            <li className="menu-nav-item"><a href="./public/index.html">Product</a></li>
            <li className="menu-nav-item"><a href="./public/index.html">Sale</a></li>
            <li className="menu-nav-item"><a href="./public/index.html">Portfolio</a></li>
            <li className="menu-nav-item"><a href="./public/index.html">Lookbook</a></li>
            <li className="menu-nav-item"><a href="./public/index.html">Blog</a></li>
          </ul>
          <ul className="nav-icon-list">
            <li className="nav-icon"><i className="fa-thin fa-magnifying-glass"/></li>
            <li className="nav-icon"><i className="fa-thin fa-user"/></li>
            <li className="nav-icon"><i className="fa-thin fa-heart"/></li>
            <li className="nav-icon"><i className="fa-thin fa-cart-shopping"/></li>
          </ul>
        </nav>
      </header>

      <main className="main-page">

        <section className="section-slide">
          <div className="container-fluit">
            {/* 3 slide show  */}
            <div id="slide-fisrt" className="slide-show">
              <img src="https://themes.the4.co/kalles-html/assets/images/home-glasses/slide-01.jpg" alt=""/>
              <div className="slide-content">
                <h2 className="slide-title">SUMMER CLEARANCE</h2>
                <p>Code Z7922G8 to Get 25% OFF</p>
                <a className="btn primary" href="./index.html">SHOP NOW</a>
                <a className="btn nocolor" href="./index.html"> VIEW PROMOTION</a>
              </div>
            </div>
            <ul className="slide-pagination">
              <li></li>
              <li></li>
              <li></li>
            </ul>

          </div>
        </section>

        <section className="section-model-image">
          <div className="container">
            <ul className="model-list wrap">
              <li className="model-item col-lg-6">
                <a href="./index.html">
                  <img src="https://themes.the4.co/kalles-html/assets/images/home-glasses/banner-01.jpg" alt=""/>
                  <div className="model-text">
                    <p className="item-shape">The classic aviator</p>
                    <p className="item-kind">MEN'S EYEWEAR<br/></p>
                  </div>
                </a>
              </li>
              <li className="model-item col-lg-6">
                <a href="./index.html">
                  <img src="https://themes.the4.co/kalles-html/assets/images/home-glasses/banner-02.jpg" alt=""/>
                  <div className="model-text">
                    <p className="item-shape">The classic aviator</p>
                    <p className="item-kind">MEN'S EYEWEAR<br/></p>
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </section>

        <section className="section-products">
          <div className="container">
            <div className="intro">
              <h3 className="intro-title">Our Products</h3>
              <i className="fa-light fa-hyphen"/>
              <i className="fa-thin fa-glasses"/>
              <i className="fa-light fa-hyphen"/>
              <p className="intro-text">Eyeglasses teamed up to design a performance cycling frame inspired by the
                French outfitter's ability to honor classic
                <br/>design while elevating technical capabilities.
              </p>
            </div>
            <div className="products-colection">
              <ul className="products-colection-list">
                <li className="colection-item" id="">FEATURED</li>
                <li className="colection-item" id="">NEW ARRIVALS</li>
                <li className="colection-item" id="">ON SALE</li>
              </ul>
              <ul className="product-list wrap">
                <li className="product-item col-lg-3">
                  <a href="./index.html" className="item-detail">
                    <img src="https://themes.the4.co/kalles-html/assets/images/home-glasses/pr-14.jpg" alt=""/>
                    <span className="quick-link">
                    </span>
                    <h4 className="product-name">Vintage Aviator Sunglasses</h4>
                    <p className="product-price">$155.00</p>
                    <ul className="product-color">
                      <li></li>
                      <li></li>
                      <li></li>
                    </ul>
                  </a>
                </li>
                <li className="product-item col-lg-3">
                  <a href="./index.html" className="item-detail">
                    <img src="https://themes.the4.co/kalles-html/assets/images/home-glasses/pr-14.jpg" alt=""/>
                    <span className="quick-link">
                    </span>
                    <h4 className="product-name">Miu Miu/Core Collection MU 08RS</h4>
                    <p className="product-price">$450.00</p>
                  </a>
                </li>
                <li className="product-item col-lg-3">
                  <a href="./index.html" className="item-detail">
                    <img src="https://themes.the4.co/kalles-html/assets/images/home-glasses/pr-14.jpg" alt=""/>
                    <span className="quick-link">
                    </span>
                    <h4 className="product-name">Miu Miu/Core Collection MU 59US</h4>
                    <p className="product-price">$388.00</p>
                  </a>
                </li>
                <li className="product-item col-lg-3">
                  <a href="./index.html" className="item-detail">
                    <img src="https://themes.the4.co/kalles-html/assets/images/home-glasses/pr-14.jpg" alt=""/>
                    <span className="quick-link">
                    </span>
                    <h4 className="product-name">Ray-Ban/Hexagonal Flat Lenses</h4>
                    <p className="product-price">$205.00 – $259.00</p>
                    <ul className="product-color">
                      <li></li>
                      <li></li>
                      <li></li>
                    </ul>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="section-services">
          <div className="container">
            <ul className="services-list wrap">
              <li className="services-item col-lg-4">
                <i className="fa-light fa-truck"/>
                <h3 className="title services">FREE SHIPPING UK&UK</h3>
                <p className="services-text">Free shipping on all orders above $100</p>
              </li>
              <li className="services-item col-lg-4">
                <i className="fa-light fa-headphones"/>
                <h3 className="title services">SUPPORT 24/7</h3>
                <p className="services-text">Contact us 24 hours a day, 7 days a week</p>
              </li>
              <li className="services-item col-lg-4">
                <i className="fa-light fa-circle-dollar-to-slot"/>
                <h3 className="title services">30 DAYS MONEY BACK</h3>
                <p className="services-text">Simply return it within 30 days for an exchange.</p>
              </li>
            </ul>
          </div>
        </section>

        <section className="section-news">
          <div className="container">
            <div className="intro">
              <h3 className="intro-title">Latest News</h3>
              <i className="fa-light fa-hyphen"/>
              <i className="fa-thin fa-glasses"/>
              <i className="fa-light fa-hyphen"/>
              <p className="intro-text">Finding eyeglasses with the qualities that are most important to you could be as
                simple as choosing a frame material
                <br/>each distinguished by its own strengths.
              </p>
            </div>
            <div className="news">
              <ul className="news-list wrap">
                <li className="news-item col-lg-4">
                  <a href="./index.html">
                    <img src="https://themes.the4.co/kalles-html/assets/images/home-glasses/blog-01.jpg" alt=""/>
                    <h3 className="title-news">Eyeglasses that Suit Your Personality</h3>
                  </a>
                  <span>On <time>August 27, 2020</time></span>
                  <p>Because people generally recognize you by your face, the eyeglasses you wear are a very real part of
                    your identity....</p>
                </li>
                <li className="news-item col-lg-4">
                  <a href="./index.html">
                    <img src="https://themes.the4.co/kalles-html/assets/images/home-glasses/blog-01.jpg" alt=""/>
                    <h3 className="title-news">Eyeglasses that Suit Your Personality</h3>
                  </a>
                  <span>On <time>August 27, 2020</time></span>
                  <p>Because people generally recognize you by your face, the eyeglasses you wear are a very real part of
                    your identity....</p>
                </li>
                <li className="news-item col-lg-4">
                  <a href="./index.html">
                    <img src="https://themes.the4.co/kalles-html/assets/images/home-glasses/blog-01.jpg" alt=""/>
                    <h3 className="title-news">Eyeglasses that Suit Your Personality</h3>
                  </a>
                  <span>On <time>August 27, 2020</time></span>
                  <p>Because people generally recognize you by your face, the eyeglasses you wear are a very real part of
                    your identity....</p>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="section-suggest">
          <div className="container wrap">
            <div className="col-lg-3">
              <p className="suggest-name">MOST REVIEW</p>
              <ul className="suggest-list">
                <li className="suggest-item">
                  <div>
                    <a href="./index.html">
                      <img src="https://themes.the4.co/kalles-html/assets/images/home-glasses/pr-14.jpg" alt=""/>
                    </a>
                  </div>
                  <div>
                    <a href="./index.html">
                      <h4 className="product-name">Vintage Aviator Sunglasses</h4>
                    </a>
                    <p className="product-price">$155.00</p>
                  </div>
                </li>
                <li className="suggest-item">
                  <div>
                    <a href="./index.html">
                      <img src="https://themes.the4.co/kalles-html/assets/images/home-glasses/pr-14.jpg" alt=""/>
                    </a>
                  </div>
                  <div>
                    <a href="./index.html">
                      <h4 className="product-name">Vintage Aviator Sunglasses</h4>
                    </a>
                    <p className="product-price">$155.00</p>
                  </div>
                </li>
                <li className="suggest-item">
                  <div>
                    <a href="./index.html">
                      <img src="https://themes.the4.co/kalles-html/assets/images/home-glasses/pr-14.jpg" alt=""/>
                    </a>
                  </div>
                  <div>
                    <a href="./index.html">
                      <h4 className="product-name">Vintage Aviator Sunglasses</h4>
                    </a>
                    <p className="product-price">$155.00</p>
                  </div>
                </li>
              
              
              </ul>
            </div>
            <div className="col-lg-3">
              <p className="suggest-name">TOP RATE</p>
              <ul className="suggest-list">
                <li className="suggest-item">
                  <div>
                    <a href="./index.html">
                      <img src="https://themes.the4.co/kalles-html/assets/images/home-glasses/pr-14.jpg" alt=""/>
                    </a>
                  </div>
                  <div>
                    <a href="./index.html">
                      <h4 className="product-name">Vintage Aviator Sunglasses</h4>
                    </a>
                    <p className="product-price">$155.00</p>
                  </div>
                </li>
                <li className="suggest-item">
                  <div>
                    <a href="./index.html">
                      <img src="https://themes.the4.co/kalles-html/assets/images/home-glasses/pr-14.jpg" alt=""/>
                    </a>
                  </div>
                  <div>
                    <a href="./index.html">
                      <h4 className="product-name">Vintage Aviator Sunglasses</h4>
                    </a>
                    <p className="product-price">$155.00</p>
                  </div>
                </li>
                <li className="suggest-item">
                  <div>
                    <a href="./index.html">
                      <img src="https://themes.the4.co/kalles-html/assets/images/home-glasses/pr-14.jpg" alt=""/>
                    </a>
                  </div>
                  <div>
                    <a href="./index.html">
                      <h4 className="product-name">Vintage Aviator Sunglasses</h4>
                    </a>
                    <p className="product-price">$155.00</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="col-lg-3">
              <p className="suggest-name">RECENT ITEMS</p>
              <ul className="suggest-list">
                <li className="suggest-item">
                  <div>
                    <a href="./index.html">
                      <img src="https://themes.the4.co/kalles-html/assets/images/home-glasses/pr-14.jpg" alt=""/>
                    </a>
                  </div>
                  <div>
                    <a href="./index.html">
                      <h4 className="product-name">Vintage Aviator Sunglasses</h4>
                    </a>
                    <p className="product-price">$155.00</p>
                  </div>
                </li>
                <li className="suggest-item">
                  <div>
                    <a href="./index.html">
                      <img src="https://themes.the4.co/kalles-html/assets/images/home-glasses/pr-14.jpg" alt=""/>
                    </a>
                  </div>
                  <div>
                    <a href="./index.html">
                      <h4 className="product-name">Vintage Aviator Sunglasses</h4>
                    </a>
                    <p className="product-price">$155.00</p>
                  </div>
                </li>
                <li className="suggest-item">
                  <div>
                    <a href="./index.html">
                      <img src="https://themes.the4.co/kalles-html/assets/images/home-glasses/pr-14.jpg" alt=""/>
                    </a>
                  </div>
                  <div>
                    <a href="./index.html">
                      <h4 className="product-name">Vintage Aviator Sunglasses</h4>
                    </a>
                    <p className="product-price">$155.00</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="col-lg-3">
              <p className="suggest-name">POPULAR ITEMS</p>
              <ul className="suggest-list">
                <li className="suggest-item">
                  <div>
                    <a href="./index.html">
                      <img src="https://themes.the4.co/kalles-html/assets/images/home-glasses/pr-14.jpg" alt=""/>
                    </a>
                  </div>
                  <div>
                    <a href="./index.html">
                      <h4 className="product-name">Vintage Aviator Sunglasses</h4>
                    </a>
                    <p className="product-price">$155.00</p>
                  </div>
                </li>
                <li className="suggest-item">
                  <div>
                    <a href="./index.html">
                      <img src="https://themes.the4.co/kalles-html/assets/images/home-glasses/pr-14.jpg" alt=""/>
                    </a>
                  </div>
                  <div>
                    <a href="./index.html">
                      <h4 className="product-name">Vintage Aviator Sunglasses</h4>
                    </a>
                    <p className="product-price">$155.00</p>
                  </div>
                </li>
                <li className="suggest-item">
                  <div>
                    <a href="./index.html">
                      <img src="https://themes.the4.co/kalles-html/assets/images/home-glasses/pr-14.jpg" alt=""/>
                    </a>
                  </div>
                  <div>
                    <a href="./index.html">
                      <h4 className="product-name">Vintage Aviator Sunglasses</h4>
                    </a>
                    <p className="product-price">$155.00</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <div className="back-top">
          <i/>
        </div>
      </main>
      <footer className="footer-page">
        <div className="container">
          <div className="footer-top wrap">
            <div className="footer-info col-lg-3">
              <ul className="info">
                <li>
                  <a className="footer-logo" href="./index.html">
                    <img src="https://themes.the4.co/kalles-html/assets/images/home-glasses/footer-logo.png" alt=""/>
                  </a>
                </li>
                  <li className="info-item">
                  <i className="fa-solid fa-hyphen"></i> 
                  <span> 184 Main Rd E, St Albans
                    VIC 3021, Australia</span>
                </li>
                <li className="info-item">
                  <i className="fa-solid fa-hyphen"></i> 
                  <span>contact@company.com</span>
                </li>
                <li className="info-item">
                  <i className="fa-solid fa-hyphen"></i> 
                  <span>+001 2233 456</span>
                </li>
                <li className="info-item">
                  <i></i>
                  <i></i>
                  <i></i>
                  <i></i>
                  <i></i>
                </li>
              </ul>
            </div>
            <ul className="footer-nav-list col-lg-13">
              <li>
                <h4 className="footer-title">Categories</h4>
              </li>
              <li><a href="./index.html">Celebrations</a></li>
              <li><a href="./index.html">Events</a></li>
              <li><a href="./index.html">Home Decor</a></li>
              <li><a href="./index.html">Seasonal Bouquet</a></li>
              <li><a href="./index.html">Wedding Decor</a></li>
            </ul>
            <ul className="footer-nav-list col-lg-13">
              <li>
                <h4 className="footer-title">Useful links</h4>
              </li>
              <li><a href="./index.html">Contact us</a></li>
              <li><a href="./index.html">Privacy Policy</a></li>
              <li><a href="./index.html">Shipping & Delivery</a></li>
              <li><a href="./index.html">Terms & Conditions</a></li>
              <li><a href="./index.html">Returns & Exchanges</a></li>
            </ul>
            <div className="signup col-lg-4">
              <li>
                <h4 className="footer-title">Newsletter Signup</h4>
              </li>
              <p>Subscribe to our newsletter and get 10% off your first purchase</p>
              <form className="form-subscribe" action="">
                <input type="text" name="" id="" placeholder="Your email address"/>
                <button className="btn submit" type="submit">Subscribe</button>
              </form>
              <div className="pay-list">
                <img src="https://themes.the4.co/kalles-html/assets/images/home-glasses/payment-01.svg" alt=""/>
                <img src="https://themes.the4.co/kalles-html/assets/images/home-glasses/payment-01.svg" alt=""/>
                <img src="https://themes.the4.co/kalles-html/assets/images/home-glasses/payment-01.svg" alt=""/>
                <img src="https://themes.the4.co/kalles-html/assets/images/home-glasses/payment-01.svg" alt=""/>
                <img src="https://themes.the4.co/kalles-html/assets/images/home-glasses/payment-01.svg" alt=""/>
                <img src="https://themes.the4.co/kalles-html/assets/images/home-glasses/payment-01.svg" alt=""/>
                <img src="https://themes.the4.co/kalles-html/assets/images/home-glasses/payment-01.svg" alt=""/>
                <img src="https://themes.the4.co/kalles-html/assets/images/home-glasses/payment-01.svg" alt=""/>
              </div>
            </div>
          </div>
          <div className="footer-top-responsive">
            <ul className="nav-responsive">
              <li><a href="./index.html"> Get intouch</a></li>
              <li><a href="./index.html"> Categories</a></li>
              <li><a href="./index.html"> Useful link</a></li>
              <li><a href="./index.html"> Newsletter signup</a></li>
            </ul>
          </div>

        </div>
        <div className="footer-bottom">
          <div className="container">
            <div className="footer-bottom-item">
              <p>Copyright © 2021 <span>Kalles</span> all rights reserved. Powered by The4</p>
              <ul className="footer-menu">
                <li><a href="./index.html">Shop</a></li>
                <li><a href="./index.html">About Us</a></li>
                <li><a href="./index.html">Contact Us</a></li>
                <li><a href="./index.html">Blog</a></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
