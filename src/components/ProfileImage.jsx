import React from "react";

export default function ProfileImage({
  src,
  width ,
  height ,
  borderSize = "border-[12px]",
  name = "",
  prof="",
}) {
  return (
    <div className="flex items-center justify-center  w-full">
      {/* Enhanced container with gradient background and animations */}
      <div className="flex flex-col items-center gap-4 text-justify
                      bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20 
                      rounded-4xl shadow-2xl px-8 py-8 border border-white/20 
                      backdrop-blur-lg transition-all duration-500 
                      hover:shadow-[0_0_30px_#3B82F6] hover:from-blue-500/30 hover:to-purple-500/30">
        
        {/* Animated background circle */}
        <div className="relative">
          {/* Outer glow effect */}
          <div className="absolute inset-0 rounded-full 
                          bg-gradient-to-r from-blue-400 to-purple-500 
                          blur-lg opacity-50 animate-pulse-slow"></div>
          
          {/* Circle Profile */}
          <div
            className={`group relative rounded-full overflow-hidden cursor-pointer 
                        transition-all duration-500 hover:scale-110`}
            style={{ width: `${width}px`, height: `${height}px` }}
          >
            {/* Gradient border */}
            <div
              className={`rounded-full ${borderSize} border-transparent 
                          bg-gradient-to-r transition-all duration-500 
                          w-full h-full flex items-center justify-center p-1`}
            >
              {/* Inner container for image */}
              <div className="w-full h-full rounded-full bg-white/10 backdrop-blur-sm border border-white/20">
                <img
                  src={src}
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Name Label */}
        <span className="font-poppins  text-lg font-bold tracking-wider 
                         text-transparent bg-clip-text 
                         bg-gradient-to-r from-blue-400 to-purple-500 
                         transition-all duration-500 
                         hover:from-blue-500 hover:to-purple-600">
          {name}
        </span>
        <span className="font-poppins text-center text-xs font-bold tracking-wider 
                         text-transparent bg-clip-text 
                         bg-gradient-to-r from-blue-500 to-purple-500 
                         transition-all duration-500 
                         hover:from-blue-500 hover:to-purple-600">
          {prof}
        </span>
      </div>
    </div>
  );
}
