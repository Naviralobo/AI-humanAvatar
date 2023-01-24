import { Canvas } from "@react-three/fiber";
import { Suspense, useState } from "react";
import { OrbitControls } from "@react-three/drei";
import Blenderman from "./Components/Blenderman";
import Animations from "./Components/animations/Animations";
import "./App.css";
function App() {
  const [action, setAction] = useState({ prev: false, curr: false });
  return (
    <div className="display">
      <div className="left">
        <Animations
          prev={action.curr}
          change={(prev, action) => setAction({ prev: prev, curr: action })}
        />
      </div>
      <div className="right">
        <Canvas
          className="canvas"
          style={{ width: "600px", height: "600px", overflow: "visible " }}
        >
          <ambientLight />
          <pointLight intensity={2} position={[-1, 1, 2]} color="black" />
          <Suspense fallback={null}>
            <Blenderman action={action} />
          </Suspense>
          <OrbitControls />
        </Canvas>
      </div>
    </div>
  );
}

export default App;
