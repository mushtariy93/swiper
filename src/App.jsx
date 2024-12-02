import Section from "./components/Section"
import Swipper from "./components/Swiper";
import Header from "./components/Header";

import { ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Products from "./components/Products";



function App() {

  
  return (
    <>
      <Header/>
      <Section />
      <Swipper/>
      <Products/>
      <ToastContainer />
    </>
  );
}

export default App
