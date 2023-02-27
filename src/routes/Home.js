import Hero from "../components/Hero";
import NavBar from "../components/NavBar";
import Featured from "../components/Featured";
import HomeImg from "../assets/milw2.jpg";
import Footer from "../components/Footer";
import HealthyFeature from "../components/HealthyFeature";

function Home() {
  return (
    <>
      <NavBar />
      <Hero
        image={HomeImg}
        head="takumbohla"
        text="bringing you the perfect kitchen buddies"
        url="/ingredients"
        classname="cont-text"
      />
      <div className="feature-text">
        <h1>simple recipes to try out</h1>
        <p>ingredients that go beyond just taste</p>
      </div>
      <Featured />
      <div className="feature-text">
        <h1>spices with tremendous benefits</h1>
      </div>
      <HealthyFeature />
      <Footer />
    </>
  );
}

export default Home;
