import React from "react";
import NebulaBackground from "./components/NebulaBackground";
import Navbar from "./components/Navbar";
import ProfileImage from "./components/ProfileImage";
import image from "./assets/profileImage.png"

function App() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background */}
      <NebulaBackground />

      {/* Main content */}
      <div className="flex flex-col justify-start min-h-screen pt-28">
        {/* Navbar */}
        <Navbar />
        
        {/* Profile Image with enhanced positioning */}
        <div className="relative z-10 mb-8 mt-20">
          <ProfileImage 
            src= {image} 
            name="Midhun P"
            width={300} 
            height={300} 
          />
        </div>
      </div>
    </div>
  );
}

export default App;