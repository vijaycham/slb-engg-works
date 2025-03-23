import Footer from "./components/Footer";
import Header from "./components/Header";
import About from "./sections/About";
import Contact from "./sections/Contact";
import Home from "./sections/Home";
import Machines from "./sections/Machines";
import Services from "./sections/Services";
import Clients from "./sections/Clients";

const Page = () => {
  return (
    <>
      <Header />
      <Home />
      <About />
      <Services />
      <Machines />
      <Clients />
      <Contact />
      <Footer />
    </>
  );
};
export default Page;
