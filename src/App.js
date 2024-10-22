import "./App.css";
import AppDownload from "./Components/AppDownload/AppDownload";
import PopularDishes from "./Components/Dishes/PopularDishes";
import Home from "./Components/Home/Home";
import Navigation from "./Components/Navigation/Navigation";
import Category from "./Components/Category/Category";
import CustomerReviews from "./Components/Customer/CustomerReviews";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <>
      <Navigation />
      <Home />
      <AppDownload />
      <PopularDishes />
      <Category />
      <CustomerReviews />
      <Footer />
    </>
  );
}

export default App;
