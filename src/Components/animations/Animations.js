import React, { useState } from "react";
import "./animation.css";
import Button from "../../UI/Button";
let arr = ["pose1", "pose2", "pose3", 0];

const Animations = (props) => {
  const [showAnimations, setShowAnimations] = useState(false);
  return (
    <>
      <Button onClick={() => setShowAnimations((prev) => !prev)}>
        Animations
      </Button>
      {showAnimations && (
        <div className="animation">
          {arr.map((item) => (
            <button
              onClick={() => {
                props.change(props.prev, item);
              }}
            >
              {item === 0 ? "TPose" : item}
            </button>
          ))}

          <button
            onClick={() => {
              props.rotate(!props.rotateStatus);
            }}
          >
            {props.rotateStatus ? "Stop" : "Rotate"}
          </button>
        </div>
      )}
    </>
  );
};

export default Animations;
