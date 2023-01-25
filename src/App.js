import { Canvas } from "@react-three/fiber";
import { Suspense, useState } from "react";
import { OrbitControls } from "@react-three/drei";
import Blenderman from "./Components/Blenderman";
import Animations from "./Components/animations/Animations";
import CustomColors from "./Components/customColors/CustomColors";
import "./App.css";

function App() {
  const [action, setAction] = useState({ prev: false, curr: false });
  const [rotation, setRotation] = useState(false);
  const [hair, setHair] = useState("brown");
  const [tops, setTops] = useState("black");
  const [bottoms, setBottoms] = useState("red");
  const [shoes, setShoes] = useState("black");
  const [body, setBody] = useState("white");
  return (
    <div className="display">
      <div className="left">
        <Animations
          prev={action.curr}
          rotateStatus={rotation}
          change={(prev, action) => setAction({ prev: prev, curr: action })}
          rotate={(val) => setRotation(val)}
        />
        <CustomColors
          hair={hair}
          tops={tops}
          bottoms={bottoms}
          shoes={shoes}
          body={body}
          changeHairColor={(color) => {
            setHair(color);
          }}
          changeTopColor={(color) => {
            setTops(color);
          }}
          changeBottomColor={(color) => {
            setBottoms(color);
          }}
          changeShoeColor={(color) => {
            setShoes(color);
          }}
          changeBodyColor={(color) => {
            setBody(color);
          }}
        />
      </div>
      <div className="right">
        <Canvas
          className="canvas"
          style={{ width: "600px", height: "600px", overflow: "visible " }}
        >
          <ambientLight />
          <pointLight intensity={2} position={[-3, 2, 2]} color="black" />
          <Suspense fallback={null}>
            <Blenderman
              action={action}
              hairColor={hair}
              topColor={tops}
              bottomColor={bottoms}
              shoeColor={shoes}
              bodyColor={body}
            />
          </Suspense>
          <OrbitControls
            enableDamping={true}
            autoRotate={rotation}
            rotateSpeed={5}
            minPolarAngle={Math.PI / 2}
            maxPolarAngle={Math.PI / 2}
          />
        </Canvas>
      </div>
    </div>
  );
}

export default App;
