import Footer from "./components/Footer";
import Header from "./components/Header";
import About from "./sections/About";
import Contact from "./sections/Contact";
import Hero from "./sections/Hero";
import Machines from "./sections/Machines";
import Services from "./sections/Services";

const Home = () => {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Services />
      <Machines />
      <Contact />
      <Footer />
    </>
  );
};
export default Home;
