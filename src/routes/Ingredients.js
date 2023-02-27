import Hero from "../components/Hero";
import IngredientsData from "../components/IngredientsData";
import NavBar from "../components/NavBar";
import ingredients from '../assets/about.jpg'
import Footer from "../components/Footer";

function Ingredients() {
  return (
    <>
      <NavBar 
      showBtn='orderBottom'
      />
      <Hero 
      head='your ingredients'
      display='show'
      text='better food better mood'
      image={ingredients}
      classname='cont-text ing'
      />
      <IngredientsData />
      <Footer />
    </>
  );
}

export default Ingredients;
