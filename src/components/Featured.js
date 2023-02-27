import "./FeaturedStyles.css";
import Recipes from "./Recipes";
import React from "react";

const delay = 5500;
function Feature() {
  const [index, setIndex] = React.useState(0);
  const timeoutRef = React.useRef(null);
  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }
  React.useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === Recipes.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );
    return () => {
      resetTimeout();
    };
  }, [index]);
  return (
    <>
      <div className="spices">
        <div className="slideshow">
          <div
            className="slideshowSlider"
            style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
          >
            {Recipes.map((item, index) => (
              <div className="feature" key={index}>
                <h2 className="large-screen">{item.hname}</h2>
                <div className="feature-data">
                  <div className="image">
                    <img alt="img" src={item.imagey} />
                  </div>
                  <div className="text">
                  <h2 className="small-screen">{item.hname}</h2>
                    {item.steps.map((element, index) => {
                      return <li key={index}>{element}</li>;
                    })}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="slideshowDots">
            {Recipes.map((_, idx) => (
              <div
                key={idx}
                className={`slideshowDot ${index === idx ? " active" : ""}`}
                onClick={() => {
                  setIndex(idx);
                }}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

//setTimeout(Feature(), 3000)

export default Feature;
