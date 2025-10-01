import React from "react";
import NebulaBackground from "./components/NebulaBackground";
import Navbar from "./components/Navbar";
import ProfileImage from "./components/ProfileImage";
import image from "./assets/profileImage.png";
import IntroParagraph from "./components/IntroParagraph";

function App() {
  return (
    <div className="relative min-h-screen w-full overflow-x-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <NebulaBackground />
      </div>

      {/* Main content */}
      <div className="flex flex-col min-h-screen">
        {/* Navbar */}
        <Navbar />

        {/* Sections */}
        {[1, 2].map((section, index) => (
          <section
            key={index}
            className="relative flex flex-col lg:flex-row justify-between items-stretch px-6 md:px-20 lg:px-52 mt-32 md:mt-52 mb-8"
          >
            {/* Profile image */}
            <div className="flex-1 lg:flex-[1] flex justify-center items-center">
              <ProfileImage
                src={image}
                name="Midhun P"
                width={300}
                height={300}
                prof="Full-Stack Developer | MERN Stack Specialist | UI/UX Designer"
              />
            </div>

            {/* Intro paragraph */}
            <div className="flex-1 lg:flex-[2] flex justify-center items-center mt-8 lg:mt-0">
              <IntroParagraph />
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}

export default App;
