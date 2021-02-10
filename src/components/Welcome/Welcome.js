import React from "react";

import "./welcome.scss";

const Welcome = () => {
  return (
    <div className="Welcome">
      <div className="Welcome__img">
        <img src="https://res.cloudinary.com/duprwuo4j/image/upload/v1612918368/confcode_m3qgnf.png" />
      </div>

      <div className="Welcome__text">
        <h5>Welcome To</h5>
        <h3>
          The Biggest Coding <br />
          Conference of the <br />
          Year 2022
        </h3>
        <p id="wc-p">
          Our set he for firmament morning sixth subdue darkness creeping
          gathered divide our let god. moving. Moving in fourth air night bring
          upon you’re it beast.
        </p>
        <button type="button">Learn More</button>
      </div>
    </div>
  );
};

export default Welcome;
