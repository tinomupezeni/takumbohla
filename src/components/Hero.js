import "./HeroStyles.css";
function Hero(props) {
 
  return (
    <>
    <div className="container">
      <img alt="img" src={props.image} />
      <div className='cont-text'>
        <h1>{props.head}</h1>
        <p>{props.text}</p>
        <a href={props.url} className={props.display}>ingredients</a>
      </div>
    </div>
    </>
  );
}

export default Hero;
