import React, { useState } from "react";
import "./animation.css";
import Button from "../../UI/Button";

const Animations = (props) => {
  const [showAnimations, setShowAnimations] = useState(false);
  return (
    <>
      <Button onClick={() => setShowAnimations((prev) => !prev)}>
        Animations
      </Button>
      {showAnimations && (
        <div className="animation">
          <button
            onClick={() => {
              props.change(props.prev, "pose1");
            }}
          >
            Squat
          </button>
          <button
            onClick={() => {
              props.change(props.prev, "pose2");
            }}
          >
            Jump
          </button>
          <button
            onClick={() => {
              props.change(props.prev, "pose3");
            }}
          >
            Box
          </button>
          <button
            onClick={() => {
              props.change(props.prev, 0);
            }}
          >
            T pose
          </button>
        </div>
      )}
    </>
  );
};

export default Animations;
