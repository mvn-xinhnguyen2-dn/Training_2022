import Header from "./components/Header";
import Slide from "./components/Slide";
import Baner from "./components/Baner";
import Product from "./components/Product";
import Service from "./components/Service";
import News from "./components/News";
import Suggest from "./components/Suggest";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <main className="main-page">
        <Slide />
        <Baner />
        <Product />
        <Service />
        <News />
        <Suggest />
      </main>
      <Footer />
    </>
  );
}

export default App;
