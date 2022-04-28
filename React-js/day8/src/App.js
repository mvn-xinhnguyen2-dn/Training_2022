import './assets/styles.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home/Home';
import Header from './components/layouts/Header/Header';
import AboutUs from './pages/AboutUs/AboutUs';
import UserList from './pages/UserList/UserList';
import NoPage from './pages/NoPage/NoPage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Home />} />
          <Route path="about-us" element={<AboutUs />} />
          <Route path="user" element={<UserList />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
