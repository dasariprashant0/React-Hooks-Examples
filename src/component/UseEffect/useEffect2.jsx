import React, { useEffect, useState } from "react";
import axios from "axios";

const Effect2 = () => {
  const [shownStatement, setShownStatement] = useState(false);
  const [boxPicked, setBoxPicked] = useState(0);
  const [image, setImage] = useState("");

  useEffect(() => {
    setTimeout(() => {
      setShownStatement(true);
    }, 2000);
  }, []);

  useEffect(() => {
    if (boxPicked === 0) {
      setImage("");
    } else {
      fetchIamge(boxPicked);
    }
  });

  const fetchIamge = async (boxId) => {
    if (boxId === 1) {
      const response = await axios.get(
        "https://randomfox.ca/floof/?ref=apilist.fun"
      );
      setImage(response.data.image);
    } else if (boxId === 2) {
      const response = await axios.get(
        "https://aws.random.cat/meow?ref=apilist.fun"
      );
      setImage(response.data.file);
    } else if (boxId === 3) {
      const response = await axios.get(
        "https://dog.ceo/api/breeds/image/random"
      );
      setImage(response.data.image);
    }
  };

  return (
    <div>
      <h1>useEffect2 Hook Example2: </h1>
      <div>
        {shownStatement && (
          <>
            <h1 className="scary-text">Pick A box</h1>
            <div className="box-conatiner">
              <div
                id="1"
                className="box"
                onClick={(e) => setBoxPicked(parseInt(e.target.id))}
              >
                <h2>1</h2>
              </div>
              <br />
              <div
                id="2"
                className="box"
                onClick={(e) => setBoxPicked(parseInt(e.target.id))}
              >
                <h2>2</h2>
              </div>
              <br />
              <div
                id="3"
                className="box"
                onClick={(e) => setBoxPicked(parseInt(e.target.id))}
              >
                <h2>3</h2>
              </div>
            </div>
          </>
        )}
        {image && <img src={image} alt="images" className="animal-image" />}
      </div>
    </div>
  );
};

export default Effect2;
