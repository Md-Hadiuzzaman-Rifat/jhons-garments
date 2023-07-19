import React from "react";
import Button from "../Button/Button";

const Cover = () => {
  return (
    <div>
      <div className="container">
        <div className="p-light">GARMEN TEXTILE INDUSTRY</div>
        <h1>You Can Never Go Wrong With Our Quality</h1>
        <p>
          Integer id ipsum eu massa pretium pulvinar non vitae massa donec ut
          dignissim. Metus aenean vulputate ex sed sem aliquet dapibus. Mauris
          imperdiet.
        </p>
        <section>
          <Button>DISCOVER MORE</Button>
          <div className="video-player"></div>
        </section>
      </div>
    </div>
  );
};

export default Cover;
