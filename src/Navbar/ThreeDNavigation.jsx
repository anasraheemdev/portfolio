import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';
import NavigationCube from './NavigationCube'; // Import the separate cube component

const ThreeDNavigation = () => {
  const handleNavigation = (route) => {
    // Implement navigation logic
    console.log(`Navigating to ${route}`);
    // You can use React Router or your preferred navigation method
    // Example: 
    // history.push(`/${route}`);
  };

  return (
    <div className="w-full h-96 relative">
      <Canvas 
        camera={{ position: [0, 0, 5] }}
        className="absolute top-0 left-0 w-full h-full"
      >
        <Suspense fallback={null}>
          {/* Lighting */}
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} />
          
          {/* Navigation Cubes */}
          <NavigationCube 
            position={[-3, 0, 0]} 
            color="#3498db" 
            label="Home"
            onClick={() => handleNavigation('home')}
          />
          <NavigationCube 
            position={[-1, 0, 0]} 
            color="#2ecc71" 
            label="Projects"
            onClick={() => handleNavigation('projects')}
          />
          <NavigationCube 
            position={[1, 0, 0]} 
            color="#e74c3c" 
            label="About"
            onClick={() => handleNavigation('about')}
          />
          <NavigationCube 
            position={[3, 0, 0]} 
            color="#f39c12" 
            label="Contact"
            onClick={() => handleNavigation('contact')}
          />

          {/* Background Elements */}
          <Stars 
            radius={100} 
            depth={50} 
            count={5000} 
            factor={4} 
            saturation={0}
          />

          {/* Interaction Controls */}
          <OrbitControls />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default ThreeDNavigation;