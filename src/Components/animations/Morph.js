import React, { useState } from "react";
import Button from "../../UI/Button";

const Morph = (props) => {
  const [showMorphAttributes, setShowMorphAttributes] = useState(false);

  return (
    <>
      <Button onClick={() => setShowMorphAttributes((prev) => !prev)}>
        sizes
      </Button>
      {showMorphAttributes && (
        <div>
          <div>
            <input
              type="number"
              id="tops"
              name="tops"
              value={props.topMorph}
              onChange={(e) => props.setTopMorph(e.target.value)}
            />
            <label htmlFor="tops">Tops</label>
          </div>
          <div>
            <input
              type="number"
              id="bottoms"
              name="bottoms"
              value={props.bottomMorph}
              onChange={(e) => props.setBottomMorph(e.target.value)}
            />
            <label htmlFor="bottoms">Bottoms</label>
          </div>
          <div>
            <input
              type="number"
              id="shoes"
              name="shoes"
              value={props.shoeMorph}
              onChange={(e) => props.setShoeMorph(e.target.value)}
            />
            <label htmlFor="shoes">Shoes</label>
          </div>
          <div>
            <input
              type="number"
              id="body"
              name="body"
              value={props.bodyMorph}
              onChange={(e) => props.setBodyMorph(e.target.value)}
            />
            <label htmlFor="shoes">Body</label>
          </div>
        </div>
      )}
    </>
  );
};

export default Morph;
