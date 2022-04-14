function Product() {
  return (
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
  )
}
export default Product;
