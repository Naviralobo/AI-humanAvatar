import React, { useState } from "react";
import Button from "../../UI/Button";

const textureArray = [
  "/textureImages/noTexture.jpeg",
  "/textureImages/texture_1.jpeg",
  "/textureImages/texture_2.jpeg",
  "/textureImages/texture_3.jpeg",
  "/textureImages/texture_4.jpeg",
];
const Textures = (props) => {
  const [showTextures, setShowTextures] = useState(false);
  return (
    <>
      <Button onClick={() => setShowTextures((prev) => !prev)}>
        Bottom Textures
      </Button>
      {showTextures && (
        <div>
          {textureArray.map((item) => (
            <button
              onClick={() => {
                props.setTexture(item);
              }}
            >
              {item.substring(15, 24)}
            </button>
          ))}
        </div>
      )}
    </>
  );
};

export default Textures;
