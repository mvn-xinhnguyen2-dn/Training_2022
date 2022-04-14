function News() {
  return (
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
  );
}

export default News;
