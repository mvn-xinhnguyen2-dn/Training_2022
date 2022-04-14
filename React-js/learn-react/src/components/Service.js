function Service() {
  return (
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
  )
}
export default Service;
