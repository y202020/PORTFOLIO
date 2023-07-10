import { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, PositionPoint, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from '../Loader';

const Computers = ({isMobile}) => {
  const computer = useGLTF('./desktop_pc/scene.gltf')
  return (
    <mesh>
      <hemisphereLight intensity={0.35}
        groundColor="black" />
      <pointLight intensity={0.5} />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
      />
      <primitive
        object={computer.scene}
        scale={isMobile ? 0.7 : 0.75}
        position={isMobile ? [0,-3,-2.2]:[0, -3.25, -1.5]}
        rotation={[-0.01, -0.2,-0.08]}
      />
    </mesh>
  )
}
const ComputersCanvas = () =>
{
    const [isMobile, setIsMobile] = useState(false);
    useEffect(() => {
    //Ad a lister for changes to the screen size
    const mediaQuery = window.matchMedia('(max-width:500px)');
    //Set the value of 'is Mobile' state variable
    setIsMobile(mediaQuery.matches);
    // Define a callback fn to handel the changes to the medua query  
    const handelMediaQueryChange = (event) =>
    {
      setIsMobile(event.matches);
      //Add the callback function as a listner for changes to the media query
      mediaQuery.addEventListener('change', handelMediaQueryChange);
       //Remove the listner when the component is unmounted 
      return () => {
        mediaQuery.removeEventListener('change', handelMediaQueryChange);
      }
    }
  },[])
  return (
      <Canvas
        frameloop="demand"
        shadows
        camera={{ position: [20, 3, 5], fov: 25 }}
        gl={{preserveDrawingBuffer:true}}
      > 
      
        <Suspense fallback={<CanvasLoader />}>
          <OrbitControls
            enableZoom={false}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
          />
          <Computers isMobile ={isMobile} />
        </Suspense>

        <Preload all/>
      </Canvas>
    )
  }
export default ComputersCanvas