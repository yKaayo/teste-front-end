// Layout
import Footer from "./layout/Footer";
import Brandings from "./layout/Brandings";
import BuyByCategory from "./layout/BuyByCategory";
import Header from "./layout/Header";
import Hero from "./layout/Hero";
import Newsletter from "./layout/Newsletter";
import Partners from "./layout/Partners";
import Showcase from "./layout/Showcase";

const App = () => {
  return (
    <>
      <Header />
      <Hero />
      <BuyByCategory />
      <Showcase filter={true} />
      <Partners />
      <Brandings />
      <Showcase />
      <Partners />
      <Showcase />
      <Newsletter />
      <Footer />
    </>
  );
};

export default App;
