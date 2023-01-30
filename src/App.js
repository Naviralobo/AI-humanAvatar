import { Canvas } from "@react-three/fiber";
import { Suspense, useState } from "react";
import { OrbitControls } from "@react-three/drei";
import Blenderman from "./Components/Blenderman";
import Animations from "./Components/animations/Animations";
import CustomColors from "./Components/customColors/CustomColors";
import Textures from "./Components/customColors/Textures";
import "./App.css";

function App() {
  const [action, setAction] = useState({ prev: false, curr: false });
  const [rotation, setRotation] = useState(false);
  const [texture, setTexture] = useState("/textureImages/noTexture.jpeg");
  const [hair, setHair] = useState("brown");
  const [tops, setTops] = useState("black");
  const [bottoms, setBottoms] = useState("blue");
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
        <Textures
          setTexture={(texture) => {
            setTexture(texture);
          }}
        />
      </div>
      <div className="right">
        <Canvas
          style={{ width: "1000px", height: "600px", overflow: "visible " }}
          shadows
        >
          <ambientLight intensity={0.5} />
          <Suspense fallback={null}>
            <Blenderman
              action={action}
              texture={texture}
              hairColor={hair}
              topColor={tops}
              bottomColor={bottoms}
              shoeColor={shoes}
              bodyColor={body}
              castShadow
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
