export default function IntroParagraph() {
  return (
    <div className="flex w-full h-full">
      <div className="flex flex-col justify-center items-center gap-6 
                      bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20 
                      rounded-4xl shadow-2xl px-8 py-10 border border-white/20 
                      backdrop-blur-lg transition-all duration-500 
                      hover:shadow-[0_0_30px_#9333EA] hover:from-purple-500/30 hover:to-pink-500/30 
                      max-w-3xl w-full h-full">
        
        {/* Glowing background effect */}
        <div className="relative w-full h-full">
          <div className="absolute inset-0 rounded-3xl 
                          bg-gradient-to-r 
                          blur-2xl opacity-40 animate-pulse-slow"></div>

          {/* Intro Text */}
          <p className="relative z-10 font-poppins text-justify text-base sm:text-lg md:text-xl 
                        leading-relaxed tracking-wide 
                        text-transparent bg-clip-text 
                        bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 
                        transition-all duration-500 
                        hover:from-blue-500 hover:via-purple-600 hover:to-pink-600">
            I’m a <span className="font-semibold text-blue-400">Full-Stack Developer</span> specializing in the 
            <span className="font-semibold text-purple-400"> MERN stack</span> and a passionate 
            <span className="font-semibold text-pink-400"> UI/UX Designer</span>. I can work seamlessly across both frontend and backend. On the frontend, I build responsive and interactive interfaces using HTML, CSS, JavaScript, and TypeScript, along with styling and UI frameworks such as Bootstrap and Tailwind CSS. On the backend, I develop robust applications using frameworks like Django and Express.js, and manage databases with MongoDB, MySQL, and Firebase.
          </p>
        </div>
      </div>
    </div>
  );
}
