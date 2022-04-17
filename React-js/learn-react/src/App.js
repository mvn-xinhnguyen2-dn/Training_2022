import Header from "./components/Header";
import Slide from "./components/Slide";
import Banner from "./components/Banners/Banner";
import Product from "./components/Products/Product";
import Service from "./components/Services/Service";
import News from "./components/News/News";
import Suggest from "./components/Suggests/Suggest";
import Footer from "./components/Footer";
import React, { Component } from 'react'

export default class App extends Component {
  render() {
    return (
    <>
      <Header />
      <main className="main-page">
        <Slide />
        <Banner />
        <Product />
        <Service />
        <News />
        <Suggest />
      </main>
      <Footer />
    </>
    )
  }
}
