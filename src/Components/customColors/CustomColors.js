import React, { useState } from "react";
import "./customColors.css";
import Button from "../../UI/Button";

const CustomColors = (props) => {
  const [showColors, setShowColors] = useState(false);

  return (
    <>
      <Button onClick={() => setShowColors((prev) => !prev)}>
        Customize Colours
      </Button>
      {showColors && (
        <div className="colors">
          <div>
            <input
              type="color"
              id="hair"
              name="hair"
              value={props.hair}
              onChange={(e) => props.changeHairColor(e.target.value)}
            />
            <label htmlFor="hair">Hair</label>
          </div>

          <div>
            <input
              type="color"
              id="tops"
              name="tops"
              value={props.tops}
              onChange={(e) => props.changeTopColor(e.target.value)}
            />
            <label htmlFor="tops">Tops</label>
          </div>
          <div>
            <input
              type="color"
              id="bottoms"
              name="bottoms"
              value={props.bottoms}
              onChange={(e) => props.changeBottomColor(e.target.value)}
            />
            <label htmlFor="bottoms">Bottoms</label>
          </div>
          <div>
            <input
              type="color"
              id="shoes"
              name="shoes"
              value={props.shoes}
              onChange={(e) => props.changeShoeColor(e.target.value)}
            />
            <label htmlFor="shoes">Shoes</label>
          </div>
          <div>
            <input
              type="color"
              id="body"
              name="body"
              value={props.body}
              onChange={(e) => props.changeBodyColor(e.target.value)}
            />
            <label htmlFor="shoes">Body</label>
          </div>
        </div>
      )}
    </>
  );
};

export default CustomColors;
